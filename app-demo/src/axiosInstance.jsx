import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button from './style_components/Button';
import { Link } from "react-router-dom";

// Axios instance setup
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Change to your actual API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    Accept: "*/*",
    "X-Request-ID": uuidv4(),
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default function AxiosTest() {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();

    try {
      const response = await api.post(
        "/posts",
        { param1: "foo", param2: "bar", userId: 1 },
        { signal: controller.signal }
      );

      setResponseData(response.data);

      // Example redirect condition
      if (response.data.redirectTo) {
        window.location.href = response.data.redirectTo;
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.warn("Request cancelled", err.message);
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }

    // Optionally cancel the request if needed
    // controller.abort();
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Axios API Test</h1>
      <div className="flex justify-center">
        <Button onClick={makeRequest} disabled={loading}>
          {loading ? "Loading..." : "Send POST Request"}
        </Button>
      </div>
      {responseData && (
        <pre className="bg-gray-100 p-2 rounded text-sm">
          {JSON.stringify(responseData, null, 2)}
        </pre>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="flex justify-center">
        <Link
          to="/"
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded transition duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

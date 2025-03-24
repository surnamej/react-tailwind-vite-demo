export default function App() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Zero Margin & Padding</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        The default spacing has been completely removed from the root elements.
      </p>
      <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition">
        Click Me
      </button>
    </div>
  );
}

# React + Tailwind CSS v4 Setup README

This project was set up using **React** with **Vite** and **Tailwind CSS v4** on Windows OS. Tailwind CSS v4 no longer requires a manual configuration file (i.e. no need for `tailwind.config.js` or `postcss.config.js`) for basic usage, which simplifies the process.

## Setup Steps

### 1. Create the React App Using Vite
I used Vite to quickly create a React project. Open command prompt (or PowerShell) and run:

```bash
npm create vite@latest app-demo --template react
cd app-demo
```
### 2. Install Tailwind CSS and Required Packages
Install Tailwind CSS along with PostCSS and Autoprefixer as development dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```
### 3. Configure Tailwind in Your CSS
Since Tailwind CSS v4 uses a zero-config approach, create (or update) the CSS file to include Tailwind’s directives.
In src/index.css, add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 4. Import the CSS in Your Entry File
Ensure that your main entry file imports the CSS. In src/main.jsx, add:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
### 5. Test Tailwind in Your App
Edit src/App.jsx to include some Tailwind styles. For example:
```jsx
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
      Tailwind CSS v4 is working!
    </div>
  );
}

export default App;
```
### 6. Run the Project
Install the dependencies and start the development server:
```bash
npm install
npm run dev
```



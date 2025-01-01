import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./components/Test";
function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-500">
                Hello, Vite + React + Laravel + Tailwind!
            </h1>
            <div className="p-5 bg-red-500"><Test/></div>
        </div>
    );
}

const root = document.getElementById("app");
if (root) {
    ReactDOM.createRoot(root).render(<App />);
}

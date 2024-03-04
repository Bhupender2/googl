import React from "react";
import ReactDOM from "react-dom/client"; // it contains API used to render the react component on the client side
import App from "./App";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./components/Results";

const root = ReactDOM.createRoot(document.getElementById("root")); //react 18 or above we do it like this-- creating a root element where all whole react app will goes in

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route
          path={["/search", "/images", "/videos", "/news"]}
          element={<Results />}
        /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
// APP will get render inside root that we created

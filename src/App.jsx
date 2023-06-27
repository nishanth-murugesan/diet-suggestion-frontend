import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { HomePage } from "./HomePage";
import { Meals } from "./Meals";
import { Signup } from "./Signup";
import { useState, createContext, useContext } from "react";

export const apiContext = createContext();
function App() {
  const [cal, setCal] = useState("");
  const [diet, setDiet] = useState("Anything");
  const [url, setUrl] = useState(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=a13ff03924494e43b63e233c5aa0dedd&timeFrame=day&targetCalories=${cal}&diet=${diet}`
  );
  return (
    <apiContext.Provider value={{ url, setUrl }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/user/diet" element={<Meals />} />
      </Routes>
    </apiContext.Provider>
  );
}
export default App;

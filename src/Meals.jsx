import { useState, useContext, useEffect } from "react";
import { Food } from "./Food";
import { Piechart } from "./Pie";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { apiContext } from "./App.jsx";

export function Meals() {
  const navigate = useNavigate();
  const { url, setUrl } = useContext(apiContext);
  const [foods, setFoods] = useState([]);
  const getCard = () => {
    {
      fetch(url)
        .then((data) => data.json())
        .then((crd) => setFoods(crd));
    }
  };
  useEffect(() => getCard(), []);
  return (
    <section>
      <nav>
        <ul className="home-nav">
          <li style={{ marginRight: "auto" }}>
            <p>Diet Suggestion App</p>
          </li>
          <li>
            <Avatar alt="Travis Howard" src="/_MG_7281.jpg" />
          </li>
          <li>
            <p>user name</p>
          </li>
        </ul>
      </nav>
      <div className="food-list">
        {foods.meals ? (
          foods.meals.map((usr, index) => (
            <Food key={index} user={usr} id={index} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <div>
        {foods.nutrients ? <Piechart values={foods.nutrients} /> : <p></p>}
      </div>
      <div>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate("/user")}
        >
          Back
        </Button>
      </div>
    </section>
  );
}

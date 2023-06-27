import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { apiContext } from "./App.jsx";


export function HomePage() {
  const { url, setUrl } = useContext(apiContext);
  const navigate = useNavigate();
  const [diet, setDiet] = useState("Anything");
  const [cal, setCal] = useState(0);
  const handleChange = (event) => {
    setDiet(event.target.value);
  };
  setUrl(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=a13ff03924494e43b63e233c5aa0dedd&timeFrame=day&targetCalories=${cal}&diet=${diet}`
  );
  const getvalues = () => {
    navigate("/user/diet");
  };
  return (
    <div className="home">
      <nav>
        <ul className="home-nav">
          <li style={{ marginRight: "auto" }}>
            <p>Diet Suggestion App🍲</p>
          </li>
          <li>
            <Avatar alt="Travis Howard" src="/_MG_7281.jpg" />
          </li>
          <li>
            <p>user name</p>
          </li>
        </ul>
      </nav>
      <div className="Abstract">
        <h4>One must eat to live, not live to eat🥘</h4>
        <p>
          Reach your diet and nutritional goals
         a balanced diet is essential for health. Create your meal plan right
          here in a seconds.
        </p>
      </div>
      <div className="selection">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">FoodSutffs</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={diet}
            label="Diet"
            onChange={handleChange}
          >
            <MenuItem value={"Pescetarian"}>Pescetarian</MenuItem>
            <MenuItem value={"Paleo"}>Paleo</MenuItem>
            <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
            <MenuItem value={"Vegan"}>Vegan</MenuItem>
            <MenuItem value={"Anything"}>Anything</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <p style={{ fontFamily: "Arvo, serif", fontSize: "large" }}>
          Set your calories
        </p>
        <form onSubmit={getvalues}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <FilledInput
              id="filled-adornment-weight"
              size="small"
              type="number"
              onChange={(e) => setCal(e.target.value)}
              required
              endAdornment={
                <InputAdornment size="small" position="end">
                  kcal
                </InputAdornment>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "Calories",
              }}
            />
            <FormHelperText id="filled-weight-helper-text">
              Calories
            </FormHelperText>
          </FormControl>
          <div>
            <Button variant="contained" type="submit">
              Generate
            </Button>
          </div>
        </form>
      </div>
      <div>
        <Button variant="outlined" color="error" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
}

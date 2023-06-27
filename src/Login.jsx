import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  userid: yup.string().required().min(5),
  password: yup.string().required().min(8),
});

export function Login() {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        userid: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (e) => {
        const result = await fetch(
          "https://diet-suggestion-backend3.onrender.com/login",
          {
            method: "POST",
            body: JSON.stringify({
              username: e.userid,
              password: e.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        ).then((data) => data);
        if (result.status == 200) {
          navigate("/user");
        } else {
          navigate("/");
        }
        const res = await result.json();
      },
    });

  return (
    <div className="container">
    <div style={{ padding: "200px, 80px" }} className="newclass">
      <div>
        <h1
          style={{

            margin: "auto",
            width: "180px",
            padding:"20px"
          }}
        >
       Diet Suggestion App
        </h1>
      </div>
      <div className="login-box">
        <p>Log in to account</p>
        <form onSubmit={handleSubmit}>
          <TextField
            name="userid"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userid}
            label="user id"
            variant="outlined"
            size="small"
          />
          {touched.userid && errors.userid ? errors.userid : null}
          <TextField
            // id="outlined-basic"
            autoComplete="on"
            label="password"
            variant="outlined"
            size="small"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? errors.password : null}

          <div className="howclass">
            {/* <p style={{ display: "inline-block" }}>new user?</p> */}
            <a onClick={(e) => navigate("/signup")} >create an account</a>
          </div>
          <Button variant="contained" type="submit">
            login
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}

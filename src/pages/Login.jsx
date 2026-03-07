// import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../AppContext";
import { userLogin } from "../api/userLogin";
// import axios from "axios";

function Login() {
  // const [user, setUser] = useState({
  //   username: "admin",
  //   password: "admin",
  // });
  const user = {
    username: "admin",
    password: "admin",
  };
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const loginSubmitHandler = () => {
    userLogin(user)
      .then((data) => {
        // console.log(data);
        sessionStorage.setItem("customerId", data.userId);
        sessionStorage.setItem("jwt", "Bearer " + data.token);
        // console.log(sessionStorage.getItem("jwt"));
        dispatch({ type: "login" });
        // navigate('/cart');
        navigate(-1); // go to the previous page
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // axios
    //   .post("http://localhost:8000/api/v1/auth/signin", user, {
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((res) => {
    //     // const jwtToken = res.headers.authorization;
    //     // if (jwtToken !== null) {
    //     //   sessionStorage.setItem("jwt", jwtToken);
    //     //   setAuth(true);
    //     // }

    //     // console.log(res);
    //     sessionStorage.setItem("customerId", res.data.userId);
    //     sessionStorage.setItem("jwt", "Bearer " + res.data.token);
    //     console.log(sessionStorage.getItem("jwt"));

    //     dispatch({ type: "login" });
    //     // navigate('/cart');
    //     navigate(-1); // go to the previous page
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <h5 className="bg-primary text-white text-center p-2">Login</h5>
      <button className="btn btn-secondary" onClick={loginSubmitHandler}>
        Click Me to Login
      </button>
    </>
  );
}

export default Login;

import { useEffect, useState } from "react";
import api from "../services/axios.service";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useAuthLoginHook = () => {
  const navigation = useNavigate();
  const [LoginForm, setLoginForm] = useState([]);
  const [LoginFormFailed, setLoginFormFailed] = useState("");
  const [Username, setUsername] = useState("");

  // Check Token ada atau tidak
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Cek Token
    if (token) {
      setUsername(getUser(token));
    } else {
      navigation("/");
    }
  }, []);

  const login = async (data, callback) => {
    await api
      .post("auth/login", data)
      .then((res) => {
        callback(true, res.data.token);
        // console.log(res);
      })
      .catch((error) => {
        callback(false, error);
      });

    // try {
    //   const dataLogin = await api.post("auth/login", data);
    //   callback(true, res.data.token);
    //   setLoginForm(dataLogin);
    // } catch (error) {
    //   callback(false, error);
    //   console.log(error);
    // }
  };

  // GET USER BY TOKEN
  const getUser = (token) => {
    const decoded = jwt_decode(token);
    return decoded.user;
  };

  // HANDLE EVENT DAN VALUE INPUT
  const handleValueInput = (key, value) => {
    setLoginForm({ ...LoginForm, [key]: value });
  };

  return {
    LoginForm,
    LoginFormFailed,
    setLoginFormFailed,
    login,
    handleValueInput,
    getUser,
    Username,
  };
};

export default useAuthLoginHook;

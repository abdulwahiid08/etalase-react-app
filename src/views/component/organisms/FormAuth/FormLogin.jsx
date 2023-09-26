import { useEffect, useRef } from "react";
import Button from "../../atoms/button/ButtonSubmit";
import InputFormMolecule from "../../molecules/InputForm/InputForm";
import useAuthLoginHook from "../../../../hooks/useAuthLoginHook";
import { useNavigate } from "react-router-dom";

function FormLoginOrganism() {
  const {
    LoginForm,
    LoginFormFailed,
    setLoginFormFailed,
    login,
    handleValueInput,
  } = useAuthLoginHook();
  const inputeUsernameRef = useRef();
  const navigation = useNavigate();

  // DOM FOCUS INPUT
  // useEffect(() => {
  //   inputeUsernameRef.current.focus();
  // });

  // Event Button Login
  const handleOnLogin = (event) => {
    event.preventDefault();

    login({ ...LoginForm }, (status, res) => {
      // Status mengembalikan nilai true or false
      if (status) {
        localStorage.setItem("token", res);
        navigation("/product");
      } else {
        setLoginFormFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleOnLogin}>
      <InputFormMolecule
        valueRef={inputeUsernameRef}
        label="Username"
        type="text"
        name="username"
        id="username"
        placeholder="exmaple"
        handleValueInput={handleValueInput}
      ></InputFormMolecule>
      <InputFormMolecule
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="********"
        handleValueInput={handleValueInput}
      ></InputFormMolecule>
      <Button variant="bg-blue-700 w-full" type="submit">
        Login
      </Button>
      {LoginFormFailed && (
        <p className="text-center text-red-600 mt-2">{LoginFormFailed}</p>
      )}
    </form>
  );
}

export default FormLoginOrganism;

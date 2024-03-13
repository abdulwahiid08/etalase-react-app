import { Link } from "react-router-dom";
import FormLoginOrganism from "../../component/organisms/FormAuth/FormLogin";
import { useContext, useEffect } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

function AuthLogin(props) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode); // State Management use useContext

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div
      className={`flex justify-center min-h-screen items-center gap-x-3 ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-2 right-2 bg-blue-500 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-400 mb-8">
          Welcome, please enter your account
        </p>
        <FormLoginOrganism></FormLoginOrganism>
        <p className="text-sm text-center mt-5">
          Don't have an account?&nbsp;
          {/* Router Link */}
          <Link to="/register" className="font-bold text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthLogin;

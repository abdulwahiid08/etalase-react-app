import { Link } from "react-router-dom";
import FormLoginOrganism from "../../component/organisms/FormAuth/FormLogin";
import { useEffect } from "react";

function AuthLogin(props) {
  return (
    <div className="flex justify-center min-h-screen items-center gap-x-3">
      <div className="w-full max-w-xs">
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

import { Link } from "react-router-dom";
import FormRegisterOrganism from "../../component/organisms/FormAuth/FormRegister";

function AuthRegister(props) {
  const { title, titleContent, children } = props;

  return (
    <div className="flex justify-center min-h-screen items-center gap-x-3">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Register</h1>
        <p className="font-medium text-slate-400 mb-8">
          Welcome, please make your account
        </p>
        <FormRegisterOrganism></FormRegisterOrganism>
        <p className="text-sm text-center mt-5">
          Have an account?&nbsp;
          {/* Router Link */}
          <Link to="/" className="font-bold text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthRegister;

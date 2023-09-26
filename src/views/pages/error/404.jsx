import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);
  return (
    <div
      id="error-page"
      className="flex justify-center min-h-screen items-center flex-col"
    >
      <h1 className="font-bold text-2xl mb-2">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;

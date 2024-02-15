import { useSelector } from "react-redux";
import useAuthLoginHook from "../../../hooks/useAuthLoginHook";
import Button from "../atoms/button/ButtonSubmit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const Cart = useSelector((state) => state.cart.data); // Get State From Redux

  /* Hooks */
  const navigation = useNavigate();
  const { Username } = useAuthLoginHook(); // GET USER FROM useAuthLoginHook

  const handleOnLogout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };

  // Sum Total Cart
  useEffect(() => {
    const sum = Cart.reduce((acc, curr) => {
      return acc + curr.qty;
    }, 0);
    setTotalProduct(sum);
  }, [Cart]);

  return (
    <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10 font-semibold">
      {Username}
      <Button variant="ml-5 bg-red-600" onClick={handleOnLogout}>
        Logout
      </Button>
      <div className="bg-gray-800 p-2 rounded-md flex items-center ml-5">
        {totalProduct}
      </div>
    </div>
  );
};

export default Navbar;

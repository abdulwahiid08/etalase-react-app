import { useEffect, useRef, useState } from "react";
import api from "../services/axios.service";
import useAuthLoginHook from "./useAuthLoginHook";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useProductHook = () => {
  /* Use State */
  const [Product, setProduct] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  // const [Cart, setCart] = useState([]);

  /* Hooks */
  const navigation = useNavigate();
  const { Username } = useAuthLoginHook(); // GET USER FROM useAuthLoginHook

  /** State Management Redux */
  const Cart = useSelector((state) => state.cart.data); // Mengambil data cart dari state management redux

  /* Use Ref */
  const totalPriceRef = useRef();

  /* Use Effect */

  useEffect(() => {
    getData();
  }, []);

  // SUM Total price
  useEffect(() => {
    if (Product.length > 0 && Cart.length > 0) {
      /**  MENJUMLAH DENGAN MENGGUNAKAN REDUCE */
      const sum = Cart.reduce((acc, item) => {
        const product = Product.find((data) => data.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);

      /** SET PRODUCT CART TO JSON */
      localStorage.setItem("cart", JSON.stringify(Cart));
    }
  }, [Cart, Product]);

  /** setCart langsung memiliki data */
  // useEffect(() => {
  //   const cartItem = JSON.parse(localStorage.getItem("cart"));
  //   const newItem = cartItem.filter((val) => val.qty !== 0); // Cek qty yang tidak sama dengan 0
  //   // SAVE AND GET AT LOCAL STORAGE
  //   setCart(newItem || []);
  // }, []);

  /**  Manipulasi DOM Menggunakan useRef */
  useEffect(() => {
    if (Cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [Cart]);

  // === KUMPULAN HANDLE ===
  // Handle Button Add Cart, Handle ini akan berjalan jika button di klik
  // const handleOnAddCart = (id) => {
  //   // JIKA PRODUK yang diklik sudah ada, maka cart akan mencari produk yang sesuai dengan id nya dan akan menambah qty nya.
  //   if (Cart.find((data) => data.id === id)) {
  //     // MEMBUAT QUANTITY BERTAMBAH JIKA DIKLIK
  //     const increamentQty = Cart.map((item) =>
  //       item.id === id ? { ...item, qty: item.qty + 1 } : item
  //     );

  //     setCart(increamentQty);
  //   } else {
  //     // JIKA PRODUK yang diklik belum ada, maka setCart awal berisikan id yang diklik dan qty 1
  //     setCart([...Cart, { id: id, qty: 1 }]);
  //   }
  // };

  /**  Delete Cart */
  // const handleDeleteCart = (id) => {
  //   // alert(id);
  //   if (Cart.find((data) => data.id === id)) {
  //     const decrementQty = Cart.map((item) =>
  //       item.id === id ? { ...item, qty: item.qty - 1 } : item
  //     );

  //     setCart(decrementQty);
  //   }
  // };

  /**
   * Handle button logout
   * Removes token from local storage and navigates to the home page.
   */
  const handleOnLogout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };

  /** GET DATA */
  const getData = async () => {
    try {
      const response = await api.get("products");

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    Product,
    Cart,
    TotalPrice,
    Username,
    // handleOnAddCart,
    // handleDeleteCart,
    handleOnLogout,
    totalPriceRef,
  };
};

export default useProductHook;

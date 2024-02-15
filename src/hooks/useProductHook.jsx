import { useEffect, useRef, useState } from "react";
import api from "../services/axios.service";
import { useSelector } from "react-redux";

const useProductHook = () => {
  /* Use State */
  const [Product, setProduct] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  // const [Cart, setCart] = useState([]);

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
    totalPriceRef,
    // Username,
    // handleOnAddCart,
    // handleDeleteCart,
    // handleOnLogout,
  };
};

export default useProductHook;

import { useEffect, useRef, useState } from "react";
import api from "../services/axios.service";
import useAuthLoginHook from "./useAuthLoginHook";
import { useNavigate } from "react-router-dom";

const useProductHook = () => {
  // const datas = [
  //   {
  //     id: 1,
  //     titleProduct: "Kaos Oblong",
  //     price: 200000,
  //     image: "/images/tshirt-1.jpg",
  //     altImg: "T-Shirt",
  //     desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  //    dolore tenetur nihil? Porro quod quidem magnam voluptas, consectetur
  //    iusto voluptates asperiores assumenda eveniet iure, quasi eius,
  //    dolores id similique inventore!`,
  //   },
  //   {
  //     id: 2,
  //     titleProduct: "Kemeja",
  //     price: 300000,
  //     image: "/images/tshirt-1.jpg",
  //     altImg: "",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //   },
  //   {
  //     id: 3,
  //     titleProduct: "Jas",
  //     price: 800000,
  //     image: "/images/tshirt-1.jpg",
  //     altImg: "",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  //   },
  // ];

  // === KUMPULAN USE STATE ===

  // Get data from API
  const [Product, setProduct] = useState([]);
  const [Cart, setCart] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [Username, setUsername] = useState("");
  const navigation = useNavigate();
  // GET USER FROM useAuthLoginHook
  const { getUser } = useAuthLoginHook();
  // === KUMPULAN USE REF ===
  const totalPriceRef = useRef();

  // === KUMPULAN USE EFFECT ===
  // Get User
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Cek Token
    if (token) {
      setUsername(getUser(token));
    } else {
      navigation("/");
    }
  }, []);

  // setCart langsung memiliki data
  useEffect(() => {
    // setCart([
    //   {
    //     id: 1,
    //     qty: 1,
    //   },
    // ]);

    // SAVE AT LOCAL STORAGE
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // SUM Total price
  useEffect(() => {
    if (Product.length > 0 && Cart.length > 0) {
      // MENJUMLAH DENGAN MENGGUNAKAN REDUCE
      const sum = Cart.reduce((acc, item) => {
        const product = Product.find((data) => data.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);

      // SET PRODUCT CART TO JSON
      localStorage.setItem("cart", JSON.stringify(Cart));
    }
  }, [Cart, Product]);

  // Manipulasi DOM Menggunak useRef
  useEffect(() => {
    if (Cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [Cart]);

  // === KUMPULAN HANDLE ===
  // Handle Button Add Cart, Handle ini akan berjalan jika button di klik
  const handleOnAddCart = (id) => {
    // MEMBUAT QUANTITY BERTAMBAH JIKA DIKLIK
    if (Cart.find((data) => data.id === id)) {
      setCart(
        Cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...Cart, { id: id, qty: 1 }]);
    }
    // setTotalPrice(TotalPrice + 1);
  };

  // Handle button logout
  const handleOnLogout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };

  // GET DATA
  const getData = async () => {
    try {
      const response = await api.get("products");

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // RUN GET DATA
  useEffect(() => {
    getData();
  }, []);

  return {
    Product,
    Cart,
    TotalPrice,
    Username,
    handleOnAddCart,
    handleOnLogout,
    totalPriceRef,
  };
};

export default useProductHook;

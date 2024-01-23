import { useEffect, useRef, useState } from "react";
import Button from "../component/atoms/button/ButtonSubmit";
import CardProduct from "../component/organisms/CardProduct";
import useProductHook from "../../hooks/useProductHook";

const ProductPage = () => {
  const {
    Product,
    Cart,
    TotalPrice,
    Username,
    handleOnAddCart,
    handleOnLogout,
    totalPriceRef,
    handleDeleteCart,
  } = useProductHook();

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10 font-semibold">
        {Username}
        <Button variant="ml-5 bg-red-600" onClick={handleOnLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap ms-5">
          {Product.length > 0 &&
            Product.map((data) => (
              <CardProduct key={data.id}>
                <CardProduct.HeaderCard
                  sourceImg={data.image}
                  altImg={data.category}
                />
                <CardProduct.BodyCard titleBodyCard={data.title}>
                  {data.description}
                </CardProduct.BodyCard>
                <CardProduct.FooterCard
                  price={data.price}
                  handleDeleteCart={handleDeleteCart}
                  handleOnAddCart={handleOnAddCart}
                  id={data.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h2 className="text-2xl font-bold text-blue-700 ml-5">Cart</h2>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Product.length > 0 &&
                Cart.map((item, idx) => {
                  // Mencari data product di dalam Array Product
                  const dataProduct = Product.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id} className="mb-4">
                      <td>{idx + 1}</td>
                      <td>{dataProduct.title}</td>
                      <td>Rp.{dataProduct.price.toLocaleString("id-ID")}</td>
                      <td>{item.qty}</td>
                      <td>
                        Rp.
                        {(dataProduct.price * item.qty).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={4}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp.{""}
                    {TotalPrice.toLocaleString("ID-id")}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

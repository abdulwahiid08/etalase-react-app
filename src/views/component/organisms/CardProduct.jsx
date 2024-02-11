import { Link } from "react-router-dom";
import ButtonAdd from "../atoms/button/ButtonAdd";
import ButtonDelete from "../atoms/button/ButtonKurang";
import Button from "../atoms/button/ButtonSubmit";
import { useDispatch } from "react-redux";
import { addToCart, minusTocart } from "../../../redux/reduxSlice/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between mb-2">
      {children}
    </div>
  );
};

// Nested Component

// Component Header Card
const HeaderCard = (props) => {
  const { sourceImg, altImg, idProduct } = props;
  return (
    <Link to={`/product/${idProduct}`}>
      <img
        src={sourceImg}
        alt={altImg}
        className="p-5 rounded-t-lg w-full h-60 object-cover"
      />
    </Link>
  );
};

// Component Body Card
const BodyCard = (props) => {
  const { titleBodyCard, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <h5 className="text-xl font-semibold tracking-tight text-white text-justify">
        {titleBodyCard.substring(0, 20)}...
      </h5>
      <p className="text-m text-white mt-2">{children.substring(0, 100)}...</p>
    </div>
  );
};

// Component Footer
const FooterCard = (props) => {
  const {
    id,
    price,
    // handleOnAddCart,
    // handleDeleteCart,
  } = props;
  const dispatch = useDispatch(); // Redux

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white">
        Rp. {price.toLocaleString("id-ID")}
      </span>
      {/* Without Use Redux */}
      {/* <ButtonDelete variant="bg-red-600" onClick={() => handleDeleteCart(id)}>
        -
      </ButtonDelete> */}
      {/* Use Redux */}
      <ButtonDelete
        variant="bg-red-600"
        onClick={() => dispatch(minusTocart({ id, qty: 1 }))}
      >
        -
      </ButtonDelete>

      {/* Without Use Redux */}
      {/* <ButtonAdd variant="bg-blue-600" onClick={() => handleOnAddCart(id)}>
        +
      </ButtonAdd> */}
      {/* Use Redux */}
      <ButtonAdd
        variant="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        +
      </ButtonAdd>
    </div>
  );
};

// Inject component child HeaderCard, BodyCard, FooterCard to CardProduct (Parent Component)
CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;

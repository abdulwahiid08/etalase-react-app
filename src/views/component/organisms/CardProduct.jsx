import Button from "../atoms/button/ButtonSubmit";

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
  const { sourceImg, altImg } = props;
  return (
    <a href="">
      <img
        src={sourceImg}
        alt={altImg}
        className="p-5 rounded-t-lg w-full h-60 object-cover"
      />
    </a>
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
  const { price, handleOnAddCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white">
        Rp. {price.toLocaleString("id-ID")}
      </span>
      <Button variant="bg-blue-600" onClick={() => handleOnAddCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

// Inject component child HeaderCard, BodyCard, FooterCard to CardProduct (Parent Component)
CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;

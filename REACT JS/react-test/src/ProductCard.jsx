const ProductCard = (props) => {
  return (
    <div className="border p-6 rounded-xl m-5 bg-green-600">
      <ol>Name : {props.name}</ol>
      <ol>Price : {props.price}</ol>
      <ol>
        Status :
        {props.inStock ? (
          <span className="text-green-500">Available</span>
        ) : (
          <span className="text-red-500">Sold Out</span>
        )}
      </ol>
    </div>
  );
};

export default ProductCard;

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	const { name, price, numOfReviews } = product;
	const options = {
		edit: false,
		color: "rgba(20, 20, 20, 0.1)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 7 : 12,
		value: product.ratings,
		isHalf: true,
	};
	return (
		<>
			<Link
				className="productCard"
				to={`/product/${product._id}`}
			>
				<img src={product.images[0].url} alt="" />
				<p>{name}</p>
				<div>
					<ReactStars className="stars" {...options} />
					<span>{numOfReviews}Reviews</span>
				</div>
				<span>${price}</span>
			</Link>
		</>
	);
};

export default Product;

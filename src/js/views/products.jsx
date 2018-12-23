import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/products.css";

{
	/*
View Name: Products
Function: Creates a Card (Col-4) to display a single product. The View is called
		  by the Navbar Categories Tab which passed an Id that defines the category.
		  It start by mapping the store by the category selected thru the Tab Categories.
		  And populates the screen with all products available in that category, lining 
		  them up 3 products by row.
		  
Data Structure:	store.products[].title
				store.products[].description_short
				store.products[].images[]  (5 images per product)
				
Navigation:	This View includes two buttos at the bottom of the Card. One for
			more information, which calls the productdetail view and the other 
			one that adds the product to the cart.
*/
}

export class Products extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div>
						<Context.Consumer>
							{({ store, actions }) => {
								const events = actions.getCategoryDescription(
									this.props.match.params.theid1
								);
								return events.map((item, index) => {
									return (
										<h2
											className="titulo d-flex justify-content-center"
											key={index}>
											{"Category: " + item.description}{" "}
										</h2>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							let cat = this.props.match.params.theid1;
							const events = actions.getProducts(cat);
							return events.map((item, index) => {
								return (
									<div key={index} className="col-sm-4">
										<div className="card cardproducts text-dark bg-light">
											<div className="card-header bg-secondary text-center text-white">
												<img src={item.images[0]} />
											</div>
											<div className="card-body ">
												<h5 className="card-title">
													{item.title}
												</h5>
												<p className="card-text text-left">
													{item.description_short}
												</p>
											</div>
											<div>
												<button
													className="btn btn-sm buynow"
													type="button"
													onClick={() =>
														actions.addToCart(item)
													}>
													ADD CART
												</button>

												<Link
													to={
														"/productdetail/" +
														item.code
													}
													href="#"
													className="btn btn-sm moreinfo">
													MORE INFO
												</Link>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
Products.propTypes = {
	match: PropTypes.object
};

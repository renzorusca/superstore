import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

{
	/*
View Name: Productdetail
Function: Creates a Card to display a single detailed product view. The View is called
		  by the more info button on products view and from home page thru clicking to the
		  images. One  parameter is passed. The product code and index.
		  It get all the detailed information from store.
		  
Data Structure:	store.products[prodID].title
				store.products[prodID].description_short
				store.products[prodID].images[]  (5 images per product)
				
Navigation:	This View includes one button at the bottom of the Card. One for
			adding this product to the store.card array.
			
			
			NOTE: Below you see the temporary import of images, ultimately will
				  be fetched.
*/
}

import img01A from "../../img/000001-1.png";
import img01B from "../../img/000001-2.png";
import img01C from "../../img/000001-3.png";
import img01D from "../../img/000001-4.png";
import img01E from "../../img/000001-5.png";
import img02A from "../../img/000002-1.png";
import img02B from "../../img/000002-2.png";
import img02C from "../../img/000002-3.png";
import img02D from "../../img/000002-4.png";
import img02E from "../../img/000002-5.png";
import img03A from "../../img/000003-1.png";
import img03B from "../../img/000003-2.png";
import img03C from "../../img/000003-3.png";
import img03D from "../../img/000003-4.png";
import img03E from "../../img/000003-5.png";
import img04A from "../../img/000004-1.png";
import img04B from "../../img/000004-2.png";
import img04C from "../../img/000004-3.png";
import img04D from "../../img/000004-4.png";
import img04E from "../../img/000004-5.png";

import img11A from "../../img/000011-1.png";
import img11B from "../../img/000011-2.png";
import img11C from "../../img/000011-3.png";
import img11D from "../../img/000011-4.png";
import img11E from "../../img/000011-5.png";
import img12A from "../../img/000012-1.png";
import img12B from "../../img/000012-2.png";
import img12C from "../../img/000012-3.png";
import img12D from "../../img/000012-4.png";
import img12E from "../../img/000012-5.png";
import img13A from "../../img/000013-1.png";
import img13B from "../../img/000013-2.png";
import img13C from "../../img/000013-3.png";
import img13D from "../../img/000013-4.png";
import img13E from "../../img/000013-5.png";
import img14A from "../../img/000014-1.png";
import img14B from "../../img/000014-2.png";
import img14C from "../../img/000014-3.png";
import img14D from "../../img/000014-4.png";
import img14E from "../../img/000014-5.png";

import img21A from "../../img/000021-1.png";
import img21B from "../../img/000021-2.png";
import img21C from "../../img/000021-3.png";
import img21D from "../../img/000021-4.png";
import img21E from "../../img/000021-5.png";
import img22A from "../../img/000022-1.png";
import img22B from "../../img/000022-2.png";
import img22C from "../../img/000022-3.png";
import img22D from "../../img/000022-4.png";
import img22E from "../../img/000022-5.png";
import img23A from "../../img/000023-1.png";
import img23B from "../../img/000023-2.png";
import img23C from "../../img/000023-3.png";
import img23D from "../../img/000023-4.png";
import img23E from "../../img/000023-5.png";
import img24A from "../../img/000024-1.png";
import img24B from "../../img/000024-2.png";
import img24C from "../../img/000024-3.png";
import img24D from "../../img/000024-4.png";
import img24E from "../../img/000024-5.png";

import img31A from "../../img/000031-1.png";
import img31B from "../../img/000031-2.png";
import img31C from "../../img/000031-3.png";
import img31D from "../../img/000031-4.png";
import img31E from "../../img/000031-5.png";
import img32A from "../../img/000032-1.png";
import img32B from "../../img/000032-2.png";
import img32C from "../../img/000032-3.png";
import img32D from "../../img/000032-4.png";
import img32E from "../../img/000032-5.png";
import img33A from "../../img/000033-1.png";
import img33B from "../../img/000033-2.png";
import img33C from "../../img/000033-3.png";
import img33D from "../../img/000033-4.png";
import img33E from "../../img/000033-5.png";
import img34A from "../../img/000034-1.png";
import img34B from "../../img/000034-2.png";
import img34C from "../../img/000034-3.png";
import img34D from "../../img/000034-4.png";
import img34E from "../../img/000034-5.png";

import "../../styles/productdetail.css";

export class Productdetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			// Access to Store

			<Context.Consumer>
				{({ store, actions }) => {
					let prodID = this.props.match.params.theid1;
					const events = actions.getDetails(prodID);
					return events.map((item, index) => {
						return (
							<div key={index} className="container">
								<div className="card">
									<div className="container-fluid">
										<div className="wrapper row">
											<div className="preview col-md-6">
												<div className="preview-pic tab-content">
													<div
														className="tab-pane active"
														id="pic-1">
														<img
															src={item.images[0]}
														/>
													</div>
													<div
														className="tab-pane"
														id="pic-2">
														<img
															src={item.images[1]}
														/>
													</div>
													<div
														className="tab-pane"
														id="pic-3">
														<img
															src={item.images[2]}
														/>
													</div>
													<div
														className="tab-pane"
														id="pic-4">
														<img
															src={item.images[3]}
														/>
													</div>
													<div
														className="tab-pane"
														id="pic-5">
														<img
															src={item.images[4]}
														/>
													</div>
												</div>
												<ul className="preview-thumbnail nav nav-tabs">
													<li className="active">
														<a
															data-target="#pic-1"
															data-toggle="tab">
															<img
																src={
																	item
																		.images[0]
																}
															/>
														</a>
													</li>
													<li>
														<a
															data-target="#pic-2"
															data-toggle="tab">
															<img
																src={
																	item
																		.images[1]
																}
															/>
														</a>
													</li>
													<li>
														<a
															data-target="#pic-3"
															data-toggle="tab">
															<img
																src={
																	item
																		.images[2]
																}
															/>
														</a>
													</li>
													<li>
														<a
															data-target="#pic-4"
															data-toggle="tab">
															<img
																src={
																	item
																		.images[3]
																}
															/>
														</a>
													</li>
													<li>
														<a
															data-target="#pic-5"
															data-toggle="tab">
															<img
																src={
																	item
																		.images[4]
																}
															/>
														</a>
													</li>
												</ul>
											</div>
											<div className="details col-md-6">
												<h3 className="product-title">
													{item.title}
												</h3>
												<div className="rating">
													<div className="stars">
														<span className="fa fa-star checked" />
														<span className="fa fa-star checked" />
														<span className="fa fa-star checked" />
														<span className="fa fa-star checked" />
														<span className="fa fa-star" />
													</div>
													<span className="review-no">
														{"Reviews: " +
															item.review}
													</span>
												</div>
												<p className="product-description">
													{item.description}
												</p>
												<h4 className="price">
													price:{" "}
													<span>${item.price}</span>
												</h4>

												<div className="action">
													<button
														className="add-to-cart btn btn-default"
														type="button"
														onClick={() =>
															actions.addToCart(
																item
															)
														}>
														add to cart
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}

Productdetail.propTypes = {
	match: PropTypes.object
};

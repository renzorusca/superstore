import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/shoppingcart.css";
import PaypalExpressBtn from "react-paypal-express-checkout";
import img01A from "../../img/000001-1.png";

export class ShoppingCart extends React.Component {
	render() {
		const onSuccess = payment => {
			// 1, 2, and ... Poof! You made it, everything's fine and dandy!
			alert("Payment successful!", payment);
			// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		};
		const valortotal = 100.0;
		const client = {
			sandbox:
				"AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R"
		};
		return (
			<main className="page">
				<section className="shopping-cart dark">
					<div className="container">
						<div className="block-heading">
							<h2>Shopping Cart</h2>
						</div>
						<div className="content">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									<div className="items">
										<Context.Consumer>
											{({ store, actions }) => {
												return store.cart.map(
													(item, index) => {
														return (
															<div
																key={index}
																className="product">
																<div className="row">
																	<div className="col-md-3">
																		<img
																			className="img-fluid mx-auto d-block image"
																			src={
																				item.image
																			}
																		/>
																	</div>
																	<div className="col-md-8">
																		<div className="info">
																			<div className="row">
																				<div className="col-md-5 product-name">
																					<div className="product-name">
																						<a href="#">
																							{
																								item.title
																							}
																						</a>
																						<div className="product-info">
																							<div>
																								Description:{" "}
																								<span className="value">
																									{
																										item.description
																									}
																								</span>
																							</div>
																							<div>
																								Price:{" "}
																								<span className="value">
																									{
																										item.price
																									}
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-md-2">
																					<label>
																						Quantity
																					</label>
																					<span className="price">
																						{
																							item.qty
																						}
																					</span>
																				</div>
																				<div className="col-md-1" />
																				<div className="col-md-3">
																					<label>
																						Sub-Total
																					</label>
																					<span className="price">
																						{
																							item.subtotal
																						}
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														);
													}
												);
											}}
										</Context.Consumer>
									</div>
								</div>
								<Context.Consumer>
									{({ store, actions }) => {
										return store.totalcart.map(
											(item, index) => {
												return (
													<div
														className="col-md-12 col-lg-4"
														key={index}>
														<div className="summary">
															<h3>Summary</h3>
															<div className="summary-item">
																<span className="text">
																	Subtotal
																</span>
																<span className="price">
																	{
																		item.subtotal
																	}
																</span>
															</div>
															<div className="summary-item">
																<span className="text">
																	Taxes(
																	{store.tax}
																	%)
																</span>
																<span className="price">
																	{item.tax}
																</span>
															</div>
															<div className="summary-item">
																<span className="text">
																	Shipping
																</span>
																<span className="price">
																	{
																		item.shipping
																	}
																</span>
															</div>
															<div className="summary-item">
																<span className="text">
																	Total
																</span>
																<span className="pricet">
																	{
																		item.grandtotal
																	}
																</span>
															</div>
															<button
																type="button"
																className="btn btn-light btn-lg btn-block">
																<PaypalExpressBtn
																	env={
																		"sandbox"
																	}
																	client={
																		client
																	}
																	currency={
																		"USD"
																	}
																	total={
																		valortotal
																	}
																	onSuccess={
																		onSuccess
																	}
																/>
															</button>
														</div>
													</div>
												);
											}
										);
									}}
								</Context.Consumer>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container containerC">
				<div className="container2">
					<div className="row rowC">
						<div className="col-sm">
							<br />
							<br />
							<h4>The best-E-products</h4>

							<div
								id="myCarousel"
								className="carousel slide"
								data-ride="carousel">
								<div className="carousel-inner">
									<Context.Consumer>
										{({ store, actions }) => {
											const events = actions.getProducts(
												0
											);
											return events.map((item, index) => {
												return (
													<div
														key={index}
														className={
															index == 1
																? "carousel-item active"
																: "carousel-item"
														}>
														<h5 className="card-title text-dark">
															<center>
																{item.code}
																{"-"}
																{item.title}
															</center>
														</h5>
														<Link
															to={
																"/productdetail/" +
																item.code
															}>
															<img
																className="imgC2 d-block"
																src={
																	"/" +
																	item.code +
																	"-1.png"
																}
																width="350"
																height="350"
																alt="First carousel pic	Alt"
															/>
														</Link>
														<br /> <br /> <br />
														<div className="carousel-caption d-none text-dark d-md-block">
															<h5>
																{
																	item.description_short
																}
															</h5>
														</div>
														{/* Previous */}
														<a
															className="carousel-control-prev"
															href="#myCarousel"
															role="button"
															data-slide="prev">
															<span
																className="carousel-control-prev-icon"
																aria-hidden="true"
															/>
															<span className="sr-only">
																Previous
															</span>
														</a>
														{/* Next */}
														<a
															className="carousel-control-next"
															href="#myCarousel"
															role="button"
															data-slide="next">
															<span
																className="carousel-control-next-icon"
																aria-hidden="true"
															/>
															<span className="sr-only">
																Next
															</span>
														</a>
													</div>
												);
											});
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Second part*/}

				<div className="container3">
					<div className="row rowC" align-items-center>
						<Context.Consumer>
							{({ store, actions }) => {
								const events = actions.getProducts(1);

								return events.map((item, index) => {
									return (
										<div key={index} className="col-sm-4">
											<div className="card cardproducts text-dark bg-light">
												<div className="card-header bg-secondary text-center text-dark">
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
															actions.addToCart(
																item
															)
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
			</div>
		);
	}
}

Home.propTypes = {
	match: PropTypes.object
};

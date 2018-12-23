import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import nofoundpic from "../../img/nofoundpic.png";

import { Context } from "../store/appContext.jsx";

import "../../styles/searchproducts.css";

export class Searchproducts extends React.Component {
	render() {
		{
			var idx2 = document.URL.indexOf("?");
			var params2 = new Array();

			if (idx2 != -1) {
				var pairs2 = document.URL.substring(
					idx2 + 1,
					document.URL.length
				).split("&");
				for (var i2 = 0; i2 < pairs2.length; i2++) {
					var nameVal2 = pairs2[i2].split("=");
					params2[nameVal2[0]] = nameVal2[1];
				}
			}

			var wkStr22 = unescape(params2["wksearch"]);
		}

		return (
			<div className="container containersp">
				{/* Search products by description/code and display them*/}

				<div className="container3sp">
					<div className="row rowC" align-items-center>
						<div className="searchhead">
							<br />
							<br />
							<p>
								Results for ... <b>{wkStr22}</b>
							</p>
						</div>
					</div>
					<div className="row rowC" align-items-center>
						<Context.Consumer>
							{({ store, actions }) => {
								const events = actions.getProductsByToken(
									wkStr22
								);
								if (events.length > 0) {
									for (let i = 0; i < events.length; i++) {
										return events.map((item, index) => {
											return (
												<div
													key={index}
													className="col-sm-4">
													<div className="card cardproducts text-dark bg-light">
														<div className="card-header bg-secondary text-center text-white">
															<img
																src={
																	item
																		.images[0]
																}
															/>
														</div>
														<div className="card-body ">
															<h5 className="card-title">
																{item.title}
															</h5>
															<p className="card-text text-left">
																{
																	item.description_short
																}
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
									}
								} else {
									return (
										<div className="nofoundblock">
											<h1>Not items found</h1>{" "}
											<i className="fas fa-sad-tear fa-2x pr-3" />
											<br /> <br />
											<div className="nofoundpicdiv">
												<img
													src="/nofoundpic.png"
													width="250px"
													height="250px"
													alt="No found image"
												/>
											</div>
										</div>
									);
								}
							}}
						</Context.Consumer>
					</div>
				</div>
				<br />

				<br />
			</div>
		);
	}
}

Searchproducts.propTypes = {
	match: PropTypes.object
};

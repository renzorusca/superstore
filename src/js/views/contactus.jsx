import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/contactus.css";
import companyphoto from "../../img/companyphoto.png";
import smiley from "../../img/smiley.png";

export class Contactus extends React.Component {
	render() {
		return (
			<div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLabel">
									Your comments are important...
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label
											htmlFor="recipient-name"
											className="form-control-label">
											Recipient:
										</label>
										<input
											type="text"
											className="form-control"
											id="recipient-name"
											placeholder="support@superestore.com"
										/>
									</div>
									<div className="form-group">
										<label
											htmlFor="message-text"
											className="form-control-label">
											Message:
										</label>
										<textarea
											className="form-control"
											id="message-text"
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal">
									Close
								</button>
								<button
									type="button"
									className="btn btn-secondary">
									Send message
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="containerct">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.contact.map((item, index) => {
								return (
									<div className="container4" key={index}>
										<div className="contacttitle">
											<br />
											<h4>
												<center>{item.dummy2}</center>
											</h4>
										</div>

										<div className="contactdata">
											<p>
												<center>
													<b>Address: </b>{" "}
													{item.caddress} {item.ccity}
													{", "}
													{item.cstate} {item.czip}
													<br />
													<b>Phone: </b>{" "}
													{item.cphone1}{" "}
													{item.cphone2}
												</center>

												<div className="contactfooter">
													<button
														type="button"
														className="btn btn-primary"
														data-toggle="modal"
														data-target="#exampleModal"
														data-whatever="@mdo">
														Message us
													</button>
												</div>
												<img src="/companyphoto.png" />
											</p>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>

					<br />
					<br />
				</div>
			</div>
		);
	}
}

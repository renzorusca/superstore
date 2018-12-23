import React from "react";

import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<div
					className="modal fade"
					id="modalLoginForm"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="myModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header text-center">
								<h4 className="modal-title w-100 font-weight-bold">
									Sign in
								</h4>
								<button
									id="buttonclose"
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body mx-3">
								<div className="md-form mb-5">
									<i className="fa fa-envelope prefix grey-text" />
									<input
										type="email"
										id="defaultForm-email"
										className="form-control validate"
									/>
									<label
										data-error="wrong"
										data-success="right"
										htmlFor="defaultForm-email">
										Your email
									</label>
								</div>

								<div className="md-form mb-4">
									<i className="fa fa-lock prefix grey-text" />
									<input
										type="password"
										id="defaultForm-pass"
										className="form-control validate"
									/>
									<label
										data-error="wrong"
										data-success="right"
										htmlFor="defaultForm-pass">
										Your password
									</label>
								</div>
							</div>
							<div className="modal-footer d-flex justify-content-center">
								<button className="btn btn-default">
									Login
								</button>
							</div>
						</div>
					</div>
				</div>

				<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarTogglerDemo01">
						<span>
							<i className="fab fa-app-store fa-2x pr-3 text-dark" />
						</span>

						<a className="navbar-brand">super-E-store</a>

						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="navItem dropdown active">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Categories
								</a>
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink">
									<Link
										to="/products/0"
										className="dropdown-item">
										USB Dlash Drives
									</Link>
									<Link
										to="/products/1"
										className="dropdown-item">
										Memory Cards
									</Link>
									<Link
										to="/products/2"
										className="dropdown-item">
										Solid State Drives
									</Link>
									<Link
										to="/products/3"
										className="dropdown-item">
										DRAM Memory
									</Link>
								</div>
							</li>

							<li className="nav-item">
								<Link to="/aboutus/" className="nav-link">
									About us
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contactus/" className="nav-link">
									Contact us
								</Link>
							</li>
						</ul>

						<form
							className="form-inline my-2 my-lg-0"
							action="/searchproducts/"
							method="GET">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="product description/product code"
								aria-label="Search"
								name="wksearch"
								id="wksearch"
								pattern="^[_A-z0-9]{1,.}$"
								maxLength="15"
								required
							/>

							<button
								className="btn btn-outline-dark my-2 my-sm-0"
								type="submit">
								Search
							</button>
						</form>

						<Link to="/" className="cart text-dark pl-3">
							<abbr title="Home">
								<i className="fas fa-home" />
							</abbr>
						</Link>

						<Link
							to="/shoppingcart/"
							className="cart text-dark pl-3">
							<abbr title="Shopping Cart">
								<i className="fas fa-cart-plus" />
							</abbr>
						</Link>
						<div className="text-center">
							<a
								href=""
								className="login text-dark pl-3"
								data-toggle="modal"
								data-target="#modalLoginForm">
								<abbr title="Login">
									<i className="fas fa-user-circle" />
								</abbr>
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

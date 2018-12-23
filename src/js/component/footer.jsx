import React, { Component } from "react";
import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className="page-footer font-small bg-primary text-white fixed-bottom">
				<div className="footer-copyright text-center py-3">
					© 2018 Copyright: super-E-store.com
				</div>
			</footer>
		);
	}
}

import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/aboutus.css";

{
	/*
View Name: Aboutus
Function:	Creates a DIV block containing in DIV row ncluding 2 Divs Col 4 and 8 
			to acomodate a image and a tititle and description.
		  
Navigation:	This View includes one button at the bottom of the Card to return home.

*/
}

export class Aboutus extends React.Component {
	render() {
		return (
			<div className="container">
				<h3 className="PageTitle d-flex justify-content-center">
					About super-E-store
				</h3>

				<div className="row content-listing">
					<div className="col-4">
						<img src="http://www.pny.com/Image Library/Company/Company-OurStory.jpg" />
					</div>
					<div className="col-8">
						<h4 className="cond-blue">Our Story</h4>
						super-E-store is a global technology leader dedicated to
						consumer and business-grade electronics manufacturing.
						Established in 1985, super-E-store has 30 years of
						business experience serving consumers, B2Bs, and OEMs.
					</div>
				</div>

				<div className="row content-listing">
					<div className="col-4">
						<img src="http://www.pny.com/Image Library/Company/Company-Locations.jpg" />
					</div>
					<div className="col-8">
						<h4 className="cond-blue">Wordwide Locations</h4>
						super-E-storeoperates on a global level, with
						headquarters in Parsippany, NJ.
					</div>
				</div>

				<div className="row content-listing">
					<div className="col-4">
						<img src="http://www.pny.com/Image Library/Company/Company-Manufacturing.jpg" />
					</div>
					<div className="col-8">
						<h4 className="cond-blue">Manufacturing</h4>
						super-E-stores NJ based global manufacturing facility
						offers vertical integration of many operations for a
						more self-sustaining business and increased
						productivity.
					</div>
				</div>

				<div className="row content-listing">
					<div className="col-4">
						<img src="http://www.pny.com/Image Library/Company/Company-Solutions.jpg" />
					</div>
					<div className="col-8">
						<h4 className="cond-blue">Solutions</h4>
						super-E-store offers solutions for a wide variety of
						Consumer, Commercial and OEM customers worldwide.
					</div>
				</div>
			</div>
		);
	}
}

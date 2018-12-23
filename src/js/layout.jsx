import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Productdetail } from "./views/productdetail.jsx";
import { Products } from "./views/products.jsx";
import { Contactus } from "./views/contactus.jsx";
import { Aboutus } from "./views/aboutus.jsx";
import { ShoppingCart } from "./views/shoppingcart.jsx";
import { Searchproducts } from "./views/searchproducts.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							path="/productdetail/:theid1"
							component={Productdetail}
						/>
						<Route path="/products/:theid1" component={Products} />
						<Route path="/shoppingcart" component={ShoppingCart} />
						<Route path="/contactus" component={Contactus} />
						<Route path="/aboutus" component={Aboutus} />
						<Route
							path="/searchproducts/"
							component={Searchproducts}
						/>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);

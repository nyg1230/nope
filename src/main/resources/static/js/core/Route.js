import SigninFrame from "../components/signin/SigninFrame.js";
import SignupFrame from "../components/signup/SignupFrame.js";
import StockFrame from "../components/stock/StockFrame.js";

export default class Route {

	$target

	constructor($target) {
		this.$target	= $target;
		this.init();
		this.render();
	}

	init() {
		window.onpopstate	= (e) => {
			let state	 = e.state;
			this.render();
		}
	}

	render() {
		let search		= window.location.search;
		let pathName	= window.location.pathname;
		let urlParam	= new URLSearchParams(search);
		let route		= this.routes[(pathName)] ?? this.routes['/'];

		new route(this.$target, {
			qs		: urlParam
		})
	}

	routes	= {
		'/'				: SigninFrame,
		'/signup'		: SignupFrame,
		'/stock/calc'	: StockFrame
	}
}
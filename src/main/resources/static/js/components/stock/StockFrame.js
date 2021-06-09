import Component from "../../core/Component.js";
import StockMenu from "./StockMenu.js";

export default class StockFrame extends Component {
	template() {
		return `
		<stock-menu></stock-menu>
		<stock-view></stock-view>
		`
	}

	mounted() {
		let $stockMenu	= this.$target.querySelector('stock-menu');
		let $stockView	= this.$target.querySelector('stock-view');

		new StockMenu($stockMenu, {
			$stockView	: $stockView,
		});
	}
}
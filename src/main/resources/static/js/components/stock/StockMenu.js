import Component from "../../core/Component.js";
import ApiView from "./api/ApiView.js";
import OverSeasStockCalc from "./OverSeasStock/OverSeasStockCalc.js";

export default class StockMenu extends Component {
	template() {
		return `
		<button class="stock overseas calc">overseas stock calc</button>
		<button class="stock overseas api">api</button>
		`
	}

	setEvent() {
		const {$stockView}	= {...this.prop};
		
		this.addEvent('click', '.overseas.calc', () => {
			new OverSeasStockCalc($stockView, {})
		})

		this.addEvent('click', '.api', () => {
			new ApiView($stockView, {});
		})
	}
}
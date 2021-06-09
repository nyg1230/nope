import Component from "../../core/Component.js";
import OverSeasStockCalc from "./OverSeasStock/OverSeasStockCalc.js";

export default class StockMenu extends Component {
	template() {
		return `
		<button class="stock overseas calc">overseas stock calc</button>
		`
	}

	setEvent() {
		const {$stockView}	= {...this.prop};
		
		this.addEvent('click', '.overseas.calc', () => {
			new OverSeasStockCalc($stockView, {})
		})
	}
}
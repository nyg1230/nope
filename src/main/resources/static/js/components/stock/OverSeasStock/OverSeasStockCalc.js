import Component from "../../../core/Component.js";
import OverSeasStockCalcTable from "./OverSeasStockCalcTable.js";

export default class OverSeasStockCalc extends Component {
	template() {
		return `
			<div class='calc'></div>
			<div class='result'></div>
		`
	}

	mounted() {
		let $calc	= this.$target.querySelector('.calc');
		new OverSeasStockCalcTable($calc, {});
	}
}
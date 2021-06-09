import Component from "../../../core/Component.js";

export default class OverSeasStockCalcTable extends Component {
	template() {
		return `
			<table>
				<thead>
					<tr>
						<th>티커</th>
						<th>ea</th>
						<th>단가</th>
						<th>환율</th>
						<th>비고</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan='4'>
							<button class='btn add'>add</button>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan='4'>
							<button>sum</button>
						</td>
					</tr>
				</tfoot>
			</table>
		`
	}

	setEvent() {
		this.addEvent('click', '.btn.add', (e) => {
			this.addRow(e.target)
		});

		this.addEvent('click', '.btn.remove', (e) => {
			this.removeRow(e.target.closest('tr'));
		});


	}

	addRow($target) {
		let $tr	= document.createElement('tr');
		$tr.innerHTML	= `
			<td><input type='text'></td>
			<td><input type='text'></td>
			<td><input type='text'></td>
			<td><input type='text'></td>
			<td>
				<button class='btn remove'>-</button>
			</td>
		`;
		$target.closest('tbody').lastElementChild.after($tr);
	}

	removeRow($target) {
		$target.parentNode.removeChild($target);
	}

	calc() {

	}
}
import Component from "../../core/Component.js";

export default class SignupFrame extends Component {
	template() {
		return `
			<signup-frame>
				<table>
					<caption>test</caption>

					<tfoot>
						<tr>
							<td><button>back</button></td>
						<tr>
					</tfoot>
				</table>
			</signup-frame>
		`
	}
}
import Component from "../../core/Component.js";
import GoSignup from "./GoSignup.js";

export default class SigninFrame extends Component {

	template() {
		return `
			<singin-frame>
				<table>
					<caption>${window.languagePack.signin.msg}</caption>
					<thead></thead>
					<tbody>
						<tr>
							<td>${window.languagePack.signin.id}</td>
							<td>
								<input type='text'>
							</td>
						</tr>
						<tr>
							<td>${window.languagePack.signin.pw}</td>
							<td>
								<input type='password'>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan='3'>
								<do-login></do-login>
								<go-signup></go-signup>
								<span id='test'></span>
							</td>
						</tr>
					</tfoot>
				</table>
			</singin-frame>
		`
	}

	mounted() {
		let $doLogin	= this.$target.querySelector('do-login');

		let $goSignup	= this.$target.querySelector('go-signup');

		new GoSignup($goSignup, {
			$target	: this.$target,
		})
	}

	
}
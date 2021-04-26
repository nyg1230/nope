import { Ajax, CreateDom } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignup from './GoSignup.js'
import DoLogin from './DoLogin.js'
import SignupBox from '../signup/SignupBox.js'

export default class LoginBox extends Component {
	template()	{
		return `
		<table id='tblSignin'>
			<thead>
				<tr>
					<th colspan='3'>${window.nopeLanguagePack.signin.msg}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>${window.nopeLanguagePack.signin.id}</td>
					<td colspan='2'><input type='text' id='txtLoginID' class='txt id'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signin.pw}</td>
					<td colspan='2'><input type='password' id='txtLoginPw' class='txt pw'></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colsapn='3'>
						<go-signup></go-signup>
					</td>
				</tr>
			</tfoot>
		</table>`
	};

	setEvent() {
	}

	mounted() {
		this.addEvent('goSignup', 'go-signup', () => {
			this.goSignup();
		})
		
	}

	doLogin		= () => {
	}

	goSignup	= () => {
		this.parentNode.appendChild(document.createElement('signup-box'));
		this.remove();
	}
}

window.customElements.define('login-box', LoginBox)
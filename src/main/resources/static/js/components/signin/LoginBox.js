import { Ajax, CreateDom } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignup from './GoSignup.js'
import DoLogin from './DoLogin.js'

export default class LoginBox extends Component {
	static eventName	= {
		goSignup	: 'goSignup',
	}

	template() {
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
					<td colspan='3'>
						<do-login></do-login>
						<go-signup></go-signup>
					</td>
				</tr>
			</tfoot>
		</table>`
	}

	mounted() {
		const $doLogin	= this.$target.querySelector('do-login')
		this.addEvent(LoginBox.eventName.goSignup, 'go-signup', () => this.goSignup());
	}

	doLogin() {
		var $loginId	= this.$target.querySelector('#txtLoginID');
		var $loginPw	= this.$target.querySelector('#txtLoginPw');

		new Ajax().request({
			url		: '/login.do',
			type	: 'get',
			data	: {
				loginId	: $loginId.value.trim(),
				loginPw	: $loginPw.value.trim()
			},
			success	: (response) => {
				console.log(response)
			},
			error	: (status) => {
				console.log(status)
			}
		})
	}

	goSignup() {
		this.$target.host.outerHTML	= new CreateDom('signup-box').outerHTML;
	}
}

window.customElements.define('login-box', LoginBox)
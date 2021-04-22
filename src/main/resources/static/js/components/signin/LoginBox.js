import { Ajax, CreateDom } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignup from './GoSignup.js'
import DoLogin from './DoLogin.js'
import SignupBox from '../signup/SignupBox.js'

export default class LoginBox extends Component {
	template	= () => `
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
					<td class='td doLogin'></td>
					<td class='td goSignup'></td>
					<td class='td infoFind'></td>
				</tr>
			</tfoot>
		</table>`

	mounted	= () => {
		const $btnLogin		= this.querySelector('.doLogin')
		new DoLogin($btnLogin).render()

		const $btnSignup	= this.querySelector('.goSignup')
		new GoSignup($btnSignup, {
			goSignup	: this.goSignup.bind(this)
		}).render();

	}

	doLogin		= () => {
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

	goSignup	= () => {
		console.log('?!')
		new SignupBox(this.$target).render();
	}
}

window.customElements.define('login-box', LoginBox)
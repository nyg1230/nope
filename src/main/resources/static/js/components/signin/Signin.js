import { Ajax } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import Signup from '../signup/Signup.js';
import GoSignup from './GoSignup.js';
import DoSignin from './DoSignin.js';

export default class Signin extends Component {
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
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>`
	}

	setEvent() {
	}

	mounted() {
		let tfoot		= this.$target.querySelectorAll('#tblSignin tfoot tr td');
		let $trLogin	= tfoot[0];
		let $trSignup	= tfoot[1];
		let $trFind		= tfoot[2];

		new DoSignin(
			$trLogin,
			{
				'doLogin'	: this.doLogin.bind(this)
			}
		)
		
		new GoSignup(
			$trSignup,
			{
				'goSignup'	: this.goSignup.bind(this)
			}
		)
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
		new Signup(this.$target)
	}
}
import { CreateDom, Ajax } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignin from './GoSignin.js'
import DupCheck from './DupCheck.js'

export default class SignupBox extends Component {

	template() {
		return `
		<table>
			<thead>
				<tr>
					<th colspan='5'>${window.nopeLanguagePack.signup.signup}</th>
				</tr>
			</thead>
				<tr>
					<td>${window.nopeLanguagePack.signup}</td>
					<td colspan='2'></td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.id}</td>
					<td colspan='2'><input type='text' id='txtId' class='txt id'></td>
					<td colspan='2'><dup-check class='id'/></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.pw}</td>
					<td colspan='2'><input type='password' id='txtPw' class='txt pw'</td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.pwChk}</td>
					<td colspan='2'><input type='password' id='txtPwChk' class='txt pw'</td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.nickname}</td>
					<td colspan='2'><input type='text' id='txtNickname' class='txt nickname'</td>
					<td colspan='2'><dup-check class='nickname'/></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.sex}</td>
					<td colspan='2'>
						${window.nopeLanguagePack.signup.male}
						<input type='radio' name='sex' value='M'>
						${window.nopeLanguagePack.signup.female}
						<input type='radio' name='sex' value='F'>
					</td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.email}</td>
					<td colspan='2'>
						<input type='text' id='txtEmailAccount' class='txt email'> @ <input type='text' id='txtDomain'>
					</td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.certify}</td>
					<td colspan='2'></td>
					<td colspan='2'></td>
				</tr>
			<tbody>
			</tbody>
			<tfoot>
				<tr>
					<td colspan='5'>
						<do-signup></do-signup>
						<go-signin></go-signin>
					</td>
				</tr>
			</tfoot>
		</table>
	`}

	setEvent() {
		this.addEvent('keyup', 'input.id', (e) => {
			let a	= this.dupCheck('id', e.target.value, this.shadowRoot.querySelector('dup-check.id'));
			console.log(a);
		})

		this.addEvent('keyup', '.pw', (e) => {
			if(e.target.value > 3 && e.target.value < 11) {
				const isCompare = Array.from(this.shadowRoot.querySelectorAll('.pw')).map($el => $el.value).every(val => val == e.target.value);
				if(isCompare) {

				}
			} else {

			}
		})
	}

	mounted() {
		this.addEvent('goSignin', 'go-signin', () => {
			this.goSignin();
		})
	}

	dupCheck	= (type, str, $target) => {
		let bb = ''
		if(str.length < 4) return;

		let a	= new Promise((resolve, reject) => {
			new Ajax().request({
				url		: '/signup/dupChk/',
				type	: 'get',
				data	: [type, str],
				success	: (response)	=> {
					resolve(response);
					return 1
				},
				error	: (a,b,c) => {
					reject(a,b,c);
				}
			})
			return 2
		})

		a.then((response) => {
			console.log(response);
			console.log('asd')
			bb='asdfasdfsadf'
		}).catch((a,b,c) => {
			console.log(a)
			console.log(b)
			console.log(c)
		})

		return bb;
	}

	goSignin	= () => {
		this.parentNode.appendChild(document.createElement('login-box'));
		this.remove();
	}
}

window.customElements.define('signup-box', SignupBox)
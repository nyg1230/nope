import { CreateDom, Ajax } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignin from './GoSignin.js'
import DupCheck from './DupCheck.js'
import PwCheck from './PwCheck.js'
import EmailDomain from './EmailDomain.js'

export default class SignupBox extends Component {

	user	= {
		id			: '',
		idChk		: false,
		pw			: '',
		pwChk		: false,
		nickname	: '',
		nicknameChk	: false,
		sex			: null,
		email		: '',
		emailChk	: false
	}

	template() {
		return `
		<table>
			<thead>
				<tr>
					<th colspan='5'>${window.nopeLanguagePack.signup.signup}</th>
				</tr>
			</thead>
				<tr>
					<td>${window.nopeLanguagePack.signup.id}</td>
					<td colspan='2'><input type='text' id='txtId' class='txt id'></td>
					<td colspan='2'><dup-check type='id'/></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.pw}</td>
					<td colspan='2'><input type='password' id='txtPw' class='txt pw'</td>
					<td colspan='2'><pw-check class='nickname'/></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.pwChk}</td>
					<td colspan='2'><input type='password' id='txtPwChk' class='txt pw'</td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.nickname}</td>
					<td colspan='2'><input type='text' id='txtNickname' class='txt nickname'</td>
					<td colspan='2'><dup-check type='nickname'/></td>
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
						<input type='text' id='txtEmailAccount' class='txt email'> @ <input type='text' id='txtDomain' class='txt email' disabled>
					</td>
					<td colspan='2'><email-domain/></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.certify}</td>
					<td colspan='2'><input type='text' id='txtCertifyCode' class='txt certify'></td>
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
			this.dupCheck('id', e.target.value, this.shadowRoot.querySelector('dup-check[type=id]'));
		})

		this.addEvent('keyup', 'input.nickname', (e) => {
			this.dupCheck('nickname', e.target.value, this.shadowRoot.querySelector('dup-check[type=nickname]'));
		})

		this.addEvent('keyup', 'input.pw', (e) => {
			let pwChk	= PwCheck.msgType[2];
			this.user.pw	= '';
			this.user.pwChk	= false;
			if(e.target.value.length > 3 && e.target.value.length < 17) {
				const isCompare = Array.from(this.shadowRoot.querySelectorAll('.pw')).map($el => $el.value).every(val => val == e.target.value);
				if(isCompare) {
					this.user.pw	= e.target.value;
					this.user.pwChk	= true;
					pwChk	= PwCheck.msgType[0];
				} else pwChk	= PwCheck.msgType[1];
			}
			this.shadowRoot.querySelector('pw-check').setAttribute(PwCheck.observedAttributes[0], pwChk);
		})

		this.addEvent('click', '[name=sex]', (e) => {
			this.user.sex	= e.target.value;
		})

		this.addEvent('getDomain', 'email-domain', (e) => {
			this.getDomain(e.detail.domain)
		})

		this.addEvent('click', 'input[name=sex]', (e) => {
			this.user.sex	= e.target.value;
		})
	}

	mounted() {
		this.addEvent('goSignin', 'go-signin', () => {
			this.goSignin();
		})
	}

	dupCheck	= (type, str, $target) => {
		new Ajax().request({
			url		: '/signup/dupChk/',
			type	: 'get',
			data	: [type, str],
			success	: (response)	=> {
				// let num	= Number(response);
				let num = Math.random();
				
				if(isNaN(num)) {
					$target.setAttribute(DupCheck.observedAttributes[0], DupCheck.msgType[0])
				} else if(num > 0.5) {
					$target.setAttribute(DupCheck.observedAttributes[0], DupCheck.msgType[1])
				} else {
					$target.setAttribute(DupCheck.observedAttributes[0], DupCheck.msgType[2])
				}
				
			},
			error	: (a,b,c) => {
				reject(a,b,c);
			}
		})
	}

	getDomain(domain) {
		const $domain	= this.shadowRoot.querySelector('#txtDomain');
		if(domain == 'self') {
			$domain.value		= '';
			$domain.disabled	= false;
		} else {
			$domain.value		= domain;
			$domain.disabled	= true;
		}
	}

	goSignin	= () => {
		this.parentNode.appendChild(document.createElement('login-box'));
		this.remove();
	}

	sendCertifyCode	= () => {
		this.user.email	= Array.from(this.shadowRoot.querySelectorAll('input.email')).map($el => $el.value).join('@');

		let reg	= new RegExp('');

		if(reg.test(this.user.email)) {

		} else {
			
		}

	}

	checkCertifyCode	= (certifyCdoe) => {

	}
}

window.customElements.define('signup-box', SignupBox)
import Component from "../../core/Component.js";
import DomainSelect from "./DomainSelect.js";
import {Ajax} from '../../common/NopeUtil.js'

export default class SignupFrame extends Component {
	template() {
		return `
			<signup-frame>
				<table>
					<caption>${window.languagePack.signup.signup}</caption>
					<thead>
					</thead>
					<tbody>
						<tr>
							<td>${window.languagePack.signup.id}</td>
							<td colspan='2'>
								<input type='text' id='txtId' class='txt id' target='id'>
							</td>
							<td><dup-check type='id'><dup-check></td>
						</tr>
						<tr>
							<td>${window.languagePack.signup.pw}</td>
							<td colspan='2'>
								<input type='password' id='txtPw' class='txt pw'>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>${window.languagePack.signup.pwChk}</td>
							<td colspan='2'>
								<input type='password' id='txtPw' class='txt pw chk'>
							</td>
							<td><pw-check></pw-check></td>
						</tr>
						<tr>
							<td>${window.languagePack.signup.nickname}</td>
							<td colspan='2'>
								<input type='text' id='txtNickname' class='txt nickname' target='nickname'>
							</td>
							<td><dup-check type='nickname'><dup-check></td>
						</tr>
						<tr>
							<td>${window.languagePack.signup.sex}</td>
							<td colspan='2'>
								${window.languagePack.signup.male}
								<input type='radio' name='sex' value='M' class='rd maale'>
								${window.languagePack.signup.female}
								<input type='radio' name='sex' value='F' class='rd female'>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>${window.languagePack.signup.email}</td>
							<td colspan='2'>
								<input type='text' class='txt email account'> @ <input type='text' class='txt email domain'>
							</td>
							<td>
								<domain-select></domain-select>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td><button onclick='javascript:history.back()'>back</button></td>
						<tr>
					</tfoot>
				</table>
			</signup-frame>
		`
	}

	setEvent() {
		this.addEvent('keyup', '.txt.id,.txt.nickname', (e) => {
			let $el		= e.target;
			let type	= $el.getAttribute('target');
			
			let txt		= $el.value.trim();
			let $txtTarget	= this.$target.querySelector(`dup-check[type='${type}']`);

			if(txt.length < window.languagePack.signup[`${type}MinLen`] || txt.length > window.languagePack.signup[`${type}MaxLen`]) {
				$txtTarget.innerHTML	= window.languagePack.signup[`${type}Unvalid`]
			} else {
				this.dupCheck(type, txt)
				.then((resTxt) => {
					if($txtTarget) {
						if(resTxt == 'true') {
							$txtTarget.innerHTML	= window.languagePack.signup[`${type}Available`]
						} else {
							$txtTarget.innerHTML	= window.languagePack.signup[`${type}Unavailable`]
						}
					}
				})
			}
		})

		this.addEvent('keyup', '.txt.pw', (e) => {
			let val	= e.target.value;

			let $txtTarget	= this.$target.querySelector('pw-check');

			if(val.length < 4 || val.length > 16) {
				$txtTarget.innerHTML	= window.languagePack.signup.unvalidPw
			} else {
				if($txtTarget) {
					let $els	= this.$target.querySelectorAll('.txt.pw');
					for(let $el of $els.values()) {
						if(e.target === $el) continue;
						else {
							if(val === $el.value) {
								$txtTarget.innerHTML	= window.languagePack.signup.isMatchPw
							} else {
								$txtTarget.innerHTML	= window.languagePack.signup.isNotMatchPw
							}
						}
					}
				}
			}
			
		})
	}

	mounted() {
		let $domainSelect	= this.$target.querySelector('domain-select');
		new DomainSelect($domainSelect, {})
	}

	dupCheck(txt, type) {
		return new Promise((res, rej) => {
			new Ajax().request({
				url		: '/api/public/signup/dup-check',
				type	: 'get',
				data	: {
					chkType	: type,
					chkTxt	: txt
				},
				success	: (resTxt) => {
					res(resTxt);
				},
				error	: (status, a, b) => {
					rej(status, a, b);
				}
			})
		})
	}
}
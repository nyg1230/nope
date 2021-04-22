import { CreateDom, Ajax } from '../../common/NopeUtil.js';
import Component from '../../core/Component.js';
import GoSignin from './GoSignin.js'

export default class SignupBox extends Component {

	static eventName	= {
		doSignup	: 'doSignup',
		goSignup	: 'goSignup',
		dupCheck	: 'dupCheck',
	}

	template	= () => `
		<table>
			<thead>
				<tr>
					<th colspan='5'>${window.nopeLanguagePack.signup.signup}</th>
				</tr>
			</thead>
				<tr>
					<td></td>
					<td colspan='2'></td>
					<td colspan='2'></td>
				</tr>
				<tr>
					<td>${window.nopeLanguagePack.signup.id}</td>
					<td colspan='2'><input type='text' id='txtId'></td>
					<td colspan='2'><dup-check></dup-check></td>
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
	`

	setEvent	= () => {
		this.addEvent(SignupBox.eventName.goSignup, 'go-signin', () => this.goSignup())
		this.addEvent(SignupBox.eventName.doSignup, 'do-signup', () => this.doSignup())

	}

	doSignup	= () => {

	}

	goSignup	= () => {
		this.$target.host.outerHTML	= new CreateDom('login-box').outerHTML;
	}

	dupCheck	= (e, props) => {
		const {$target}	= props
		console.log(e.type)
		console.log($target)
	}
}

window.customElements.define('signup-box', SignupBox)
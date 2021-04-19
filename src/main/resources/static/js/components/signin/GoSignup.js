import Component from '../../core/Component.js';
import LoginBox from './LoginBox.js'

export default class GoSignup extends Component {
	template	= () => `<button id='btnGoSignup'>${window.nopeLanguagePack.signin.signup}</button>`

	setEvent() {
		this.addEvent('click', '#btnGoSignup', () => {
			this.dispatchEvent(new CustomEvent(LoginBox.eventName.goSignup, {bubbles : true}))
		})
	}
}

window.customElements.define('go-signup', GoSignup);
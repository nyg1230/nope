import Component from "../../core/Component.js";
import SignupBox from './SignupBox.js'

export default class GoSignin extends Component {
	template	= () => `<button id='btnGoSignin'>${window.nopeLanguagePack.signup.goback}</button>`

	setEvent	= () => {
		this.addEvent('click', 'button', () => {
			this.dispatchEvent(new CustomEvent(SignupBox.eventName.goSignup, {bubbles : true}))
		})
	}
}

window.customElements.define('go-signin', GoSignin);
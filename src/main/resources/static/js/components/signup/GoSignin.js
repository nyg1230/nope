import Component from "../../core/Component.js";
import SignupBox from './SignupBox.js'

export default class GoSignin extends Component {
	template() {return `<button id='btnGoSignin'>${window.nopeLanguagePack.signup.goback}</button>`}

	setEvent() {
		this.addEvent('click', 'button', () => {
			this.dispatchEvent(this.getEvent('goSignin'));
		})
	}
}

window.customElements.define('go-signin', GoSignin);
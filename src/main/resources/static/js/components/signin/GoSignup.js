import Component from "../../core/Component.js";
import SignupFrame from "../signup/SignupFrame.js";

export default class GoSignup extends Component {
	template() {
		return `
			<button>${window.languagePack.signin.signup}</button>
		`
	}

	setEvent() {
		let {$target}	= {...this.prop}

		this.addEvent('click', 'button', () => {
			history.pushState({}, null, '/signup');
			new SignupFrame($target, {})
		})
		
	}
}
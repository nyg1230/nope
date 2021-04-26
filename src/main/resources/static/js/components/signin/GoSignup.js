import Component from '../../core/Component.js';

export default class GoSignup extends Component {
	template() {
		return `<button class=''>${window.nopeLanguagePack.signin.signup}</button>`;
	}

	mounted() {
		this.addEvent('click', 'button', () => {
			this.dispatchEvent(this.getEvent('goSignup'))
		})
	}
}

window.customElements.define('go-signup', GoSignup);
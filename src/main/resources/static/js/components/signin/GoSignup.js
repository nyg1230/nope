import Component from '../../core/Component.js';

export default class DoSignup extends Component {
	template() {
		return `<button id='btnGoSignup' class='btn'>${window.nopeLanguagePack.signin.signup}</button>`;
	}

	setEvent() {
		let { goSignup }	= this.$props;

		this.addEvent('click', '#btnGoSignup', () => {
			goSignup();
		})
	}
}
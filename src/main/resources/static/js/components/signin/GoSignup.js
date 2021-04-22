import Component from '../../core/Component.js';

export default class GoSignup extends Component {
	template	= () => `<button class=''>${window.nopeLanguagePack.signin.signup}</button>`
	
	setEvent	= () => {
		console.log(123)
		const { goSignup }	= [this.$props]
		this.addEvent('click', 'button', () => {
			goSignup();
		})
	}
}

window.customElements.define('go-signup', GoSignup);
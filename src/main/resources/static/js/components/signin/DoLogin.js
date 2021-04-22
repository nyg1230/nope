import Component from '../../core/Component.js';

export default class DoLogin extends Component {
	template	= () => `<button class=''>${window.nopeLanguagePack.signin.login}</button>`

	setEvent	= () => {
		this.addEvent('click', 'button', e => {
			this.dispatchEvent(new CustomEvent(LoginBox.eventName.doLogin, {bubbles : true}))
		})
	}
}

window.customElements.define('do-login', DoLogin);
import Component from '../../core/Component.js';

export default class DoLogin extends Component {
	template	= () => `<button id='btnLogin'>${window.nopeLanguagePack.signin.login}</button>`

	setEvent	= () => {
		this.addEvent('click', '#btnLogin', e => {
			// this.dispatchEvent(new CustomEvent('test', {bubbles:true}))
		})
	}
}

window.customElements.define('do-login', DoLogin);
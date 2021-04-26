import Component from '../../core/Component.js';

export default class DoLogin extends Component {
	template	= () => `<button class=''>${window.nopeLanguagePack.signin.login}</button>`

	setEvent() {
		this.addEvent('click', 'button', e => {
		})
	}
}

window.customElements.define('do-login', DoLogin);
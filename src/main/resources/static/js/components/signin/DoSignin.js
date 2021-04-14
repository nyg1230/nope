import Component from '../../core/Component.js';

export default class DoSignin extends Component {
	template() {
		return `<button id='btnLoginDo' class='btn'>${window.nopeLanguagePack.signin.login}</button>`;
	}

	setEvent() {
		const { doLogin }	= this.$props;
		
		this.addEvent('click', '#btnLoginDo', (event) => {
			doLogin();
		})
	}
}
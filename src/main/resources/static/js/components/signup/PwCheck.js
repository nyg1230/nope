import Component from "../../core/Component.js";

export default class PwCheck extends Component {

	static get observedAttributes() {return ['is-compare']; }
	static get msgType() {return ['match', 'unmatch', 'unvalid']}

	template() {
		return `<label>${window.nopeLanguagePack.signup.insertPw}<label>`
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		if(attrName == PwCheck.observedAttributes[0] && oldVal != newVal) {
			
			const pwMsg		= (newVal === PwCheck.msgType[0]) ? window.nopeLanguagePack.signup.isMatchPw : (newVal === PwCheck.msgType[1]) ? window.nopeLanguagePack.signup.isNotMatchPw : window.nopeLanguagePack.signup.unvalidPw;
			this.template	= () => `<label>${pwMsg}</label>`;
			this.render();
		}
	}

}

window.customElements.define('pw-check', PwCheck)
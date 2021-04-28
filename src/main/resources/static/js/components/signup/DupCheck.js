import Component from "../../core/Component.js";

export default class DupCheck extends Component {

	static get observedAttributes() {return ['is-dup']; }
	static get msgType() {return ['match', 'unmatch', 'unvalid']}

	template() {
		return `<label>${window.nopeLanguagePack.signup[`${this.getAttribute('type')}Insert`]}<label>`
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		console.log('?!')
		if(attrName == DupCheck.observedAttributes[0] && oldVal != newVal) {
			const type		= this.getAttribute('type');
			const msgIndex	= DupCheck.msgType[DupCheck.msgType.findIndex(val => val == newVal)];

			this.template	= () => `<label>
				${(DupCheck.msgType[0] == msgIndex) ?
					window.nopeLanguagePack.signup[`${type}Available`] : 
						(DupCheck.msgType[1] == msgIndex) ? window.nopeLanguagePack.signup[`${type}Unavailable`] :
						window.nopeLanguagePack.signup[`${type}Unvalid`]
				}
			</label>`

		}
	}

}

window.customElements.define('dup-check', DupCheck)
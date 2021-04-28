import Component from "../../core/Component.js";

export default class EmailDomain extends Component {
	template() {
		return `
			<select>
				// ${window.nopeLanguagePack.signup.domains.map(val => `<option value='${val.domain}'>${val.name}</option>`).join('')}
			</select>
		`
	}

	setEvent() {
		this.addEvent('change', 'select', (e) => {
			this.dispatchEvent(this.getEvent('getDomain', null, {detail : {domain : e.target.value}}))
		})
	}
}

window.customElements.define('email-domain', EmailDomain);
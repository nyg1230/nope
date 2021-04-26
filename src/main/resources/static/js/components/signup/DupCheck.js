import Component from "../../core/Component.js";

export default class DupCheck extends Component {

	static get observedAttributes() {return ['is-dup']; }

	template() {
		return `<label>test<label>`
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		console.log(newVal == 'true')
	}

}

window.customElements.define('dup-check', DupCheck)
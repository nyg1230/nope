import Component from "../../core/Component.js";
import SignupBox from "./SignupBox.js";

export default class DupCheck extends Component {
	template	= () => `<label>test<label>`

	setEvent	= () => {
		
	}
}

window.customElements.define('dup-check', DupCheck)
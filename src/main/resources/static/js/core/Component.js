export default class Component extends HTMLElement {
	
	$state;

	constructor() {
		super();
		this.setup();
		this.attachShadow({mode : 'open'});
		this.setEvent();
		this.render();
	}

	setup() {}
	mounted() {}
	template() {return '';}
	render() {
		this.shadowRoot.innerHTML	= this.template();
		this.mounted();
	}

	connectedCallback() {}
	disconnectedCallback() {}

	setEvent() {}

	addState(newState) {
		this.$state	= { ...this.$state, ...newState };
		this.render();
	}
	setState(newState) {
		this.$state	= newState;
		this.render();
	}

	addEvent(eventType, selector, callback) {
		const children	= [ ...this.shadowRoot.querySelectorAll(selector) ];

		const _isTarget	= ($target) => children.includes($target) || $target.closest(selector);

		this.shadowRoot.addEventListener(eventType, event => {
			if(!_isTarget(event.target)) return false;
			callback(event);
		})
	}

	getEvent(eventType, isBubbles, props) {
		const event	= new CustomEvent(eventType, {bubbles : !!(isBubbles ?? true), ...props})
		return event;
	}
}
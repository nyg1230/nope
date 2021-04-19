export default class Component extends HTMLElement {
	$target;
	$state;

	constructor() {
		super();
		this.setup();
	}

	setup() {}
	mounted() {}
	template() { return ''; }
	render() {
		this.$target.innerHTML	= this.template();
		this.mounted();
	}

	connectedCallback() {
		this.$target	= this.attachShadow({'mode' : 'open'})
		this.setEvent();
		this.render();
	}

	setEvent() {};

	addState(newState) {
		this.$state	= { ...this.$state, ...newState };
		this.render();
	}
	setState(newState) {
		this.$state	= newState;
		this.render();
	}

	addEvent(eventType, selector, callback) {
		const children	= [ ...this.$target.querySelectorAll(selector) ];

		const _isTarget	= ($target) => children.includes($target) || $target.closest(selector);

		this.$target.addEventListener(eventType, event => {
			if(!_isTarget(event.target)) return false;
			callback(event);
		})
	}
}
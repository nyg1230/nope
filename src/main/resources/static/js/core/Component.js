export default class Component extends HTMLElement {
	
	$target;
	$state;
	$root;

	constructor($target, $props) {
		super();
		this.$target	= $target.attachShadow({mode:'open'});
		this.$props		= $props;
		this.setup();
		this.setEvent();
	}

	setup		= () => {}
	mounted		= () => {}
	template	= () => ``
	render		= (isOpen) => {
		this.$target.appendChild(this);
		this.innerHTML	= this.template();
		// this.$root				= this.attachShadow({mode: (isOpen == null || isOpen == true) ? 'open' : 'closed'})
		// this.$root.innerHTML	= this.template();
		this.mounted();
	}

	connectedCallback		= () => {}
	disconnectedCallback	= () => {}

	setEvent	= () => {}

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
export default class Component {
	
	$target
	state;
	prop;

	constructor($target, prop) {
		this.$target	= $target;
		this.prop		= prop;

		this.setup();
		this.setEvent();
		this.render();
	}

	setup() {}
	mounted() {}
	template() {return '';}
	render() {
		this.$target.innerHTML	= this.template();
		this.mounted();
	}
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
		const children	= [ ...this.$target.querySelectorAll(selector) ];

		const _isTarget	= ($target) => children.includes($target) || $target.closest(selector);

		this.$target.addEventListener(eventType, event => {
			if(!_isTarget(event.target)) return false;
			callback(event);
		})
	}

	getEvent(eventType, isBubbles, props) {
		const event	= new CustomEvent(eventType, Object.assign({bubbles : !!(isBubbles ?? true)}, props))
		return event;
	}
}
export default class NopeFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML  = `
            푸터
        `
    }

    connectedCallback() {
        
    }
}
customElements.define('nope-footer', NopeFooter);
class DemoElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "Hello from lit-html DemoElement";
    }
}

customElements.define("lit-html-demo-element", DemoElement);
class DemoElement extends LitElement {
    constructor() {
        super();
        this.innerHTML = "Hello from LitElement DemoElement";
    }
}

customElements.define("lit-element-demo-element", DemoElement);
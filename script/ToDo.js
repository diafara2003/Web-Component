const _template_ToDo = document.createElement('template');

_template_ToDo.innerHTML = `
    <style>

    .to-do{
        width:50%;
        border-bottom:1px solid #ebebeb;
        padding:5px;
        cursor:pointer;
        
    }

    .to-do:hover{
        background-color:#999;
    }

    </style>

    <div class="to-do">
    <input name="check" type="checkbox" />
    <label for="check">Hi!!</label>
    </div>
`;

class ToDo extends HTMLElement {
    constructor() {
        super();

        this._sr = this.attachShadow({ mode: 'open' });

        this._sr.appendChild(_template_ToDo.content.cloneNode(true));

        this.$label = this._sr.querySelector('label');
    }

    static get observedAttributes() {
        return ['value'];
    }

    get value() {
        return this.getAttribute('value');
    }
    set value(value) {
        this.setAttribute('value', value);
    }

    render() {
        this.$label.textContent = this.value;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

}

window.customElements.define('to-do', ToDo);
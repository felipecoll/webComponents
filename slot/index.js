class myElement extends HTMLElement{
 constructor() {
    super()
    this.attachShadow({mode: 'open'})
 }

 getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = `
        <section>
            <h2>
            <slot name='titulo'></slot>
            </h2>
            <div>
            <p>
            <slot name='parrafo'></slot>
            </p>
            </div>
        </section>
        ${this.getStyle()}`
        
        return template
 }
 getStyle() {
    return `<style>
            h2 {
                color: green}
            </style>`
 }
 render () {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
 }
 connectedCallback() {
    this.render()
 }
}

customElements.define('my-element', myElement)
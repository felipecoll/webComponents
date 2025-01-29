const template = document.createElement('div')
template.innerHTML = ` <style> p {color:blue}</style>
<p>Hola mundoo!</p>
<p>Ejemplo de agregar con template</p>`


class myElement extends HTMLElement{
 constructor() {
    super()
    
    this.p = document.createElement('p')
 }
 connectedCallback() {
    this.p.textContent = 'Hello World'
    this.appendChild(this.p)
    this.appendChild(template)
 }
}

customElements.define('my-element', myElement)
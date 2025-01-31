class myCustomElement extends HTMLElement() {
   constructor() {
      super()
      console.log('Hola desde el constructor memoria')
   }
   connectedCallback() {
      console.log('Hola desde el connectedCallback')
   }
   disconnectedCallback() {
      console.log('Hola desde el disconnectedCallback')
   }
}

customElements.define('my-custom-element', myCustomElement)

document.querySelector('my-custom-element').remove()
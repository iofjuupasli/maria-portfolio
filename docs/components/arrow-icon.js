class ArrowIcon extends HTMLElement {
  constructor() {
    super();
    if (window.ShadowRoot) {
      this.attachShadow({ mode: "open" });
    } else {
      this.innerHTML = '<div class="arrow-icon-root"></div>';
    }
  }

  connectedCallback() {
    const size = this.getAttribute("size") || "43";
    const color = this.getAttribute("color") || "#171E25";
    const strokeWidth = this.getAttribute("stroke-width") || "2.04484";

    this.shadowRoot.innerHTML = `
      <style>
        :host, .arrow-icon-root {
          display: inline-block;
          width: ${size}px;
          height: ${size}px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
      
      <svg 
        viewBox="0 0 43 43" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21.5"
          cy="21.5"
          r="18.8125"
          stroke="${color}"
          stroke-width="${strokeWidth}"
        ></circle>
        <path
          d="M20.7241 12.5024H30.4976M30.4976 12.5024V22.2759M30.4976 12.5024L10.8672 32.1328"
          stroke="${color}"
          stroke-width="${strokeWidth}"
        ></path>
      </svg>
    `;
  }
}

customElements.define("arrow-icon", ArrowIcon);

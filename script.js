import AttributionFooter from "./attribution-footer-element.js";
import "./valid-form.js";

customElements.define("attribution-footer", AttributionFooter);

"use strict";

const singUpInput = document.querySelector(".sing-up__input");
const singUpBtn = document.querySelector(".sing-up__btn");
const singUpError = document.querySelector(".sing-up__error");

singUpInput.addEventListener("input", () => {
    if (singUpInput.validity.valid && singUpInput.value.length > 0) {
        singUpError.innerText = "";
    }
});

singUpBtn.addEventListener("click", (e) => {
    if (!singUpInput.validity.valid || singUpInput.value.length === 0) {
        singUpError.innerText = "Please enter a valid email address";
        e.preventDefault();
    } else {
        singUpInput.innerText = "";
    }
});

"use strict";

export default class AttributionFooter extends HTMLElement {

    static get observedAttributes() {
        return ["link-profile", "link-portfolio", "color-label", "color-link"];
    }

    constructor() {
        super();
        this.urlProfile = "https://www.frontendmentor.io/profile/rafaeldgeo"; 
        this.urlPortfolio = "https://www.linkedin.com/in/rafael-dias-de-almeida-devmap/";
        this.colorLabel = "#000000";
        this.colorLink = "#0000FF";
    }
 
    attributeChangedCallback(attributeName, oldValue, newValue){
        if (attributeName === "link-profile") {
            this.urlProfile = newValue;
        } else if (attributeName === "link-portfolio") {
            this.urlPortfolio = newValue;
        } else if (attributeName === "color-label") {
            this.colorLabel = newValue;
        } else if (attributeName === "color-link") {
            this.colorLink = newValue;
        }
    } 

    connectedCallback(){

        const shadowRoot = this.attachShadow({mode:"open"});

        shadowRoot.innerHTML = ` Challenge by <a class="attributation__link attributation__link--profile" target="_blank" 
                                 href="${this.urlProfile}">Frontend Mentor</a>. Code by <a class="attributation__link attributation__link--portfolio" target="_blank" href="${this.urlPortfolio}">Rafael Dias de Almeida</a>.
        `;

        const style = document.createElement("style");
        style.textContent = `

        :host {
            text-align: center; 
            font-size: 11px; 
            color: ${this.colorLabel};
        }
     
        .attributation__link { color: ${this.colorLink}; }
        `;

        shadowRoot.appendChild(style);
    }

   set urlProfile(newValue) {
        this._urlProfile = newValue;
        if (!this.shadowRoot) {
            return;
        }

        const aProfile = this.shadowRoot.querySelector(".attributation__link--profile");
        if (aProfile) {
            aProfile.innerText = this._urlProfile;
        }
    }

    get urlProfile() { return this._urlProfile; } 

    set urlPortfolio(newValue) {
        this._urlPortfolio = newValue;
        if (!this.shadowRoot) {
            return;
        }

        const aPortfolio = this.shadowRoot.querySelector(".attributation__link--portfolio");
        if (aPortfolio) {
            aPortfolio.innerText = this._urlPortfolio;
        }
    }

    get urlPortfolio() { return this._urlPortfolio }

    set colorLabel(newValue) {
        this._colorLabel = newValue;
        if (!this.shadowRoot) {
            return;
        }

        const spanElement = this.shadowRoot.querySelectorAll(".attributation__wrapper");
        if (spanElement) {
            spanElement.innerText = this._colorLabel;
        }
    }

    get colorLabel() { return this._colorLabel }

    set colorLink(newValue) {
        this._colorLink = newValue;
        if (!this.shadowRoot) {
            return;
        }

        const aElement = this.shadowRoot.querySelectorAll(".attributation__link");
        if (aElement) {
            aElement.innerText = this._colorLink;
        }
    }

    get colorLink() { return this._colorLink }
}

// include in index.js
/* customElements.define("attribution-footer", AttributionFooter); */
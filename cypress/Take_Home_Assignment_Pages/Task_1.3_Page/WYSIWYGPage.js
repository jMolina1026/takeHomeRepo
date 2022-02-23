/// <reference types = "cypress" />

import { GlobalBasePage } from "../GlobalBasePage/GlobalBasePage";

//npm install cypress-real-events

export class WYSIWYGPage extends GlobalBasePage{

    constructor(){
        super();
        this.globalBasePage = new GlobalBasePage();

        // CSS Locators
        this.iframeNew        = 'iframe#mce_0_ifr';  
        this.newText          = 'iframe editor has been accessed';
        this.formatButton     = 'button.tox-mbtn > span';
        this.formatMenuColor  = 'div.tox-collection__item-label';    
        this.formatNewColor   = 'div[title = "Red"]';
        this.newTextColor     = 'span[style="color: rgb(224, 62, 45);"]';

    }

    // Actions to take 

    goToUrlWYSIWYG(){
        this.globalBasePage.goToUrlWYSIWYG();
    }

    rewriteText(){
        cy.iframeSwitch(this.iframeNew).clear().type(this.newText);
    }

    changeTextColor(){
        cy.iframeSwitch(this.iframeNew).realPress(["Shift","ArrowUp"]);
        cy.get(this.formatButton).contains('Format').should('be.visible').click(); //button:nth-child(4)
        cy.get(this.formatMenuColor).contains('Text color').should('be.visible').trigger('mouseover');
        cy.get(this.formatNewColor).should('be.visible').click()
        cy.iframeSwitch(this.iframeNew).click();
        cy.iframeSwitch(this.iframeNew).find(this.newTextColor).should('have.css','color', 'rgb(224, 62, 45)');
    }
    

    
    
    

        


}
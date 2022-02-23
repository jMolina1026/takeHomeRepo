/// <reference types = "cypress" />

import { GlobalBasePage } from "../GlobalBasePage/GlobalBasePage";

export class DynamicControlsPage extends GlobalBasePage{

    constructor(){
        super();
        this.globalBasePage = new GlobalBasePage();

        // CSS Locators
        this.checkTheBox         = 'input[type = "checkbox"]';  // Note (input#checkbox) = DOM changes when checkbox is added or removed, therefore Id not best locator in this case.
        this.addRemoveButton     = 'button[onclick = "swapCheckbox()"]';
        this.message             = 'p#message';

        this.enableDisableButton = 'button[onclick = "swapInput()"]';
        this.inputSearchField    = 'input[type = "text"]';

    }

    // Actions to take 

    goToUrlDynamic(){
        this.globalBasePage.gotToUrlDynamic();
    }

    checkABox(){
        cy.get(this.checkTheBox).should('be.visible').check().and('be.checked'); 

    }

    removeOrAddCheckBox(){
        cy.get(this.addRemoveButton).should('be.visible').click();
        cy.get(this.checkTheBox).should('not.exist');
        cy.get(this.message).should('exist').then((x) => {
            const txt = x.text();
            cy.get(this.message).should('have.text',txt);
        })
    }  

    clickTheEnableDisableButton(){
        cy.get(this.enableDisableButton).should('be.visible').click();
        cy.get(this.message).should('exist').then((x) => {
            const txt = x.text();
            cy.get(this.message).should('have.text',txt);
        })
    }

    enabledSearchField(){
        cy.get(this.inputSearchField).should('exist').and('be.enabled');
    }

    inputText(){

        cy.get(this.message).then((x) => {
            const txt = x.text();
            cy.get(this.inputSearchField).type(txt);
        });
    }

    disabledSearchField(){
        cy.get(this.inputSearchField).should('exist').and('be.disabled');
    }
    
    

        


}
/// <reference types = "cypress" />

import { GlobalBasePage } from "../GlobalBasePage/GlobalBasePage";


export class AddDeletePage extends GlobalBasePage{

    constructor(){
        super();
        this.globalBasePage = new GlobalBasePage();
        // Before Hook Strings

        // CSS Locators
        this.addButton = 'div.example > button';    //Alternative Locator -> button[onclick = "addElement()"]
        this.deleteButton = 'button.added-manually';


    }

    // Actions to take 

    goToUrlAddDelete(){
        this.globalBasePage.goToUrlAddDelete();
    }

    clickAddButton(){
        let i;
        for (i = 0; i < 5; i++){
            cy.get(this.addButton).should('be.visible').click();
        }
         

    }

    clickDeleteButton(){
        cy.get(this.deleteButton).should('be.visible').click({ multiple: true }).and('not.exist');

    }


}
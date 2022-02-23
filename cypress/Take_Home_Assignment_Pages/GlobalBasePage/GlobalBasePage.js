/// <reference types = "cypress" />

import 'cypress-iframe';


export class GlobalBasePage{

    constructor(){

        // Website Titles
        this.webTitle1        = 'The Internet';

        // Add Delete URL
        this.webUrlAddDelete  = 'http://the-internet.herokuapp.com/add_remove_elements/';

        // Dynamic Controls URL
        this.webUrlDynamic    = 'http://the-internet.herokuapp.com/dynamic_controls';

        // WYSISWYG URL
        this.webUrlWYSIWYG    = 'https://the-internet.herokuapp.com/tinymce';

        // Fox LA Live URL
        this.webUrlFoxLALive      = 'https://www.foxla.com/live';

        // Fox LA URL
        this.webUrlFoxLA      = 'https://www.foxla.com/';
        
    
    }

    // Actions to take 
    goToUrlAddDelete(){
        cy.visit(this.webUrlAddDelete).url().should('include','the-internet.herokuapp');
        cy.title().should('eq',this.webTitle1);

    }

    gotToUrlDynamic(){
        cy.visit(this.webUrlDynamic).url().should('include','the-internet.herokuapp');
        cy.title().should('eq',this.webTitle1);
    }

    goToUrlWYSIWYG(){
        cy.visit(this.webUrlWYSIWYG).url().should('include','the-internet.herokuapp');
        cy.title().should('eq',this.webTitle1);
        
    }

    goToUrlFoxLALive(){
        cy.visit(this.webUrlFoxLALive).url().should('include', 'live');
        cy.title().should('eq','Live News Stream: Watch FOX 11 Los Angeles');
    }

    goToUrlFoxLA(){
        cy.visit(this.webUrlFoxLA).url().should('include','');
        cy.title().should('eq', 'FOX 11 Los Angeles');
    }

    goToAPI(){
        return 'https://swapi.dev/api/people/1/?format=json'
    }




}
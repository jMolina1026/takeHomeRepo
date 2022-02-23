/// <reference types = "cypress" />
const {AddDeletePage}  = require("../../../Take_Home_Assignment_Pages/Task_1.1_Page/AddDeletePage");
let addDeletePage  = new AddDeletePage();



describe('How to add & delete buttons', () => {

    /**
     *  Before Hook will launch all required actions before any testcase is launched.
     *  In this case, I have added the site URL required for the first task.
     *  This also allows for the site to be launched every time without the need to call the 'cy.visit' action again.
     *  Task 1.1: Add & Delete
     */


    before(() => {
        addDeletePage.goToUrlAddDelete();   
    })

     
    /**
     *  TestCase1: Objective is to Validate that the Add button will add more Delete buttons.
     *  Then, the delete buttons will be used to removed the added buttons.  
     */
    it('will add and then delete buttons multiple times', () => {

        
        addDeletePage.clickAddButton();
        addDeletePage.clickDeleteButton();
    })


})

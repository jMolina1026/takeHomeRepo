/// <reference types = "cypress" />
const {DynamicControlsPage} = require("../../../Take_Home_Assignment_Pages/Task_1.2_Page/DynamicControlsPage")
let dynamicControlsPage = new DynamicControlsPage();

    
describe('How to check a box and remove it', () => {
    /**
     *  Before Hook will launch all required actions before any testcase is launched.
     *  In this case, I have added the site URL required for the first task.
     *  This also allows for the site to be launched every time without the need to call the 'cy.visit' action again.
     *  Task 1.2: Dynamic Controls
     */

     before(() => {
        dynamicControlsPage.goToUrlDynamic();
    })

    it('will check the box, removed the box and then add it back', () => {

        dynamicControlsPage.checkABox();
        dynamicControlsPage.removeOrAddCheckBox();
        dynamicControlsPage.removeOrAddCheckBox();
        dynamicControlsPage.checkABox();

    })

    it('will enable the input field and and type text', () =>{

        dynamicControlsPage.clickTheEnableDisableButton();
        dynamicControlsPage.enabledSearchField();
        dynamicControlsPage.inputText();
        dynamicControlsPage.clickTheEnableDisableButton();
        dynamicControlsPage.disabledSearchField();


    })


})



const {WYSIWYGPage}    = require("../../../Take_Home_Assignment_Pages/Task_1.3_Page/WYSIWYGPage");
let wYSISWYG           = new WYSIWYGPage();

describe('How to access an iframe and its elements', () => {

    before(() => {
        wYSISWYG.goToUrlWYSIWYG();
    })


    it('will clear the Text and then enter new text', () => {
        wYSISWYG.rewriteText();
    })

    it('will change the color of the text', () => {
        wYSISWYG.changeTextColor();
    })




})
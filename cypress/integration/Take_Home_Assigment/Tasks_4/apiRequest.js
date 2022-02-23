const {GlobalBasePage} = require("../../../Take_Home_Assignment_Pages/GlobalBasePage/GlobalBasePage");
let globalBasePage = new GlobalBasePage();


describe('and verify that the films property is an array of strings', () => {

    it('will GET request an array of strings', () => {

        cy.request('GET', globalBasePage.goToAPI()).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body.films).to.be.an('array');

            const arrayOfFilms = response.body.films;
            const countOfFilms = arrayOfFilms.length;

            for (let i = 0; i < countOfFilms; i++){
                expect(arrayOfFilms[i]).to.be.a('string');
            }
        });

    })

})
import { GlobalBasePage } from "../GlobalBasePage/GlobalBasePage";

export class AdBannersPage extends GlobalBasePage{

    constructor(){
        super();
        this.globalBasePage = new GlobalBasePage();

        // CSS Locators
        this.topAd      = 'div.pre-content .ad-container.desktop iframe';
        this.topAdImage = 'div#google_image_div  > a > amp-img > img';  // idea is to get right locator, but it changes depending on the ad
        this.rightAd    = 'aside.sidebar-secondary div.promo-container > section img';

    }

    //Actions to take

    goToUrlFoxLA(){
        this.globalBasePage.goToUrlFoxLA();
    }

    verifyTopAdExists(){

        //cy.get('div.pre-content .ad-container.desktop iframe').should('exist');

        cy.iframeSwitch(this.topAd).find(this.topAdImage).should('be.visible');
    }

    verifyRightAdExists(){
        cy.get(this.rightAd).should('exist');
    }

}


/// <reference types = "cypress" />

import { GlobalBasePage } from "../GlobalBasePage/GlobalBasePage";

export class LiveVideoPlayerPage extends GlobalBasePage{

    constructor(){
        super();
        this.globalBasePage = new GlobalBasePage();
        
        // CSS Locators
        this.iframeNew       = 'iframe[allowfullscreen]';
        this.mainVideoTitle  = 'div.live-headline-wrap';
        this.smallVideoTitle = 'h3.title';
        this.mainVideo       = 'video.anv-video-content';

        this.playButton      = 'div.anv-play-pause-btn';
        this.bigPlayButton   = 'div.anv-splash-play-button path';
        this.volumeButton    = 'div.anv-volume-icon-btn';
        this.captionButton   = 'div.anv-caption-btn';
        this.qualityButton   = 'div.anv-quality-btn';
        this.volumeSlider    = 'div.anv-volume-slider-btn';
    }

    // Actions to take

    goToUrlFoxLALive(){
        this.globalBasePage.goToUrlFoxLALive();
    }

    checkingVideoAutoPlay(){
        cy.get(this.mainVideoTitle).invoke('text').then((txt1) => {
            //const text1 = txt1;
            cy.log(txt1);
            cy.get(this.smallVideoTitle).contains(txt1).invoke('text').then((txt2) =>{
                //const text2 = txt2.text();
                cy.log(txt2);
                expect(txt1).to.equal(txt2.replace(/^\s+|\s+$/gm,'').replace('\n', ' '));
            }) 
                
            
        })
        cy.iframeSwitch(this.iframeNew).find(this.mainVideo).should('have.prop', 'autoplay'); //as long as the property 'autoplay' is present, setting true or false will not pause the auto-play of the video
    }

    checkForButtons(){

        cy.iframeSwitch(this.iframeNew).find(this.playButton).should('be.visible').and('have.attr', 'title', 'Play/pause the video');
        cy.iframeSwitch(this.iframeNew).find(this.volumeButton).should('be.visible').and('have.attr', 'title', 'Adjust the volume'); 
        cy.iframeSwitch(this.iframeNew).find(this.qualityButton).should('be.visible').and('have.attr', 'title', 'Quality');
        
        // if statement added to account for commercial breaks
        // The caption button will disappear while a commercial is being played
        // The video will say "We'll be right back"
        cy.iframeSwitch(this.iframeNew).then((capButton) => {
            if (capButton.find(this.captionButton).length > 0) {
                cy.iframeSwitch(this.iframeNew).find(this.captionButton).then((capButton2) => {
                    if (capButton2.is(':visible')){
                        cy.iframeSwitch(this.iframeNew).find(this.captionButton).should('be.visible').and('have.attr', 'title', 'Change captions');
                    }
                })

            }
        })


        cy.scrollTo('top');
        // Click action taken when looking for the volume slider
        cy.iframeSwitch(this.iframeNew).find(this.volumeButton).click();
        cy.iframeSwitch(this.iframeNew).find(this.volumeSlider).should('be.visible'); //does not have title attribute 

    }

    pausePlayButton(){
        cy.scrollTo('top');
        cy.iframeSwitch(this.iframeNew).find(this.playButton).click();
        cy.iframeSwitch(this.iframeNew).find(this.bigPlayButton).should('be.visible').click();
        cy.iframeSwitch(this.iframeNew).find(this.playButton).should('be.visible');

    }





    


}

const {LiveVideoPlayerPage} = require("../../../Take_Home_Assignment_Pages/Task_2_Page/LiveVideoPlayerPage");
let liveVideoPlayerPage = new LiveVideoPlayerPage();


describe('how a video loads and auto-plays', () => {

    // BeforeEach used here to give appropriate time for each test to do its checks
    beforeEach(() => {
        liveVideoPlayerPage.goToUrlFoxLALive();
    })

    it('will auto-play the video', () => {
        liveVideoPlayerPage.checkingVideoAutoPlay();

    })


    it('will show the pause, volume,quality, caption buttons', () => {
        liveVideoPlayerPage.checkForButtons();
    })

    it('will make the video pause and play', () => {
        liveVideoPlayerPage.pausePlayButton();
        liveVideoPlayerPage.pausePlayButton();
    })

    



    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

})
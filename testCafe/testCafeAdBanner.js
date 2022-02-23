import { Selector} from "testcafe";

fixture `FoxLA Ads`
    .page `https://www.foxla.com/`
    

const topAdBannerSelector = 'div.pre-content .ad-container.desktop iframe';
const topAdBannerFrame = Selector(topAdBannerSelector);



test('Verify Top Ad Banner', async t =>{
    await t
        .expect(topAdBannerFrame.exists).ok('', {timeout: 30000})
        .switchToIframe(topAdBannerSelector)
        ;

});


const rightAdBannerImgSelector = 'aside.sidebar-secondary div.ad-container.desktop iframe'; // aside.sidebar-secondary div.ad-container.desktop > div > div
const rightAdBannerImage = Selector(rightAdBannerImgSelector);

test('Verify Right-Side Ad Banner', async t =>{
    await t
        .expect(rightAdBannerImage.exists).ok('', {timeout: 30000})
        .switchToIframe(rightAdBannerImgSelector)
        ;

});

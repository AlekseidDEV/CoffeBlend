import { autoSlider } from "./modules/autoslide";
import { fixHeader } from "./modules/fixedheader";
import { galleryFunc } from "./modules/gallery";
import { offersBtns } from "./modules/offersbtn";
import { smoothScroll } from "./modules/smothscroll";
import map from './modules/mapModule'
import { openCart } from "./modules/opencart";
import { addCartFunc } from "./modules/addCart";
import { menuCollapse } from "./modules/collapse";
import { tabsFunc } from "./modules/tabs";
import { runCount } from "./modules/runningCounter";
import { rotateIcon } from "./modules/rotateIcon";

import { pik } from "./modules/customTime";
import { calendar } from "./modules/customCalendar";
import { sendForm } from "./modules/sendform";
import { animateObserver } from "./modules/observer";





smoothScroll()
fixHeader()
autoSlider(5000, ".offers_slide_item", ".slide_active")
offersBtns()
galleryFunc()
openCart()
if(window.innerWidth > 768){
    addCartFunc('.desk')
} else if(window.innerWidth <= 768){
    addCartFunc('.mob')
}
menuCollapse()
tabsFunc()
runCount()
rotateIcon()
pik()
calendar()
sendForm()
animateObserver(
    '.info_tabs_contact', 
    '.block_text_our',
    '.wrapper_tizer_card',
    '.text_menu_block',
    '.cont_tizer_total',
    '.our_discover',
    '.wrapper_cont_gall',
    '.txt_our_prod',
    '.tabs_block',
    '.adapt_wrapper_says',
    '.reviews_block',
    '.recent_wrapper',
    '.cont_recent_block',
    '.social_links'
)






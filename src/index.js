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

smoothScroll()
fixHeader()
autoSlider(5000, ".offers_slide_item", ".slide_active")
offersBtns()
galleryFunc()
openCart()
addCartFunc()
menuCollapse()
tabsFunc()
runCount()
rotateIcon()
pik()
calendar()



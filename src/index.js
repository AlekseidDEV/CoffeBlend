import { autoSlider } from "./modules/autoslide";
import { fixHeader } from "./modules/fixedheader";
import { galleryFunc } from "./modules/gallery";
import { offersBtns } from "./modules/offersbtn";
import { smoothScroll } from "./modules/smothscroll";
import map from './modules/mapModule'

smoothScroll()
fixHeader()
autoSlider(5000, ".offers_slide_item", ".slide_active")
offersBtns()
galleryFunc()

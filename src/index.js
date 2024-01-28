import { autoSlider } from "./modules/autoslide";
import { fixHeader } from "./modules/fixedheader";
import { smoothScroll } from "./modules/smothscroll";


smoothScroll()
fixHeader()
autoSlider(5000, ".offers_slide_item", ".slide_active")
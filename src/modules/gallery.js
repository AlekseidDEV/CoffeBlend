import {
    animate
} from "./hellpers";

export const galleryFunc = () => {
    const blockGallery = document.querySelector(".wrapper_cont_gall");
    const galleryWindow = document.querySelector('.modal_window_gallery')

    let stateAnimate = false;

    const rotateFunc = (elem) => {
        const rotateBlock = elem.querySelector(".rotate_block");
        const loopIcon = rotateBlock.querySelector(".loop_icon");

        if (stateAnimate) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    rotateBlock.style.opacity = `${progress}`;
                    loopIcon.style.transform = `rotate(${progress * 223}deg)`;
                },
            });
        } else {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    rotateBlock.style.opacity = `${1 - progress}`;
                    loopIcon.style.transform = `rotate(${
                        223 - progress * 223
                    }deg)`;
                },
            });
        }
    };

    const openedGallery = (pathImg) => {
        const gallImg = galleryWindow.querySelector('.gallery_open_img')

        galleryWindow.style.display = 'flex'
        gallImg.src = pathImg
    }

    const galleryClose = (e) => {
        e.preventDefault()

        if (e.target.className === 'close_modal_gall' || e.target === galleryWindow) {
            galleryWindow.style.display = 'none'
        }
    }

    blockGallery.addEventListener(
        "mouseover",
        (e) => {
            if (e.target.matches(".img_gall")) {
                stateAnimate = true;
                rotateFunc(e.target);
            }
        },
        true
    );

    blockGallery.addEventListener(
        "mouseleave",
        (e) => {
            if (e.target.matches(".img_gall")) {
                stateAnimate = false;
                rotateFunc(e.target);
            }
        },
        true
    );

    blockGallery.addEventListener('click', (e) => {
        if (e.target.closest('.img_gall')) {
            openedGallery(e.target.closest('.img_gall').dataset["img_gall"])
        }
    })

    galleryWindow.addEventListener('click', galleryClose)
};
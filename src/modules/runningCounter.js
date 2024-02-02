import {
    animate
} from "./hellpers"

export const runCount = () => {

    const blockToActiv = document.querySelector('.cont_tizer_total')

    let trashLoad = 0.7
    let hasRun = false

    const isElementViewPort = (elem) => {
        const rect = elem.getBoundingClientRect()
        const windowHeight = window.innerHeight

        return (rect.top <= windowHeight * trashLoad)
    }

    const runnNumber = () => {
        const numberAll = document.querySelectorAll('.number_total')

        numberAll.forEach((numb) => {
            if (numb.textContent.trim() === '0') {
                animate({
                    duration: 2500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        numb.textContent = `${Math.ceil(progress * numb.dataset['total_count'])}`
                    },
                });
            } else {
                return
            }
        })
    }

    window.addEventListener('scroll', () => {

        if (isElementViewPort(blockToActiv) && !hasRun) {
            hasRun = true
            runnNumber()
        } else if (!isElementViewPort(blockToActiv)) {
            hasRun = false
        }
    })
}
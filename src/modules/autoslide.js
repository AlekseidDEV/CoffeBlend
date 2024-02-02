export const autoSlider = (time, item, activeItem) => {
    const slides = document.querySelectorAll(item)
    const parentDots = document.querySelector('.dots')
    const wrapperBg = document.querySelector('.offers_block')

    let interval
    let count = 0

    const addDots = () => {
        for (let i = 0; i <= slides.length - 1; i++) {
            const dotitem = document.createElement('span')
            parentDots.appendChild(dotitem)
        }

        const arrDots = parentDots.querySelectorAll('span')

        arrDots.forEach((dot, index) => {
            if (index === 0) {
                dot.classList.add('dot', 'dotActive')
            } else {
                dot.classList.add('dot')
            }
        })
    }
    const changeDots = (index) => {
        const activeDot = parentDots.querySelector('.dotActive')
        const allDots = parentDots.querySelectorAll('.dot')

        activeDot.classList.remove('dotActive')
        allDots[index].classList.add('dotActive')
    }

    const changeSlide = () => {
        const activeSlide = document.querySelector(activeItem)

        count++

        if (count >= slides.length) {
            count = 0
        }

        activeSlide.classList.remove('slide_active')
        slides[count].classList.add('slide_active')
        wrapperBg.style.cssText = `
                background: url(${slides[count].dataset['background_slide']}) no-repeat center fixed;
                background-size: cover;
                        `;
        changeDots(count)
    }

    const startSlider = () => {
        if (document.querySelector(item) !== null) {
            interval = setInterval(changeSlide, time)
        } else {
            return
        }
    }

    addDots()
    startSlider()
}
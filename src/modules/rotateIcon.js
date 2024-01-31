import { animate } from "./hellpers"


export const rotateIcon = () => {
    const icons = document.querySelector('.cont_tizer_total')

    let stateAnimate = false

    const rotateFunc = (icon) => {
      

        if(stateAnimate){
            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    icon.style.transform = `rotate(${progress * 45}deg)`
                },
            });
        } else{
            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    icon.style.transform = `rotate(${45 - progress * 45}deg)`
                },
            });
        }
    }

    icons.addEventListener('mouseover', (e) => {
        if(e.target.className === 'border_tizer_img'){
            stateAnimate = true
            rotateFunc(e.target)
        }
    })

    icons.addEventListener('mouseout', (e) => {
        if(e.target.className === 'border_tizer_img'){
            stateAnimate = false
            rotateFunc(e.target)
        }
    })
}
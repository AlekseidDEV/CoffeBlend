import { animate } from "./hellpers"

export const menuCollapse = () => {
    const menu = document.querySelector('.collapce_menu')

    const cartBtn = document.querySelector('.mob_link')
    const modalCart = document.querySelector('.modal_cart_window')

    let clicker = false

    
    const openMenu = () => {
        if(clicker){
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    menu.style.top = `${-menu.clientHeight + progress * menu.clientHeight}px`
                },
            });
        } else{
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    menu.style.top = `${-progress * menu.clientHeight}px`
                },
            });
        }
    }

    document.addEventListener('click', (e) => {
        e.preventDefault()
        
        if(e.target.closest('.menu_mob_wrapper')){
            clicker = !clicker
            openMenu()
        }
    
    })

    // cartBtn.addEventListener('click', () => {
    //     modalCart.style.display = 'flex'
    // })
}
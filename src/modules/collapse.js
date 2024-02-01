import { animate } from "./hellpers"

export const menuCollapse = () => {
    const menu = document.querySelector('.collapce_menu')
    const menuMobailLink = document.querySelector(".menu_mob_wrapper")
    const wrapperCollapce = document.querySelector('.wrapper_collapse')
    const stray = wrapperCollapce.querySelector('.stray')
    const modalCart = document.querySelector('.modal_cart_window')

    let clicker = false

    const openMobMenu = () => {
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

            stray.style.height = '100%'
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

            stray.style.height = '0%'
        }
    }

    menuMobailLink.addEventListener('click', (e) => {
        e.preventDefault()
        clicker = !clicker
        openMobMenu()
    })

    wrapperCollapce.addEventListener('click', (e) => {
        if( e.target === stray ||
            e.target.className === 'link_header_nav'
        ){
            clicker = false
            openMobMenu()
        } else if(e.target.matches('.mob_link')){
            clicker = false
            openMobMenu()
            modalCart.style.display = 'flex'
        }
    })
}
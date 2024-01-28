export const smoothScroll = () => {
    const navMenu = document.querySelector('.nav_menu')

    const scrollToBlock = (id) => {

        const idBlock = id.slice(1)
        document.getElementById(idBlock).scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    }

    navMenu.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.nodeName === 'A'){
            scrollToBlock(e.target.hash)
        }
    })
}
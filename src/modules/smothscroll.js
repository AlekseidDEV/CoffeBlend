export const smoothScroll = () => {
    const navMenu = document.querySelector('.nav_menu')
    const linksCollapse = document.querySelector('.box-content')

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
    linksCollapse.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.nodeName === 'A' && !e.target.matches(".mob_link")){
            scrollToBlock(e.target.hash)
        }
    })
}
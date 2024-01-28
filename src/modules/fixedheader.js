export const fixHeader = () => {
    const header = document.querySelector('.wrapper_cont_header')

    const changePosition = () => {
        const scrollY = window.scrollY

        if(scrollY > header.clientHeight){
            header.classList.add('sticky')
        } else if(scrollY < header.clientHeight){
            header.classList.remove('sticky')
        }
    }

    document.addEventListener('scroll', changePosition)
}
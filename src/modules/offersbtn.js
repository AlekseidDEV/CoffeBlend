export const offersBtns = () => {
    const btns = document.querySelectorAll('.block_btns_offers')

    const scrollBlock = (id) => {
        document.getElementById(id.slice(1)).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }

    btns.forEach((elem) => {
        elem.addEventListener('click', (e) => {

        e.preventDefault()

        if(e.target.localName === 'a'){
            scrollBlock(e.target.hash)
        }
    })
    })
}
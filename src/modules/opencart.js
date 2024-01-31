export const openCart = () => {
    const cartBtn = document.querySelector('.link_cart')
    const modalCart = document.querySelector('.modal_cart_window')

    const openedFunc = (e) => {
        e.preventDefault()

        if(e.target === cartBtn){
            modalCart.style.display = 'flex'
        } else if(e.target === modalCart || e.target.className === 'close_cart_modal'){
            modalCart.style.display = 'none'
        }
    }

    cartBtn.addEventListener('click', openedFunc)
    modalCart.addEventListener('click', openedFunc)
}
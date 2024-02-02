export const tabsFunc = () => {
    const blockBtns = document.querySelector('.block_btn_tabs')

    const tabChange = (elem) => {

        const acriveTab = document.querySelector('.activeTab')
        const activeBlock = document.querySelector('.activeBlock')

        const currentBlock = document.querySelector(`.${elem.id}`)

        console.log(currentBlock);

        if (elem.matches('.activeTab')) {
            return
        } else {
            acriveTab.classList.remove('activeTab')
            elem.classList.add('activeTab')
            activeBlock.classList.remove('activeBlock')
            currentBlock.classList.add("activeBlock")
        }
    }

    blockBtns.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.localName === 'a') {
            tabChange(e.target)
        }
    })
}
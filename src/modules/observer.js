export const animateObserver = (
                                infoTabs, 
                                textOur,
                                tizCards,
                                menuBlock,
                                tizTotal,
                                discover,
                                imgGall,
                                textProd, 
                                cardProd,
                                saysUser,
                                reviews,
                                recentText,
                                resentCard,
                                socialLink
                                ) => {
    

    const arrItem = [
        {elem: document.querySelector(textOur)},
        {elem: document.querySelector(menuBlock)},
        {elem: document.querySelector(discover)},
        {elem: document.querySelector(textProd)},
        {elem: document.querySelector(saysUser)},
        {elem: document.querySelector(recentText)},
        {elem: document.querySelector(cardProd)},
    ]

    const arrCard = [
        {cards: document.querySelector(infoTabs)},
        {cards: document.querySelector(tizCards)},
        {cards: document.querySelector(tizTotal)},
        {cards: document.querySelector(imgGall)},
        {cards: document.querySelector(reviews)},
        {cards: document.querySelector(resentCard)},
        {cards: document.querySelector(socialLink)},
    ]


    const sequence = (cards, time = 300) => {

        Array.from(cards).forEach((card, index) => {
            const delay = index * time
            
            setTimeout(() => {
                card.classList.add('visible')
            }, delay)
        })
    }


    const swapFunc = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
                observer.unobserve(entry.target);
            }
        })
    }

    const cardFunc = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                sequence(entry.target.children)
            }
        })
    }


    const swapObserver = new IntersectionObserver(swapFunc, {
        rootMargin: "50px", 
        threshold: 0.5
    })

    const cardObserver = new IntersectionObserver(cardFunc, {
        rootMargin: "50px", 
        threshold: 0.5
    })

    arrItem.forEach((elem) => {
        swapObserver.observe(elem.elem)
    })

    arrCard.forEach((card) => {
        cardObserver.observe(card.cards)
    })

}
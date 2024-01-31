export const pik = () => {

    const blockTimes = document.querySelectorAll('.book_table_form')
    const timeField = document.querySelectorAll('.timeChange')

    const hourseWork = ["07", "08", "09", '10', "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
    const minute = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']

    const chageTime = (element, parent) => {
        const min = parent.querySelector('.min')
        const hour = parent.querySelector('.hour')
        const stocktext = parent.querySelector('.stock_text')

    
        element.addEventListener('click', (e) =>{
            stocktext.style.display = 'none'

            if(e.target.closest('.row_hourse')){
                hour.textContent = e.target.textContent + ':'
            } else if(e.target.closest('.row_minutse')){
                min.textContent = e.target.textContent
            }
        })
    }

    const genericTimeList = (element) => {
        const fieldTime = element.querySelector('.timeChange')
        const rowHourse = fieldTime.querySelector('.row_hourse')
        const rowMinute = fieldTime.querySelector('.row_minutse')

        fieldTime.style.opacity = '1'
        fieldTime.style.zIndex = '1'
        fieldTime.setAttribute('id', 'activeted');

        if(rowHourse.childElementCount === 0 && rowMinute.childElementCount === 0){
            for(let i = 0; i <= hourseWork.length -1; i++){
                const newP = document.createElement('p')
                newP.textContent = hourseWork[i]
                rowHourse.appendChild(newP);
            }

            for (let i = 0; i < minute.length; i++) {
                const newP = document.createElement('p');
                newP.textContent = minute[i];
                rowMinute.appendChild(newP);
            }
        } else{
            return
        }
        chageTime(fieldTime , element)
    }

    const visibleField = (elem) => {
        if(elem){
            elem.style.opacity = '0'
            elem.style.zIndex = '-999'
            elem.removeAttribute('id')
        }
    }

    blockTimes.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            if(e.target.closest('.input_time_custom')){
                genericTimeList(e.target.closest('.input_time_custom'))
            } else{
                const elemActive = document.getElementById('activeted')

                visibleField(elemActive)
            }
        })
    })
}


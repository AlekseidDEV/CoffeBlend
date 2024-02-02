import AirDatepicker from "air-datepicker";
import localeEn from 'air-datepicker/locale/en';

export const calendar = () => {
    const formOne = document.getElementById('form_head')
    const formTwo = document.getElementById('form_foot')

    const calendarTable = new AirDatepicker('#air', {
        inline: true,
        locale: localeEn,
        autoClose: true,
        container: '.input_date_custom',
    })

    const calendarMapForm = new AirDatepicker('#air2', {
        inline: true,
        locale: localeEn,
        autoClose: true,
        container: '.cust',
    })

    const calendarFunc = (e, calendar) => {

        let visible = calendar.visible

        if (e.target.matches('.date_choose, .link_date_choose')) {
            calendar.show()
        } else if (visible) {
            calendar.hide()
        }
    }

    formOne.addEventListener('click', (e) => {
        calendarFunc(e, calendarTable)
    })

    formTwo.addEventListener('click', (e) => {
        calendarFunc(e, calendarMapForm)
    })
}
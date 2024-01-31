import AirDatepicker from "air-datepicker";
import localeEn from 'air-datepicker/locale/en';


const calendarTable = new AirDatepicker('#air', {
    inline: true,
    locale: localeEn,
    autoClose: true,
})

const calendarMapForm = new AirDatepicker('#air2', {
    inline: true,
    locale: localeEn,
    autoClose: true,
})
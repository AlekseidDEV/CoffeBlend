import flatpickr from "flatpickr"
export const pik = () => {

    const flatTimeTable = flatpickr("#fck", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "13:45",
        minTime: "07:00",
        maxTime: "22:00",
    });

    const flatTimeMap = flatpickr("#fck2", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "13:45",
        minTime: "07:00",
        maxTime: "22:00",
    })
}
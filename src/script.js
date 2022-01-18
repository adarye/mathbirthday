let time = 0;
const date_selector = document.getElementById('date_selector');
const calendar = document.getElementById("calendar-a");

const main = () => {
    var dtToday = new Date();
    date_selector.setAttribute('max', dtToday.toISOString().split('T')[0]);
}

const calculate = () => {
    calendar.className = ""
    date_selector.className = ""
    const date = date_selector.value;
    if (date == "") {
        console.log('ingrese una fecha')
       date_selector.className = "animate__animated animate__shakeX"
       return;
    }
    date2 = new Date;
    const diff = Math.floor((Date.parse(date2) - Date.parse(date)) / 86400000);
    let nextBirthdayDays = 1;
    do {
        nextBirthdayDays = nextBirthdayDays * 10;
    }
    while (nextBirthdayDays <= diff)

    const dateTemp = new Date((date + "T00:00:00"));
    const nextBirthdayDate = dateTemp.setDate(dateTemp.getDate() + nextBirthdayDays)
    document.getElementsByClassName("card_text")[0].innerHTML = "Your next math birthday is your " +
        nextBirthdayDays + "-day old <br><center><b>ON</b></center>"
    generateDatePicker(nextBirthdayDate)
}

const generateDatePicker = (nextBirthdayDate) => {
    let calA = new Calendar({
        id: "#calendar-a",
        theme: "glass",
        // border: "5px solid black",
        weekdayType: "long-upper",
        monthDisplayType: "long",
        disableDayClick: true,
        disableMonthYearPickers: true,
        disableMonthArrowClick: true,
        headerBackgroundColor: "#073278",
        calendarSize: "small",
        layoutModifiers: ["month-left-align"],
    });
    calA.setDate(new Date(nextBirthdayDate));
    if (time == 0) {
        calendar.className = "animate__animated animate__backInUp"
        time = 1;
    } else {
       calendar.className = "animate__animated animate__pulse"
    }
}
main();
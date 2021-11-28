let elems = document.querySelectorAll('.elem');

let timer = () => {

    let futDate = new Date(2023, 2, 14);
    let curDate = new Date().getTime();
    let timeBetween = futDate - curDate;

    const sec = 1000;
    const mins = sec * 60;
    const hrs = mins * 60;
    const days = hrs * 24;

    const ourSec = Math.floor((timeBetween % mins) / sec);
    const ourMins = Math.floor((timeBetween % hrs) / mins);
    const ourHrs = Math.floor((timeBetween % days) / hrs);
    const ourDays = Math.floor(timeBetween / days);

    function ziroDigits(digit) {
        return digit < 10 ? '0' + digit : digit;
    }

    elems[0].innerHTML = `${ziroDigits(ourDays)} Days`;
    elems[1].innerHTML = `${ziroDigits(ourHrs)} Hours`;
    elems[2].innerHTML = `${ziroDigits(ourMins)} Minutes`;
    elems[3].innerHTML = `${ziroDigits(ourSec)} Seconeds`;

    setInterval(timer, 1000);
};

timer();
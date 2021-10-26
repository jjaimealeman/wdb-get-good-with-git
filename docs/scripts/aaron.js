const getClock = [...document.querySelectorAll('.aarons-clock > span')];
const clock = {
    hh: getClock[0],
    mm: getClock[2],
    ss: getClock[3],
    seperator: getClock[1]
};

setInterval(() => {
    const now = new Date();

    clock.hh.innerText =
        now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();

    clock.mm.innerText =
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    clock.ss.innerText =
        now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

    clock.seperator.classList.toggle('hide');

}, 1000);
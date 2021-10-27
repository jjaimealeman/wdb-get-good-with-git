let typeInterval;

const typeText = async (text, elem) => {
    if (text.length > 0) {
        elem.innerText += text[0];

        if (elem.classList.contains('home-bash')) {             // we only want to cancel out nav commands
            typeInterval = setTimeout(function () {             // assigned so can be cancelled
                typeText(text.substring(1, text.length), elem) 
            }, 60);
        }
    }

    else return;
}
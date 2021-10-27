const typingAnimationTarget = document.querySelector('#typing-animations .target');
const liveDemoInteractions = document.querySelectorAll('#typing-animations .live-demo a');

let typeInterval;

const typeText = (text, elem) => {
    // console.log(text)
    if (text.length > 0) {
        elem.innerText += text[0];

        typeInterval = setTimeout(function () {
            typeText(text.substring(1, text.length), elem)
        }, 60);
    }

    else return;
}

liveDemoInteractions.forEach(anchor => {
    anchor.addEventListener('mouseover', (evt) => {
        typeText(evt.target.attributes.command.value, typingAnimationTarget);
    })

    anchor.addEventListener('mouseout', (evt) => {
        clearInterval(typeInterval);
        typingAnimationTarget.innerText = '';
    })
})
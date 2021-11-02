// https://api.tvmaze.com/search/shows?q=girls
const inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let images = document.querySelectorAll(".image-container img");
    if (images) {
        for (let i = 0; i < images.length; i++) {
            images[i].parentNode.removeChild(images[i]);
        }
    }
    const userInput = inputForm.elements.tvShow.value;
    const individual = document.querySelector("#tv-show");
    const config = { params: { q: userInput } };
    const promiseReturn = await axios.get(
        `https://api.tvmaze.com/search/shows`,
        config
    );
    individual.value = "";
    makeNewImage(promiseReturn.data);
});

const makeNewImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const imageContainer = document.querySelector(".image-container");
            const newImg = document.createElement("img");
            newImg.setAttribute("src", result.show.image.medium);
            imageContainer.append(newImg);
        }
    }
};
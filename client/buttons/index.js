const addButtons = () => {
    const container = document.getElementById("button-container");
    for (let index = 0; index < 100; index++) {
        const button = document.createElement("button");
        button.innerText = index + 1;
        button.classList.add("button");
        button.addEventListener("click", handlerGenerator(index+1)); 
        container.appendChild(button);
    }
}

document.addEventListener("DOMContentLoaded", addButtons);

// const handlerGenerator = (index) => () => {
//     const container = document.getElementById("result");
//     const buttons = document.getElementsByClassName("button");
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove("active");
//     }
//     buttons[index-1].classList.add("active");
//     container.innerText = index;
// }

const handlerGenerator = (index) => ({target}) => {
    const container = document.getElementById("result");
    const buttons = document.getElementsByClassName("button");
    for (const button of buttons) {
        button.classList.remove("active");
    }
    target.classList.add("active");
    container.innerText = index;
}

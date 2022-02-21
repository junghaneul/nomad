const loginButton = document.querySelector("#loginButton");
const todoForm = document.querySelector("#todo-form");
const loginInput = document.querySelector("#todo-form input:first-child");

function loginForm(e){
    e.preventDefault();
    const username = loginInput.value;
    loginButton.classList.add("hidden");
    loginInput.classList.add("hidden");
    const userWrap = document.querySelector("#wrap");
    const userHello = document.createElement("h1");
    userWrap.appendChild(userHello);;
    userHello.innerText="hello, "+`${username}`+".";
    userHello.classList.add("user-name-up");
    const userHelloClass = document.querySelector(".user-name-up");
    const userNameWidth = userHelloClass.offsetWidth;
    const userNameWidth2 = userNameWidth / 2;
    userHello.style.marginLeft = `-${userNameWidth2}px`;
}

loginButton.addEventListener("click",loginForm);
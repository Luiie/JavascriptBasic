const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
	h1.style.color = "white";
}
function handleMouseEnter() {
	h1.style.color = "white";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);

// const h1 = document.querySelector("div.hello:first-child h1");

// const logintForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginSubmit(arg) {
    // const username = loginInput.value;
    // arg.preventDefault();
    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length >= 15){
    //     alert("Your name is too long!");
    // }
    // console.log(arg.value)
// }
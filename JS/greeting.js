const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const  HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
    const button = document.createElement("button");
    greeting.appendChild(button);
    button.innerText = "Log out";
    button.addEventListener("click", () => {
        console.log("!!");
        localStorage.removeItem("username");
        location.reload();
    });
}

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value;
    localStorage.setItem("username", username)
    loginForm.classList.add("hidden");

    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    // paintGreetings(username);
}
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// submit event  
function onLoginSubmit(event) {
    // 브라우저의 기본 동작을 막음 
    event.preventDefault();
    // loginForm과 greeting은 같은 class를 갖고 있음 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    // ` ${변수} `
    greeting.innerText = `Hello ${username}`;
    // show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // addEventListener는 바로 실행이 아닌, submit 실행 시 onLoginSubmit() 함수 실행 
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);

}
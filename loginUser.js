import {loginUs,setToken,token} from './api.js'
import {renderRegistr} from './registration.js'
export const renderLogin = ({resultGET}) => {
    const appElement = document.getElementById("app")
    const loginHTML = `
<h2>Страница входа</h2>
    <div class="form-autorization">
    <input type="text" id="login-input" placeholder="Логин" class="login-input">
    <br>
    <input type="password"  id="password-input" class="password-input" placeholder="Пароль">
    </div>
    <br>
    <button id="login-button" class="login-button">Авторизация</button>
    <button id="registration-button" class="login-button">Регистрация</button>
    
    `
    appElement.innerHTML = loginHTML;
    const buttonElementLogin = document.getElementById("login-button");
    const loginInputElement = document.getElementById("login-input");
    const passwordInputElement = document.getElementById("password-input");
    buttonElementLogin.addEventListener("click", () => {
        loginUs({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            console.log(token);
            setToken(responseData.user.token);
            console.log(token);
        }).then(() => {
            if (token) {}
            resultGET()
        })
    })
}
const buttonElementRegistr = document.getElementById("registration-button");
buttonElementRegistr.addEventListener("click", ({resultGET}) => {
    renderRegistr({
        resultGET
    });
})
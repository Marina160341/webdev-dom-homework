import {loginUs, setToken, token} from './api.js'

export const renderLogin = ({resultGET}) => {
const appElement=document.getElementById("app")
const loginHTML =
`<h2>Страница входа</h2>
    <div>
    <input type="text" id="login-input" placeholder="Логин">
    <input type="password"  id="password-input" placeholder="Пароль">
    </div>
    <br>
    <button id="login-button">Авторизация</button>
    <a href="index.html" id="link-to-tasks"></a>
    `
appElement.innerHTML=loginHTML;

const buttonElementLogin = document.getElementById("login-button");
const loginInputElement = document.getElementById("login-input");
const passwordInputElement = document.getElementById("password-input");
    buttonElementLogin.addEventListener("click", () =>{
        loginUs(
            {
        login: loginInputElement.value,
        password: passwordInputElement.value,
            }
        ).then((responseData)=>{
        console.log(token);
        setToken (responseData.user.token);

        console.log(token);
        }).then(()=>{
            resultGET() 
        })
        }
        )
        
}



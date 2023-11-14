import {registration, setToken, token} from './api.js'
import { renderLogin } from './loginUser.js'
export const renderRegistr = ({resultGET}) => {
    const appElement=document.getElementById("app")
    const registrationHTML =
    `<h2>Страница регистрации</h2>
        <div class="regForm">
        <input type="name"  id="name-registration" class="regPassword" placeholder="Имя пользователя">
        <input type="text" id="login-registration" class="regLogin" placeholder="Логин">
        <input type="password"  id="password-registration" class="regPassword" placeholder="Пароль">
        </div>
        <br>
        <button id="registration-button" class="registration-button">Регистрация</button>
        <button id="login-button" class="login-button">Авторизация</button>
        <a href="index.html" id="link-to-tasks"></a>
        `
    appElement.innerHTML=registrationHTML;
    
    const buttonElementRegistration = document.getElementById("registration-button");
    const loginElementRegistrration = document.getElementById("login-registration");
    const passwordElementRegistration = document.getElementById("password-registration");
    const nameElementRegistration = document.getElementById("name-registration");
    const buttonElementLogin = document.getElementById("login-button");
    buttonElementRegistration.addEventListener("click", () =>{
        registration(
                {
                        login:loginElementRegistrration.value,
                        name:nameElementRegistration.value,
                        password:passwordElementRegistration.value
                }
            ).then((responseData)=>{
            console.log(responseData);
            console.log(token);
            setToken (responseData.user.token);
    
            console.log(token);
            }).then(()=>{
                resultGET() 
            })
            }
            )
            buttonElementLogin.addEventListener("click", () => {
                renderLogin({ resultGET });
                 });
        }
            
    
    
    
    
    
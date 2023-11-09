import {registration, setToken, token} from './api.js'
export const renderRegistr = ({resultGET}) => {
    const appElement=document.getElementById("app")
    const registrationHTML =
    `<h2>Страница регистрации</h2>
        <div class="regForm">
        <input type="text" id="name-registration" class="regLogin" placeholder="Имя">
        <input type="text" id="login-registration" class="regLogin" placeholder="Логин">
        <input type="password"  id="password-registration" class="regPassword" placeholder="Пароль">
        </div>
        <br>
        <button id="registration-button" class="registration-button">Регистрация</button>
        <a href="index.html" id="link-to-tasks"></a>
        `
    appElement.innerHTML=registrationHTML;
    
    const buttonElementRegistration = document.getElementById("registration-button");
    const loginElementRegistrration = document.getElementById("login-registration");
    const passwordElementRegistration = document.getElementById("password-registration");
    const nameElementRegistration = document.getElementById("name-registration");
    
    buttonElementRegistration.addEventListener("click", () =>{
        registration(
                {
            login: loginElementRegistrration.value,
            password: passwordElementRegistration.value,
            name: nameElementRegistration.value
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

    
    
    
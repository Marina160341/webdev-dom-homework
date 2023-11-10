import {registration, setToken, token} from './api.js'
export const renderRegistr = ({resultGET}) => {
    const appElement=document.getElementById("app")
    const registrationHTML =
    `<h2>Страница регистрации</h2>
        <div class="regForm">
<<<<<<< HEAD
        <input type="name"  id="name-registration" class="regPassword" placeholder="Имя пользователя">
=======
        <input type="text" id="name-registration" class="regLogin" placeholder="Имя">
>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7
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
<<<<<<< HEAD
    const nameElementRegistration = document.getElementById("name-registration")
    buttonElementRegistration.addEventListener("click", () =>{
        registration(
                {
                        login:loginElementRegistrration.value,
                        name:nameElementRegistration.value,
                        password:passwordElementRegistration.value
                }
            ).then((responseData)=>{
            console.log(responseData);
=======
    const nameElementRegistration = document.getElementById("name-registration");
    
    buttonElementRegistration.addEventListener("click", () =>{
        registration(
                {
            login: loginElementRegistrration.value,
            password: passwordElementRegistration.value,
            name: nameElementRegistration.value
                }
            ).then((responseData)=>{
>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7
            console.log(token);
            setToken (responseData.user.token);
    
            console.log(token);
            }).then(()=>{
                resultGET() 
            })
            }
            )
            
    }
<<<<<<< HEAD
    
=======

>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7
    
    
    
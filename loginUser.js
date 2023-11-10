<<<<<<< HEAD
import {loginUs,setToken,token} from './api.js'
import {renderRegistr} from './registration.js'
export const renderLogin = ({resultGET}) => {
    const appElement = document.getElementById("app")
    const loginHTML = `
=======
import {loginUs, setToken, token} from './api.js'
<<<<<<< HEAD
import {renderRegistr} from './registration.js' 
=======
>>>>>>> 77b2d899f185e538ec693e751837def1b99e8785

export const renderLogin = ({resultGET}) => {
const appElement=document.getElementById("app")
const loginHTML =
<<<<<<< HEAD
`
>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7
<h2>Страница входа</h2>
    <div class="form-autorization">
    <input type="text" id="login-input" placeholder="Логин" class="login-input">
    <br>
    <input type="password"  id="password-input" class="password-input" placeholder="Пароль">
    </div>
    <br>
    <button id="login-button" class="login-button">Авторизация</button>
    <button id="registration-button" class="login-button">Регистрация</button>
    
<<<<<<< HEAD
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
=======
=======
`<h2>Страница входа</h2>
    <div>
    <input type="text" id="login-input" placeholder="Логин">
    <input type="password"  id="password-input" placeholder="Пароль">
    </div>
    <br>
    <button id="login-button">Авторизация</button>
    <a href="index.html" id="link-to-tasks"></a>
>>>>>>> 77b2d899f185e538ec693e751837def1b99e8785
    `
appElement.innerHTML=loginHTML;

const buttonElementLogin = document.getElementById("login-button");
const loginInputElement = document.getElementById("login-input");
const passwordInputElement = document.getElementById("password-input");
<<<<<<< HEAD

=======
>>>>>>> 77b2d899f185e538ec693e751837def1b99e8785
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
<<<<<<< HEAD
const buttonElementReg =document.getElementById("registration-button");
buttonElementReg.addEventListener("click", () =>{
    renderRegistr ({resultGET})
  
})

        
=======

>>>>>>> 77b2d899f185e538ec693e751837def1b99e8785

>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7

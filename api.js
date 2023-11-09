const  commentsURL ='https://wedev-api.sky.pro/api/v2/kemova-marina/comments'
const  userURL ='https://wedev-api.sky.pro/api/user/login'
const registrationURL = 'https://wedev-api.sky.pro/api/user'
export let token;
export const setToken = (newToken) =>{
    token = newToken;
   }

export function getTodos (){
     return fetch(commentsURL, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`}
        
    }).then((response) => {
if (response.status===401)
{
    password=prompt('Введите верный пароль')
    getTodos ();
    throw new error('Введите пароль ещё раз');
}
         else if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("Сервер упал")
        };
})

 }
    export function postTodos ({text, name}){
    return fetch(commentsURL, {
            method: "POST",
            headers: {Authorization: `Bearer ${token}`},
            body: JSON.stringify({
                text: text,
                name: name,
                })
                
        }).then((response) => {
            if (response.status === 500) {
                throw new Error("Сервер упал")
            }
            if (response.status === 400) {
                throw new Error("плохой запрос")
            } else {
                return response.json()
            };
        })
    }
    export function loginUs ({login, password}){
        return fetch(userURL, {
        method: "POST",
        body: JSON.stringify({
        login,
        password,
                            })
                    }).then((response) => {
                         
        return response.json();
                        
                    })
                }

    export function registration ({login, password, name}){
        return fetch(registrationURL, {
        method: "POST",
        body: JSON.stringify({
        login,
        name,
        password,
                          })
         }).then((response) => {
        return response.json();
                                    
                                })
                            }
    // export function deleteTodo({ id }) {
    //     return fetch("https://wedev-api.sky.pro/api/v1/kemova-marina/comments/" + id, {
    //       method: "DELETE",
    //     }).then((response) => {
    //       return response.json();
    //     });
    //   }
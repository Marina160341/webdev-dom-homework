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
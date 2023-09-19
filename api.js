export function getTodos (){
    return fetch('https://wedev-api.sky.pro/api/v1/kemova-marina/comments/', {
        method: "GET",
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("Сервер упал")
            return response.json()
        };
})
    }
    export function postTodos (text, name){
    return fetch('https://wedev-api.sky.pro/api/v1/kemova-marina/comments/', {
            method: "POST",
            body: JSON.stringify({
                text: text,
                name: name
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
export function StateTrue (){
    const buttonDisabledTrue = () => {
    buttonElement.disabled = true;
    buttonElement.textContent = 'Идёт загрузка...';
}
}
export function StateFalse (){
    const buttonDisabledFalse = () => {
    buttonElement.disabled = false;
    buttonElement.textContent = 'Написать';
}
}
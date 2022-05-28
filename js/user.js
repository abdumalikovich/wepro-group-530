let api = `https://frozen-beach-39942.herokuapp.com`

const saveUserLocally = (user) => {
    // Сохранить юзера локально
    localStorage.user = JSON.stringify(user.body)
}

// Вход

// Регистрация
let register = document.querySelector("#register")

register.onsubmit = () => {
    event.preventDefault()
    let fm = new FormData(event.target)
    let obj = {}
    fm.forEach((value, key) => {
        obj[key] = value
    })
    axios.post(api + "/users", obj)
        .then(res => {
            saveUserLocally(res.data)
            window.location.href = "./account.html"
        })
        .catch(err => {
            console.log(err);
        })
}

// Выход

// Удаление аккаунта

// Изменение аккаунта
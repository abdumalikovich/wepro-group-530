// Переключить регистрацию на вход и наоборот
let div_come_in = document.querySelector(`.to_come_in`)
let div_log_in = document.querySelector(`.log_in`)
let b_register = document.querySelector(`.log-in`)
let b_to_come_in = document.querySelector(`.to-come-in`)

b_register.onclick = () => {
    div_come_in.classList.add(`unactive`)
    div_log_in.classList.remove(`unactive`)
}

b_to_come_in.onclick = () => {
    div_come_in.classList.remove(`unactive`)
    div_log_in.classList.add(`unactive`)
}

// Модалка загрузка
let modal_w = document.querySelector('.instagram')
let bg_modal = document.querySelector('.bg-modal')

const open_modal_window = () => {
    modal_w.classList.add("loading")
    bg_modal.style.display = "block"

    setTimeout(() => {
        bg_modal.style.opacity = "1"
    }, 100);

}

const close_modal_window = () => {
    modal_w.classList.remove("loading")
    bg_modal.style.display = "none"
}

let images = document.querySelectorAll(".animation img")
let counter = 0
let status = true
const NEXT_SLIDE = (isNext) => {
    for (let item of images) {
        item.classList.remove("show_item")
    }
    if (isNext) {
        counter++
        if (counter > images.length - 1) {
            counter = 0
        }
    } else {
        counter--
        if (counter < 0) counter = images.length - 1
    }
    images[counter].classList.add("show_item")
}

let slider = setInterval(() => {
    if (status === true) {
        NEXT_SLIDE(true)
    }
}, 3500)
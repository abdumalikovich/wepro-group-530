let header = document.createElement("header")
let headerStyle = document.createElement("style")

headerStyle.innerHTML = `
    header {
        max-width: 1781px;
        height: 83px;
        margin: 20px auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .no_under_line {
        text-decoration: none;
        color: black;
    }

    .search {
        width: 300px;
        height: 45px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        background-color: #151515;
    }

    .search img {
        margin-left: 9px;
    }

    .search input {
        background-color: transparent;
        color: white;
        width: fit-content;
        border: none;
        margin-left: 11px;
        outline: none;
    }

    .search input::placeholder {
        color: rgba(255, 255, 255, 0.45);
    }

    .right {
        width: 110px;
        height: 83px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .people {
        height: 83px;
        border-radius: 100%;
    }

    .menu_people {
        position: absolute;
        width: 224px;
        height: 200px;
        border-radius: 14px;
        background-color: white;
        left: -210px;
        top: 50px;
        display: none;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
        z-index: 100;
    }

    .blocks_menu {
        font-size: 20px;
        padding: 13px 22px;
        border-bottom: 1px solid #6A6A6A;
    }

    .your_friends {
        border-radius: 22px;
        position: absolute;
        right: 180px;
        top: 150px;
        width: 400px;
        height: 342px;
        background-color: white;
        display: none;
        padding: 22px;
    }
`

header.innerHTML = `
    <div class="left">
    <a href="#" class="no_under_line">
        <img src="./public/icons/logo.svg" class="logo">
    </a>
    </div>

    <div>
    <div class="search">
        <img src="./public/icons/search (1) 1.svg" alt="">
        <input type="text" placeholder="Search">
    </div>
    </div>

    <div class="right">
    <img src="./public/icons/Vector 1.svg" class="open">
    <img src="./public/images/user.png" class="people">

    <div class="menu_people">
    <div class="blocks_menu your_profile">Your profile</div>
    <div class="blocks_menu show_friend">Your friends</div>
    <div class="blocks_menu setting">Setting </div>
    <div class="blocks_menu log_out" style="border-bottom: none; color: #444444;">Log out</div>
</div>

    <div class="your_friends">
        <p style="font-size: 24px;">Your friends:</p>
    </div>
    </div>
`

document.body.prepend(header, headerStyle)

let your_profile = document.querySelector('.your_profile')
let show_friend = document.querySelector('.show_friend')
let setting = document.querySelector('.setting')
let log_out = document.querySelector('.log_out')

let menu_people = document.querySelector('.menu_people')
let open_menu = document.querySelector('.open')
let your_friends = document.querySelector('.your_friends')

open_menu.setAttribute('active', 'active')

open_menu.onclick = () => {
    if (open_menu.getAttribute("close")) {
        open_menu.style.transform = 'rotate(0deg)'
        menu_people.style.display = 'none'

        your_friends.style.display = 'none'

        open_menu.removeAttribute('close')
        open_menu.setAttribute('active', 'active')
    } else {

        open_menu.style.transform = 'rotate(180deg)'
        menu_people.style.display = 'block'

        your_profile.onclick = () => {
            window.location.href = './account.html'
        }

        show_friend.onclick = () => {
            your_friends.style.display = 'block'
        }

        setting.onclick = () => {

        }

        log_out.onclick = () => {
            window.location.href = './registration.html'
            localStorage.clear()
        }


        open_menu.removeAttribute('active')
        open_menu.setAttribute('close', false)
    }
}
let basket = [];

let userInfoArea = document.querySelector('#user-info')
let oilInfoArea = document.querySelector('#oil-info')

fetch(`http://localhost:3000/users`).then(r => {return r.json()}).then(data => {
    console.log(data)    
})

fetch(`http://localhost:3000/oils`).then(r => {return r.json()}).then(data => {
    console.log(data)    
})



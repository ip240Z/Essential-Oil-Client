let basket = [];

let userInfoArea = document.querySelector('#user-info')
let oilInfoArea = document.querySelector('#oil-info')


fetch(`http://localhost:3000/users`).then(r => {return r.json()}).then(data => {
    let users = data  
    console.log(data);  
    let randUser = data[Math.floor(Math.random() * data.length)];
    console.log(randUser);
    let userNameP = document.createElement(`p`);
    userNameP.innerText = `${randUser.last_name}, ${randUser.first_name}`;
    userInfoArea.append(userNameP);
})

fetch(`http://localhost:3000/oils`).then(r => {return r.json()}).then(data => {
    let oils = data;
    console.log(data); 
    let randOil = data[Math.floor(Math.random() * data.length)]; 
    console.log(randOil);
    oilInfoArea.insertAdjacentHTML('afterbegin', `<p>${randOil.name}</p> \n <p>${randOil.usage_methods}</p>`)
})

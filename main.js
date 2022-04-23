const baseUrl = 'https://jsonplaceholder.typicode.com/users';



function getUsers() {
    fetch(baseUrl, {
        method: 'GET',
    }).then(res => res.json())
        .then(data => {
            const usersBlock = document.querySelector('.block');
            data.forEach(e => usersBlock.innerHTML += `
                        <div>
                            <p>${e.id}</p>
                            <p>${e.name}</p>
                            <p>${e.username}</p>
                        </div>`)

        }).catch(error => console.log(error))
}

getUsers()


const submit = document.getElementById('sub__btn')

function postUsers() {
    const obj = {
        title: document.querySelector('.input__block').value
    }

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(res => {
        console.log(res.status, res.statusText)
    })
}


submit.addEventListener('click', postUsers)

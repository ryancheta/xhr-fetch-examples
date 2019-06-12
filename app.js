let getText = document.querySelector('#getText')
let getUsers = document.querySelector('#getUsers')
let getJSON = document.querySelector('#getPosts')

getText.addEventListener('click', () => {
    fetch('sample.txt')
    .then( res => res.text())
    .then( data => {
        document.querySelector('#output').innerHTML = data
    })
    .catch( err => { console.log(err)})
})

getUsers.addEventListener('click', () => {
    fetch('users.json')
        .then( res => res.json())
        .then( users => {
            let output = `<h2>Users</h2>`
            users.forEach( user => {
                output += 
                    `
                    <ul>
                        <li>Name: ${user.name}</li>
                        <li>Id: ${user.id}</li>
                        <li>Email: ${user.email}</li>                                                                                
                    </ul>
                    `
            })
            document.querySelector('#output').innerHTML = output
        })
})

/**
 * Fetch Method
 */
// getJSON.addEventListener('click', () => {
//     let uri = 'https://jsonplaceholder.typicode.com/posts'
//     fetch(uri)
//         .then( res => res.json() )
//         .then( data => {
//             let output = `<h2>Posts</h2>`
//             data.forEach( post => {
//                 output += 
//                     `
//                     <div>
//                         <h3>${post.title}</h3>
//                         <p>${post.body}</p>
//                     </div>
//                     `
//             })
//             document.querySelector('#output').innerHTML = output
//         })
// })


/**
 * 
 * XML HTTP Request
 */
getJSON.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    let uri = 'https://jsonplaceholder.typicode.com/posts'
    xhr.open('GET', uri, true)
    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText)
            let output = ''
            users.forEach( user => {
                output += 
                `
                <div>
                    <h3>${user.title}</h3>
                    <p>${user.body}</p>
                </div>
                `
            })
            document.querySelector('#output').innerHTML = output
        }
    }
    xhr.send()
})




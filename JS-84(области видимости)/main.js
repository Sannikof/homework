// const users = {
//     kostya: {
//     age: 20,
//     weight: '58 kg',
//     height: '170 cm',
//     isAdmin: false,
//     sayHello(name) {
//         console.log(`Hello ${name}`)
//     }
//     }
// }

// console.log(users.kostya.isAdmin)
// users.kostya.sayHello('Maxim')

const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Grisha',
        age: 24,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Lera',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Nasta',
        age: 18,
        isAdmin: false
    },
    {
        name: 'Lavr',
        age: 34,
        isAdmin: true
    },
]

let usersOrdinary = 0

for(let i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
        usersOrdinary++
    }
}

console.log(`Количество обычных пользователей: ${usersOrdinary}`)


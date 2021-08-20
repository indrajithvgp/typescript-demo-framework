import {User} from './models/User'


// const user = User.buildUser({id:1})

// user.on('change',()=>{
//     console.log('changed')
// })

// user.fetch()

import {UserForm} from './views/UserForm'

const user = User.buildUser({name: 'John', age:20})

const userForm = new UserForm(document.querySelector('#root'), user)
userForm.render()

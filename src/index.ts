import {User} from './models/User'


const user = new User({id:1, name:"boss", age: 20})
user.fetch()
// user.set({name:"dboss", age:90})
// console.log(user)
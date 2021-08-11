import {User} from './models/User'


const user = new User({name:"boss", age: 20})
user.set({name:"dboss", age:90})
console.log(user)
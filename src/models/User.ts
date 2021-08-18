import { Eventing } from "./Eventing";
import {Sync} from './Sync'
import {Attributes} from './Attributes'
import { AxiosResponse } from "axios";
import { Model } from "./Model";

export interface UserProps{
    id?: number;
    name?: string;
    age?: number;
}



const rootUrl = "http://localhost:3000/users"
export class User extends Model<UserProps>{

    static buildUser(attrs: UserProps): User{
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new Sync<UserProps>(rootUrl)
        )
    }

    
}














// get on(){
    //     return this.events.on
    // }

    // get trigger(){
    //     return this.events.trigger
    // }

    // get get(){
    //     return this.attributes.get
    // }

    // set(update: UserProps):void{
    //     this.attributes.set(update)
    //     this.events.trigger('change')
    // }

    // fetch():void{
    //     const id = this.get('id')
    //     if(typeof id !== 'number'){
    //         throw new Error('Cannot fetch without an id')
    //     }

    //     this.sync.fetch(id).then((response: AxiosResponse):void=>{
    //         this.set(response.data);
    //     })
    // }

    // save():void{
    //     this.sync.save(this.attributes.getAll())
    //         .then((response: AxiosResponse):void=>{
    //             this.trigger('save')
    //         }).catch(()=>{
    //             this.trigger('error')
    //         })
    // }
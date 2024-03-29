import axios, {AxiosPromise, AxiosResponse} from 'axios';
import { UserProps } from './User';

interface HasId{
    id?: number;
}

export class Sync<T extends HasId>{

    constructor(public rootUrl:string){}
    fetch=(id: number): AxiosPromise=> {
            return axios.get(`http://localhost:3000/users/${id}`)
                
        }

    save=(data: T): AxiosPromise=>{
        const {id} = data
        if(id){
            return axios.put(`${this.rootUrl}/${id}`, data)
                // .then((response: AxiosResponse):void => {
                //     this.set(response.data)
                // })
        }else{
            return axios.post(this.rootUrl, data)
        }
    }
}
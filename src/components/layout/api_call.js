
import axios from "axios"

export  const apiFetch = (url,param)=>{
   
    return new Promise((resolve,rej) => {
       axios.post(url, param).then(res=>{
           resolve(true)
           }).then(result=>{
           rej(false)
        })
    })
 

}

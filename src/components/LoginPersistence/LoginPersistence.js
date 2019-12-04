import React,{useState} from 'react';
import Api from "../../services/Api/Api";

async function LoginPersistence(){

    let [logged,setLogged] = useState(false);

        await Api.get(`/authentication/`).then((d) => {
            setLogged(true);
        }).catch(
            setLogged(false)
        )
    return logged;
}



export default LoginPersistence;


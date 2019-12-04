import React, {useState} from 'react';
import Api from "../../services/Api/Api";
import qs from "qs";

const CreateRoute  = ({navigator}) => {

    let [route_short_name,setShortName] = useState("");
    let [route_long_name,setLongName] = useState("");


    async function createRoute(e) {
        e.preventDefault();
        let data = qs.stringify(
            {
                route_id:route_short_name,
                route_long_name:route_long_name
            });
        await Api.post("/bus/create-route",data).then((d)=>{
            if(d.data === "ok"){
                document.location.href="/";
            }
        }).catch(()=>{
            alert("Não foi possível cadastrar");
        })
    }

    return (
            <div className="container" id="main-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title">Cadastro de rota</h1>
                        <form onSubmit={createRoute}>
                            <div className="form-row">
                                <input type="text" className="form-control" onChange={e => setShortName(e.target.value)}
                                       placeholder="Digite o número da linha"/>
                            </div>
                            <div className="form-row">
                                <input type="text" className="form-control" placeholder="Digite o nome da linha"
                                       onChange={e => setLongName(e.target.value)}/>
                            </div>
                            <button className="btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default CreateRoute;

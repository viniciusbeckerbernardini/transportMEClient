import React, {useState} from 'react';
import Api from "../../services/Api/Api";
import qs from "qs";

const UpdateRoute  = () => {

    let [route_short_name,setShortName] = useState("");
    let [route_id,setRouteID] = useState("");
    let [route_long_name,setLongName] = useState("");


    async function updateRoute(e) {
        e.preventDefault();
        let data = qs.stringify(
            {
                route_old_id:route_id,
                route_id:route_short_name,
                route_long_name:route_long_name
            });
        await Api.post("/bus/update-route",data).then((d)=>{
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
                    <h1 className="title">Atualização de rota</h1>
                    <form onSubmit={updateRoute}>
                        <div className="form-row">
                            <input type="text" className="form-control" onChange={e => setRouteID(e.target.value)}
                                   placeholder="Digite o número antigo da linha"/>
                        </div>
                        <div className="form-row">
                            <input type="text" className="form-control" onChange={e => setShortName(e.target.value)}
                                   placeholder="Digite o novo número da linha"/>
                        </div>
                        <div className="form-row">
                            <input type="text" className="form-control" placeholder="Digite o novo nome da linha"
                                   onChange={e => setLongName(e.target.value)}/>
                        </div>
                        <button className="btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateRoute;

import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import AdminMenu,{username} from "../AdminMenu/AdminMenu";
import Api from "../../services/Api/Api";
import qs from 'qs';

function TopMenu() {

    let logged = false;
    let [isAdmin,setIsAdmin] = useState(false);
    let [username,setUsername] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    async function gettingData(jwt) {
        await Api.get(`/authentication/${btoa(jwt)}`).then((d) => {
            logged = true;
            setUsername(d.data.username);
            setIsAdmin(d.data.is_admin);
        })
    }

    async function handleLogin(e) {
        e.preventDefault();
        let data = qs.stringify(
            {
                email:email,
                password:password
            });
        console.log(data);
        await Api.post("/authentication",data).then((d)=>{
            console.log(d.data);

            gettingData(d.data);

        }).catch(()=>{
            alert("Login ou senha inválidos");
        })
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">TransportME</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav col-md-10">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Início</Link>
                        </li>

                    </ul>
                    {logged === false  && isAdmin === false?
                        <ul className="navbar-nav">
                        <li className="nav-item nav-icon">
                            <i className="fa fa-user fa-1x"></i>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</Link>
                            <div className="dropdown-menu">
                                <form className="px-4 py-3" onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                                               placeholder="email@example.com" onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Senha</label>
                                        <input type="password" className="form-control"
                                                placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                    :
                        <AdminMenu username={username}/>
                    }
                </div>
            </nav>
        </header>
    );
}

export default TopMenu;


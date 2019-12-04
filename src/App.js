import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import TopMenu from "./components/TopMenu/TopMenu";
import Query from "./components/Query/Query";
import Details from "./components/Query/Details";
import Main from "./components/Main/Main";
import CreateRoute from "./components/Routes/CreateRoute";
import UpdateRoute from "./components/Routes/UpdateRoute";
import LoginPersistence from "./components/LoginPersistence/LoginPersistence";
import Api from "./services/Api/Api";
function App() {

    let [logged,setLogged] = useState(false);
    let [isAdmin,setIsAdmin] = useState(false);
    let [username,setUsername] = useState("");

    async function verifyLogin() {
        await Api.get(`/authentication/`).then((d) => {
            setLogged(true);
            setUsername(d.data.username);
            setIsAdmin(d.data.is_admin);
        }).catch(
            setLogged(false)
        )
    }

        return (
            logged === false ?
            <div>
                <TopMenu loggedBySession={false}/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Query}/>
                        <Route path="/details/:id" exact component={Details}/>
                        <Route path="/dashboard" exact component={Main}/>
                        <Route path="/create-route" exact component={CreateRoute}/>
                        <Route path="/update-route" exact component={UpdateRoute}/>s
                    </Switch>
                </main>
            </div>

    :

            <div>
                <TopMenu loggedBySession={true} IsAdminBySession={isAdmin} userNameBySession={username}/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Query}/>
                        <Route path="/details/:id" exact component={Details}/>
                        <Route path="/dashboard" exact component={Main}/>
                        <Route path="/create-route" exact component={CreateRoute}/>
                        <Route path="/update-route" exact component={UpdateRoute}/>
                    </Switch>
                </main>
            </div>
        );
    }

export default App;

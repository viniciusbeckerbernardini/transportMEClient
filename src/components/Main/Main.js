import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Api from "../../services/Api/Api";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            busRoutes : []
        }
    }

    async componentDidMount() {

        const {id} = this.props.match.params;

        await Api.get(`/bus/get/${id}`).then((bus)=>{
            this.setState({busRoutes:bus.data});
        }).catch(() => alert('Não foi possível carregar os dados'))
    }


    render() {
        return (
            <div className="container" id="main-container">
                <div className="row">
                    <div className="col-12">
                        <h2>Paradas</h2>
                        <div className="list-group">
                            <Link  to={`/create-route`} className="list-group-item list-group-item-action">
                                Criar rota
                            </Link>
                            <Link  to={`/update-route`} className="list-group-item list-group-item-action">
                                Atualizar rota
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Api from "../../services/Api/Api";

class Details extends Component{
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
                        <Link to="/" className="form-control">
                            <i className="fa fa-1x fa-arrow-left"></i>   Voltar
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2>Paradas</h2>
                        <div className="list-group">
                            {
                                this.state.busRoutes.length === 0? "Carregando dados": this.state.busRoutes.map((item, key)=>{
                                    return(
                                        <span key={key} className="list-group-item list-group-item-action">
                                            {item.stops}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;

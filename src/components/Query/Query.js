import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Api from "../../services/Api/Api";
import FilterElements from "../../include/FilterElements";

class Query extends Component{
    constructor(props) {
        super(props);
        this.state = {
            busRoutes : []
        }
    }

    async componentDidMount() {
            await Api.get('/bus/get/all').then((bus)=>{
                this.setState({busRoutes:bus.data});
            }).catch(() => alert('Não foi possível carregar os dados'))
    }

    render() {
        return (
             <div className="container" id="main-container">
                    <div className="row">
                        <div className="col-11">
                            <input className="form-control form-control-lg"  type="text" placeholder="digite a linha de ônibus"/>

                        </div>
                        <div className="col">
                            <button className="form-control" onClick={FilterElements}><i className="fa fa-1_5x fa-search"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="list-group">
                                {
                                    this.state.busRoutes.length === 0? "Carregando dados": this.state.busRoutes.map((item, key)=>{
                                        return(
                                            <Link  to={`/details/${item.route_id}`} key={key} id={item.route_id} className="list-group-item list-group-item-action">
                                                {item.route}
                                            </Link>
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

export default Query;

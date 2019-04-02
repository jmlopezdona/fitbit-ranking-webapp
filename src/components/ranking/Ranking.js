import React, {Component} from "react";
import { connect } from "react-redux";
import './Ranking.css';
import RankingList from './RankingList';
import { getUser } from '../../actions/index';

function Welcome(props) {
    if (props.login.authenticated) {
        return (
            <div className="ranking-list">
                <div className="ranking-list-wrapper">
                    <div className="logo-icon-container">
                        <span className="logo-client-icon"></span>
                    </div>
                    <div className="ranking-list-title">
                        <h1 className="mdc-typography--headline3">Ranking</h1>
                        <h2 className="mdc-typography--headline4">¡Enhorabuena {props.login.user.displayName}!</h2>
                    </div>
                    <div className="ranking-list-container"> 
                        <h3>Tienes el puesto <span>{props.position}</span> esta semana</h3>
                        <RankingList position={props.position}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="ranking-list">
                <div className="ranking-list-wrapper">
                    <span className="logo-icon-container">
                        <span className="logo-client-icon"></span>
                    </span>
                    <div className="ranking-list-title">
                        <h1 className="mdc-typography--headline3">Ranking</h1>
                    </div>
                    <div className="ranking-list-container"> 
                        <h3><a href="/login" style={{color: "#ff7f06"}}>¡Accede para unirte!</a></h3>
                        <RankingList position={props.position}/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Ranking extends Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
        if (!this.props.login.user.authenticated) {
            this.props.getUser();
        }
    }

    render() {
        return (
            <Welcome position={this.props.position} login={this.props.login} />
        );
    }
}

function mapStateToProps(state) {
    return { 
        position: state.position,
        login: state.login 
    };
};
  
export default connect(mapStateToProps, { getUser })(Ranking);
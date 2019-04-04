import React, {Component} from "react";
import { connect } from "react-redux";
import './Ranking.css';
import RankingList from './RankingList';
import { getUser } from '../../../actions/index';

function Greeting(props) {
    if (props.position == 1) {
        return <h2 className="mdc-typography--headline4">¡Enhorabuena {props.name}!</h2>
    } else {
        return <h2 className="mdc-typography--headline4">¡Hola {props.name}!</h2>
    }
}

function Welcome(props) {
    if (props.authenticated) {
        return (
            <div className="ranking-list">
                <div className="ranking-list-wrapper">
                    <div className="logo-icon-container">
                        <span className="logo-client-icon"></span>
                    </div>
                    <div className="ranking-list-title">
                        <h1 className="mdc-typography--headline3">Ranking</h1>
                        <Greeting position={props.position} name={props.user.displayName}/>
                    </div>
                    <div className="ranking-list-container"> 
                        <h3>Tu departamento va el <span>{props.position}</span> esta semana</h3>
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
        if (!this.props.authenticated) {
            this.props.getUser();
        }
    }

    render() {
        return (
            <Welcome authenticated={this.props.authenticated} position={this.props.position} user={this.props.user} />
        );
    }
}

function mapStateToProps(state) {
    return { 
        position: state.positionDepartamentRanking,
        authenticated: state.authenticated,
        user: state.user 
    };
};
  
export default connect(mapStateToProps, { getUser })(Ranking);
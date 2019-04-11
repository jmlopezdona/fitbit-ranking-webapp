import React, {Component} from "react";
import { connect } from "react-redux";
import './Ranking.css';
import RankingList from './RankingList';
import { getUser } from '../../../../actions/index';

export class Ranking extends Component {
    constructor() {
      super();
    }

    render() {
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
                        <h3><a href="/" style={{color: "#ff7f06"}}>Volver</a></h3>
                        <RankingList position={this.props.position} name={this.props.match.params.name}/>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default connect(null, { getUser })(Ranking);
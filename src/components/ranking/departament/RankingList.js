import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { getDepartamentRanking as getRanking} from "../../../actions/index";
import numeral from "numeral";

function Trend(props) {
    const trend = props.trend;
    if (trend === ">") {
        return <span className="mdc-list-item__meta material-icons trending_up" aria-hidden="true">trending_up</span>
    } 
    else if (trend === "<") {
        return <span className="mdc-list-item__meta material-icons trending_down" aria-hidden="true">trending_down</span>
    }
    else {
        return <span className="mdc-list-item__meta material-icons trending_flat" aria-hidden="true">trending_flat</span>
    }
 }

 function Number(props) {
     if (props.listPosition === props.position) {
        return <span className="mdc-list-item__graphic" style={{color: '#ff7f06'}}>{props.listPosition}</span>
     } else {
        return <span className="mdc-list-item__graphic">{props.listPosition}</span>
     }
 }

 function Row(props) {
    if (props.authenticated && (props.el.name === props.user.departament)) {
        return (
            <div key={props.el.position} onClick={() => {props.history.push('/users/departament/' + props.el.name);}}>
                <li className="mdc-list-item mdc-ripple-upgraded">
                    <Number position={props.position} listPosition={props.el.position}/>
                    <span className="mdc-list-item__text">
                        <span className="mdc-list-item__text">{props.el.name}</span>
                    </span>
                    <span className="mdc-list-item__text">
                        <span className="mdc-list-item__text">&nbsp;&nbsp;({numeral(props.el.currentSteps).format('0,0')} / {numeral(props.el.previusSteps).format('0,0')})</span>
                    </span>
                    <Trend trend={props.el.trend}/>
                </li>
                <li className="mdc-list-divider" role="separator"></li>
            </div>
        );
    } else {
        return (
            <div key={props.el.position}>
                <li className="mdc-list-item mdc-ripple-upgraded">
                    <Number position={props.position} listPosition={props.el.position}/>
                    <span className="mdc-list-item__text">
                        <span className="mdc-list-item__text">{props.el.name}</span>
                    </span>
                    <span className="mdc-list-item__text">
                        <span className="mdc-list-item__text">&nbsp;&nbsp;({numeral(props.el.currentSteps).format('0,0')} / {numeral(props.el.previusSteps).format('0,0')})</span>
                    </span>
                    <Trend trend={props.el.trend}/>
                </li>
                <li className="mdc-list-divider" role="separator"></li>
            </div>
        );
    }
 }

export class List extends Component {
    constructor() {
      super();
    }

    componentDidMount() {
        this.props.getRanking();
    }

    render() {
        return (
            <ul className="mdc-list mdc-list--avatar-list">
            {this.props.ranking.map(el => (
                <Row 
                    authenticated = {this.props.authenticated}
                    user = {this.props.user}
                    el = {el}
                    position = {this.props.position}
                    history = {this.props.history}
                 />
            ))}
            </ul>
        )
    };
}

function mapStateToProps(state) {
    return { 
        ranking: state.departamentRanking,
        authenticated: state.authenticated,
        user: state.user
    };
};

export default withRouter(connect(mapStateToProps, { getRanking })(List));
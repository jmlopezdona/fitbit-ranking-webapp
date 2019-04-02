import React, { Component } from "react";
import { connect } from "react-redux";
import { getRanking } from "../../actions/index";
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
                <div key={el.position}>
                    <li className="mdc-list-item mdc-ripple-upgraded">
                        <Number position={this.props.position} listPosition={el.position}/>
                        <span className="mdc-list-item__text">
                            <span className="mdc-list-item__text">{el.name}</span>
                        </span>
                        <span className="mdc-list-item__text">
                            <span className="mdc-list-item__text">&nbsp;&nbsp;({numeral(el.currentSteps).format('0,0')} / {numeral(el.previusSteps).format('0,0')})</span>
                        </span>
                        <Trend trend={el.trend}/>
                    </li>
                    <li className="mdc-list-divider" role="separator"></li>
                </div>
                ))}
            </ul>
        )
    };
}

function mapStateToProps(state) {
    return { ranking: state.ranking };
};

export default connect(mapStateToProps, { getRanking })(List);
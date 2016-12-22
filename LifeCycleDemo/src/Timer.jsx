/**
 * Created on 21/12/2016.
 */

import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }


    render() {

        return (
            <div style={{ border: "solid 2px blue"}}>
                <h2 style={{color: "blue"}}>我是子组件</h2>
                <h3>父组件props: {this.props.timeShot.toLocaleTimeString()}</h3>
                <h3>父组件props: {this.props.time.toLocaleTimeString()}</h3>
                <h3>子组件state: {this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}
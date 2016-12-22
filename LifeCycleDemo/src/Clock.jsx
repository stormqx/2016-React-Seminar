/**
 * Created on 21/12/2016.
 */

import React from 'react';
import Timer from './Timer';


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.handleTime = this.handleTime.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            timeShot : new Date(),
            time: new Date()

        }
    }
    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }
    handleTime() {
        this.setState({
            timeShot: new Date()
        });
    }


    render() {
        return (
            <div className="clock"
                 style={{
                     border: "solid 2px red",
                     width: "400px"
                 }}>
                <h1 style={{color: "red"}}>我是父组件</h1>
                <button onClick={this.handleTime}><h2>向子组件传时间</h2></button>
                <hr></hr>
                <Timer timeShot={this.state.timeShot} time={this.state.time}/>
            </div>
        );
    }
}
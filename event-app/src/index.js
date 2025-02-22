import React from 'react';
import axios from 'axios';
import update from 'immutability-helper'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const token = "USER_FIXED_TOKEN";
axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.headers =  {
    Authorization: `Bearer ` + token
}
class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            myEvents: [],
            user: null
        }
    }

    getUsers() {
        axios.get('/users')
            .then(response => {
                this.setState({user: response.data["results"]})
                console.log(response.data["results"])
            })
            .catch(error => console.log(error));
        console.log("getEvents");
    }

    getEvents() {
        axios.get('/events')
            .then(response => {
                this.setState({events: response.data["results"]})
                console.log(response.data["results"])
            })
            .catch(error => console.log(error));
        console.log("getEvents");
    }

    getMyEvents() {
        axios.get('/participants')
            .then(response => {
                this.setState({myEvents: response.data["results"]})
                console.log(response.data["results"])
            })
            .catch(error => console.log(error));
        console.log("getMyEvents");
    }


    joinEvent = (e) => {
        axios.post('/events/' + e.id + '/participants')
            .then(response => {
                const myEvents = update(this.state.myEvents, {
                    $splice: [[0, 0, response.data["results"]]]
                })
                this.setState({
                    myEvents: myEvents,
                })
                console.log(response.data["results"])
            })
            .catch(error => console.log(error));
        console.log("joinEvent");
    }

    unJoinEvent = (event) => {
        axios.delete('/events/' + event.id + '/participants')
            .then(response => {
                const eventIndex = this.state.myEvents.findIndex(x => x.event_id === event.id)
                const myEvents = update(this.state.myEvents, {
                    $splice: [[eventIndex, 1]]
                })
                this.setState({
                    myEvents: myEvents,
                })
            })
            .catch(error => console.log(error));

        console.log("unJoinEvent");
    }

    componentDidMount() {
        this.getUsers();
        this.getEvents();
        this.getMyEvents();
    }

    render() {
        const user = this.state.user;
        let name;
        if (user != null) {
            name = user.email;
        } else {
            name = "";
        }
        return (
            <div>
                <div className="inputContainer">
                    <p>{name}</p>
                </div>
                <div className="listWrapper">
                    <ul className="taskList">
                        {this.state.events.map((event) => {
                            return(
                                <li className="task" key={event.id}>
                                    <label className="taskLabel">{event.name} </label>
                                    <button type="button" hidden={inArray(this.state.myEvents, event.id)} onClick={(e) => this.joinEvent(event)}>Join</button>
                                    <button type="button" hidden={!inArray(this.state.myEvents, event.id)} onClick={(e) => this.unJoinEvent(event)}>UnJoin</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Event />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function inArray(myEvents, event_id) {
    let i;
    for (i = 0; i < myEvents.length; i++) {
        if (myEvents[i].event_id === event_id) {
            return true;
        }
    }
    return false;
}

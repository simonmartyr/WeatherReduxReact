import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../Actions/index';

export class searchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};

        //overwrite the function to bind the context - nice to do in the contructor
        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault(); 

        this.props.fetchWeather(this.state.term); 
        //time to fetch weather data. with the state. 
        this.setState({term:""});
    }

    render(){
        return(
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
            placeholder="Get a five-day forecast in your favourite cites"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">search</button>
            </span>
        </form>
        );

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(searchBar);
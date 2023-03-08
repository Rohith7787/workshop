import React, { Component } from 'react';
import axios from 'axios';
import './form.css';

class PlayerStatsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: '',
      playerAge: '',
      avgStrikeRate: '',
      totalRuns: '',
      totalWickets: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlayerIdChange = (event) => {
    this.setState({ playerId: event.target.value });
  }

  handlePlayerAgeChange = (event) => {
    this.setState({ playerAge: event.target.value });
  }

  handleAvgStrikeRateChange = (event) => {
    this.setState({ avgStrikeRate: event.target.value });
  }

  handleTotalRunsChange = (event) => {
    this.setState({ totalRuns: event.target.value });
  }

  handleTotalWicketsChange = (event) => {
    this.setState({ totalWickets: event.target.value });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const playerStatsData = {
      player_id: this.state.playerId,
      player_age: this.state.playerAge,
      avg_strikerate: this.state.avgStrikeRate,
      total_runs: this.state.totalRuns,
      totalwickets: this.state.totalWickets,
    };
    console.log(playerStatsData)
    axios.post('http://localhost:8080/save', playerStatsData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>IPL stats</h2>
        <input
          placeholder='Player ID'
          type="text"
          name="playerId"
          value={this.state.playerId}
          onChange={this.handleChange}
        />
        <input
          placeholder='Player Age'
          type="text"
          name="playerAge"
          value={this.state.playerAge}
          onChange={this.handleChange}
        />
        <input
          placeholder='Average Strike Rate'
          type="text"
          name="avgStrikeRate"
          value={this.state.avgStrikeRate}
          onChange={this.handleChange}
        />
        <input
          placeholder='Total Runs'
          type="text"
          name="totalRuns"
          value={this.state.totalRuns}
          onChange={this.handleChange}
        />
        <input
          placeholder='Total Wickets'
          type="text"
          name="totalWickets"
          value={this.state.totalWickets}
          onChange={this.handleChange}
        />
       
        <button>Submit</button>
      </form>
    );
  }
}

export default PlayerStatsForm;

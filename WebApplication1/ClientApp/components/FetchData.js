import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
 
const renderForecastsTable = (forecasts) => {
    return (
        <table className='table'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            {forecasts.map(forecast =>
                <tr key={forecast.dateFormatted}>
                    <td>{forecast.dateFormatted}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            )}
        </tbody>
    </table>);
}

export default class FetchData extends Component {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };

        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ forecasts: data, loading: false });
            });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : renderForecastsTable(this.state.forecasts);
        return( <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>);
    }
}
 

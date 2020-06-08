import React from 'react'
import {Component} from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: ''
    }


    async componentDidMount() {

        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        // console.log();
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        //fetch the data
        // console.log(fetchedData)
        this.setState({data: fetchedData, country: country})
        // console.log(country)
        //set the state

    }

    render() {

        const {data, country} = this.state;
        // const {country} = this.state;
        return (
            <div className={styles.container}>
                <img className = {styles.image} src={coronaImage} alt="covid19"/>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App
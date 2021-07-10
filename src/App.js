import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import image from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
        console.log(this.state);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country })
        console.log(this.state);
    }

    render () {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img src={image} alt="COVID-19" className={styles.image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart country={country} data={data} />
            </div>
        );
    }
}
    

export default App;

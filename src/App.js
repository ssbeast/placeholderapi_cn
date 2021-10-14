import React from "react";
import './App.css';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                <h1> Fetching data from placeholder API</h1>  {
                    items.map((item) => (
                        <div key={item.id} className="main">
                            <h3>{item.title}</h3>
                            <img src={item.url} alt="img" id="img"></img>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default App;
import { Component } from "react";
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <img src="https://i.ibb.co/jTZKGDJ/online-shopping-store.png" alt="online-store" className="home-img"/>
                <h1 className="home-heading">Home</h1>
            </div>
        )
    }
}
export default Home
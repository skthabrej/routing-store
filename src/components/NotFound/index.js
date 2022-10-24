import { Component } from "react";
import './index.css'

class NotFound extends Component {
    render() {
        return (
            <div className="home-container">
                <img src="https://i.ibb.co/wLmTy3D/page-not-found.png" alt="404-img" className="home-img"/>
                <h1 className="home-heading">Sorry</h1>
            </div>
        )
    }
}
export default NotFound
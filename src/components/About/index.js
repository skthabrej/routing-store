import { Component } from "react";
import './index.css'

class About extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-heading">About</h1>
                <p className="paragraph">
                storm is the platform developers love for building highly-performant and dynamic websites, e-commerce stores and web applications.
                By uniting an extensive ecosystem of technologies, services and APIs into one workflow, storm unlocks new levels of team productivity, while saving time and money.
                Our bet on Jamstack is quickly coming true. The web is rapidly changing away from monolithic to decoupled apps, and web developers are storming ahead with more power than ever. storm is built to cater to that movement, and in just a few years we’ve on-boarded millions of developers and businesses, and are building and serving millions of web projects daily around the globe.
                Fun fact: An estimated 16% of the internet population visits a website or web app on storm each month.
                </p>
                <p className="paragraph">
                storm is a diverse group of incredible talent from all over the world. We’re ~44% woman or non-binary, and have about half as many nationalities as we are team members!

                At storm, we have a distributed culture rather than just being "remote-friendly." Simply put, we strive to be a workplace where you can work from home and have an equal opportunity to influence decisions and culture across the organization. We tackle complex problems, in a remote-first environment while caring deeply about what we do and having fun.
                </p>
            </div>
        )
    }
}
export default About
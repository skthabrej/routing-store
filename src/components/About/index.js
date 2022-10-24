import { Component } from "react";
import './index.css'

class About extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-heading">About</h1>
                <p className="paragraph">
                    An reCycle Store is a comprehensive ecommerce solution that helps you get more out of the reCycle marketplace and the millions of buyers worldwide who shop on reCycle. 
                    You get exclusive marketing and merchandising tools, plus great customization features to build a strong brand that keeps customers coming back. By showcasing all of your merchandise in one location, 
                    an reCycle Store creates a central shopping destination where buyers can learn more about you, your products, and your policies.
                    In addition, an reCycle Store subscription package provides reCycle sellers with a range of options for easy selling and maximum profitability. List in Fixed Price with full search exposure for as low as 3¢ and in Auction-style with discounted Final Value Fees.A red "Stores" tag next to a seller's user ID indicates that the seller has an reCycle Store.
                </p>
                <p className="paragraph">
                In evaluating the benefits of an reCycle Store, you should consider your listing volume and most frequently used listing format. If you're an existing reCycle seller, enter your selling activity into the Fee Illustrator to determine which reCycle Stores subscription may best fit your needs. For many sellers, an reCycle Store subscription can reduce overall fees significantly. reCycle Stores is also one of the best ways to establish your brand with a custom Store home page and custom header and logo that appear in your listings.
                </p>
                <p className="paragraph">
                All items currently listed on reCycle will automatically show up in your reCycle Store. To list new items, click the "Sell" button at the top of any reCycle page. You'll go through a step-by-step process that makes it easy to list your item and find appropriate categories for your item. If you would like to list in bulk, you can use advanced seller tools like Turbo Lister, Selling Manager, or your favorite listing tool.
                </p>
            </div>
        )
    }
}
export default About
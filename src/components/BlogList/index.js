import './index.css'
import {Component} from 'react'
import {Audio} from 'react-loader-spinner'
import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'

class BlogList extends Component {
    state = {blogdata: [], isLoading: true}

    componentDidMount () {
        this.getBlogData()
    }

    getBlogData = async() => {
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        const updatedData = data.map(eachItem => ({
            id:eachItem.id,
            title:eachItem.title,
            imageUrl:eachItem.image_url,
            avatarUrl:eachItem.avatar_url,
            author:eachItem.author,
            topic:eachItem.topic,
        }))
        this.setState({blogdata:updatedData,isLoading:false})
    }

    render() {
        const {blogdata,isLoading} = this.state
        return (
            <div className='user-data-container'>
                <UserInfo/>
                <div className='user'>
                    {isLoading ? 
                    (<Audio type="Circles" color="#00BFFF" height={100} width={100} />)
                    : 
                    (blogdata.map(eachBlog => (<BlogItem blog={eachBlog} key={eachBlog.id} />))
                    )}
                </div>
            </div>
        )
    }
}
export default BlogList
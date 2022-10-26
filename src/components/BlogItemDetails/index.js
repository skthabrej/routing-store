import {Audio} from "react-loader-spinner";
import './index.css'
import { useParams } from "react-router-dom"
import { useState,useEffect} from "react";

const BlogItemDetails = props => {
    const [blogData, setBlogData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getBlogItemData()
    },[])

    let params = useParams()
    const {id} = params

    const getBlogItemData = async() => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
          title: data.title,
          imageUrl: data.image_url,
          content: data.content,
          avatarUrl: data.avatar_url,
          author: data.author,
      }
      setBlogData(updatedData)
      setIsLoading(false)
    }

    const renderBlogItemDetails = () => {
      const {title, imageUrl, content, avatarUrl, author} = blogData
      return (
        <div className="blog-info">
          <h2 className="blog-details-title">{title}</h2>
          <div className="author-details">
            <img className="author-pic" src={avatarUrl} alt={author} />
            <p className="details-author-name">{author}</p>
          </div>
          <img className="blog-image" src={imageUrl} alt={title} />
          <p className="blog-content">{content}</p>
        </div>
      )
    }
  
      
    return (
      <div className="blog-container">
        {isLoading ? (
          <Audio type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          renderBlogItemDetails()
        )}
      </div>
    )
  }
export default BlogItemDetails
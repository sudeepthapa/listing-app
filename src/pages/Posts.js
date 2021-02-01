import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Card, Spinner, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';

const BASE_URL = "https://jsonplaceholder.typicode.com"

const Posts = (props) => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Component did mount
    setIsLoading(true)
    axios.get(`${BASE_URL}/posts`).then(res => {
      setPosts(res.data)
      setIsLoading(false)
    }).catch(error => {
      setIsLoading(false)
    })
    // Component will unmount
    return () => {
      
    }
  },[])

  if(isLoading) return <Spinner type="grow" color="primary" />
  return <div className="container">
    {
      posts.map(post => {
        return (
          <Card key={post.id} className="mt-3">
            <CardBody>
              <CardTitle tag="h5"> { post.title } </CardTitle>
              <CardText> { post.body } </CardText>
            </CardBody>
            <CardFooter>
              <CardSubtitle> Created By : {post.userId} </CardSubtitle>
            </CardFooter>
          </Card>
        )
      })
    }
  </div>
  
}

export default Posts;
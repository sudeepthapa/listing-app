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
      const promises = [];
        
      res.data.forEach(item => {
        promises.push(axios.get(`${BASE_URL}/users/${item.userId}`))
      })

      Promise.all(promises).then(result => {
        const actualPostData = [];
        
        const userList = result.map(el => {
          return el.data
        })
        
        res.data.forEach(item => {
          const postUser = userList.find(user => user.id == item.userId)
          actualPostData.push({ ...item, user:postUser})
        });

        setPosts(actualPostData)
        setIsLoading(false)
      })

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
              <CardSubtitle> Created By : {post.user.name} </CardSubtitle>
            </CardFooter>
          </Card>
        )
      })
    }
  </div>
  
}

export default Posts;
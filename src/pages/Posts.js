import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

class Posts extends React.Component{

  state = {
    posts: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
    ]
  }

  render() {
    return <div className="container">
      {
        this.state.posts.map(post => {
          return (
            <Card className="mt-3">
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
}

export default Posts;
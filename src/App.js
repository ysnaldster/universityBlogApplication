import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { articlesLoad } from './actions/articlesAction'

function App() {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles)
  console.log(articles);
  useEffect(() => {
    dispatch(articlesLoad());
  }, [dispatch])

  return (
    <div className="App">
      <h1>University Blog</h1>
      {/* {
        articles !== undefined && articles.map(article => {
          return (
            <div>
              <Card style={{ width: '18rem' }} key={article.id}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    {article.content}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          )
        })
      } */}
    </div>
  );
}

export default App;

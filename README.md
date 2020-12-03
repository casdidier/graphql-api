# graphql-api

## Getting started
`yarn start

# operations
<!-- create a new article -->
mutation {
  createArticle(article:{title: "titre", body: "body text"}) {
    title,
    body,
    createdAt
  }
}

<!-- find all articles -->
{
  articles {
    title,
    body,
    createdAt
  }
}




## ressources

https://www.ibrahima-ndaw.com/blog/graphql-api-express-mongodb/
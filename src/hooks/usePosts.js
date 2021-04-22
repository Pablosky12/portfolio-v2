import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allDevArticles(limit: 10) {
        edges {
          node {
            article {
              id
              url
              title
              social_image
            }
          }
        }
      }
    }
  `);

  return data.allDevArticles.edges.map((x) => {
      const article = x.node.article;
      console.log(article);
    return {
        id: article.id,
        image: article.social_image,
        name: article.title,
        url: article.url,
    }
  });
};

export default usePosts;

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = 'https://api-ap-south-1.hygraph.com/v2/clg84wchd1ocp01uidv5v2hcu/master'
const graphqlCMSToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODA5Njc5MzEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZzg0d2NoZDFvY3AwMXVpZHY1djJoY3UvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjBjZDk4OTYwLWM1MGEtNGRlMi1iOWI1LTQ1N2MyNzY0MjE1NiIsImp0aSI6ImNrYTVqMmVvYjAzdGMwMXdoMGRmZDY3cnkifQ.VSycFauwTi7PFx_3h1LhvjgN8EbypY-VmXON9Sd8XPmD5Gu2XffyPMpaPTNckxCuwU4Eaaoo7ykDQx4N-mXD9SgHcwNVSfLmbIgKxnYXaEd-HuCgN4vdfymfs4ehsI8vnfcKVZUpeezGYm81WU-JVg1scCIWhax3Aib3kMd2bYVszv2-pYf5fJwykJfXb3j3-15cZiXk_Zr9nxjQQomYiBHPp4Xj4ck6z98j9xYVDjPkhuI2EuPT6j2wJ3iJMJ3rioVpaV0Asozvjh_2FGDIn1Lxmdhoew59xBIlk7ok-4l1PbxOTsir0OuTAsOrpgYa7Zn9wDnSXDdnh2X2W4YAUCZs7P1xVauRFApnAJzSmbjIsjLMCj9vN4tSErvujEzx3wm9bTPJ2jLpSHQlliXCktLjmh4XUflnoJueMKamZ0VrvZ5d34vF_5-MXTyclbsvTN5fE1mXoiamkmGxGBYiTtMP_Y76J2BUXnBCNlwD0JTRBNdoh2A9U7rK2dgvIOFX9CQzO072-rqgimhoscioa01HUHnzp-AT5xgnZAIAA6GCYdgk7tZFD5TGgqEeIvAE0GaKymQCVQS75ayqFLu18ys6Z1lPmBeWeh3KI_PzEnbzcLoL7ZqRukLrTSFwSUWKy5EnHLwM7ielQl96jznRE89mMO2Me3ZyuIM846ixwCU'

export const createComment = async (name, email, comment, slug) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphqlCMSToken}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name,
    email,
    comment,
    slug,
  });

  return result;
};

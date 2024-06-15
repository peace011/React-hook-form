import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION=gql`

mutation Mutation($loginInput: LoginInput!) {
    loginUser(loginInput: $loginInput) {
      accessToken
      message
      refreshToken
      user {
        id
        userName
      }
    }
  }
`;
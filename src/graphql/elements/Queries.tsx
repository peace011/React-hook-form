import { gql } from "@apollo/client";

export const LOAD_USERS=gql`
query Query($pageNumber: Int, $rowPerPage: Int, $search: String) {
    searchAllUser(pageNumber: $pageNumber, rowPerPage: $rowPerPage, search: $search) {
      data {
        id
        phoneNumber
        userName
      }
      totalCount
    }
  }
  `;
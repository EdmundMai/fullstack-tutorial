const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar FileUpload

  type MeResponse {
    employee: Employee!
    company: Company!
  }

  type Query {
    me: MeResponse
  }

  type Mutation {
    updateProfile(formData: FileUpload!): Employee
  }

  type CompanySettings {
    sso: Boolean!
  }

  type EmployeeSettings {
    country: String!
  }

  type Company {
    id: ID!
    settings: CompanySettings!
  }

  type Employee {
    id: ID!
    avatar_url: String!
    first_name: String!
    last_name: String!
    personal_email: String!
    settings: EmployeeSettings!
  }
`;

module.exports = typeDefs;

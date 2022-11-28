const { paginateResults } = require("./utils");

module.exports = {
  Query: {
    me: async (_, __, { dataSources }) => {
      // return dataSources.employeeAPI.findOrCreateEmployee();
      return {
        employee: {
          id: "ABC123",
          avatar_url: "https://placekitten.com/200/300",
          first_name: "Edmund",
          last_name: "Mai",
          personal_email: "edmund@joinforma.com",
          settings: {
            country: "USA",
          },
        },
        company: {
          id: "CDE234",
          settings: {
            sso: false,
          },
        },
      };
    },
  },
  Mutation: {
    updateProfile: async (_, __, { dataSources }) => {
      // return dataSources.employeeAPI.findOrCreateEmployee();
      return {
        id: "ABC123",
        avatar_url: "https://placekitten.com/200/300",
        first_name: "Edmund",
        last_name: "Mai",
        personal_email: "edmund@joinforma.com",
        settings: {
          country: "USA",
        },
      };
    },
  },
};

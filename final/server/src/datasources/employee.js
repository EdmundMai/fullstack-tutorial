const { DataSource } = require("apollo-datasource");

class EmployeeAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findOrCreateEmployee() {
    const employees = await this.store.employee.findOrCreate({
      where: {
        avatar_url: "http://placekitten.com/200/300",
        first_name: "Edmund",
        last_name: "Edmund",
        personal_email: "edmund@joinforma.com",
      },
    });
    return employees && employees[0] ? employees[0] : null;
  }
}

module.exports = EmployeeAPI;

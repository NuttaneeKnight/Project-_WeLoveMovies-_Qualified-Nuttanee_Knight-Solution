// return knex("theaters").insert([
//   {
//     name: "Regal City Center",
//     address_line_1: "801 C St.",
//     address_line_2: "",
//     city: "Vancouver",
//     state: "WA",
//     zip: "98660",
//   },
exports.up = function(knex) {
  return knex.schema.createTable("theaters", (table) => {
    table.increments("theater_id").primary();
    table.string("name");
    table.string("address_line_1");
    table.string("address_line_2");
    table.string("city")
    table.string("state");
    table.string("zip")
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("theaters")
};

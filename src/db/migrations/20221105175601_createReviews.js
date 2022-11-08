
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments('review_id').primary();
    table.text("content");
    table.integer("score")
    //unsigned is only for non negative integer
    //signed is for both negative and non negative.
    //we have to make sure that it has the value and it cannot be a negative value
    table.integer("critic_id").unsigned().notNullable();
    table
      .foreign("critic_id")
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE")
    table.integer("movie_id").unsigned().notNullable();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE")
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews")
};

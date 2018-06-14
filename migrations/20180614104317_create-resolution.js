
exports.up = function(knex, Promise) {
  return knex.schema.createTeable('resolution', (table) => {
      table.increments()
  })
};

exports.down = function(knex, Promise) {
  
};

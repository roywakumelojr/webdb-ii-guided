
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    // see knex docs on renaming columns
    // changing 'fancyId' name to 'id'
  })
};

exports.down = function(knex) {
  // change from 'id' back to 'fancyId'
};

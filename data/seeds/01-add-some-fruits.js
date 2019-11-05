
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'pear', avgweightoz: 1.5, delicious: 1 },
        { name: 'mandarine', avgweightoz: 1.5, delicious: 1 },
        { name: 'pineapple', avgweightoz: 1.5 }
      ]);
    });
};

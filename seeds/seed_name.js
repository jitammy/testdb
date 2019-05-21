exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('famous_people').del()
    .then(function () {
      // Inserts seed entries
      return knex('famous_people').insert([
        {id: 1, first_name: 'Ryan', last_name: 'Reynolds', birthdate: '1976-10-23'},
        {id: 2, first_name: 'Ellen', last_name: 'Page', birthdate: '1987-02-21'},
        {id: 3, first_name: 'Sandra', last_name: 'Oh ', birthdate: '1971-07-20'},
        {id: 4, first_name: 'Ryan', last_name: 'Gosling', birthdate: '1980-11-20'}
      ]);
    });
};

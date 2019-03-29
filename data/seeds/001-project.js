exports.seed = function(knex, Promise) {
    // Delete existing
    return knex('project')
      .del()
      .then(function() {
        // Inserts seeds
        return knex('project').insert([
          {
            id: 1,
            name: 'Walk dog',
            description: '30 minutes with Lars.',
            completed: false
          },
          {
            id: 2,
            name: 'Pack',
            description:
              'Vegas is gonna be 80 degrees.',
            completed: false
          }
        ]);
      });
  };
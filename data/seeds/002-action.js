exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('action')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('action').insert([
          {
            id: 1,
            description: '30 minute loop with Lars the doggo.',
            notes:
              "Let him sniff all the things and bark at all the bikes.",
            completed: false, 
            fk: 1
          },
          { id: 2, 
            description: 'Get suitcase out of closet', 
            completed: false, fk: 2 },
          {
            id: 3,
            description: 'Let cats sit in suitcase and pout about me leaving.',
            completed: false,
            fk: 2
          },
          { id: 4, description: 'Put clothes on cats until cats move.', 
            completed: false, 
            fk: 2 },
          {
            id: 5,
            description: 'Throw suitcase in the car.',
            completed: false,
            fk: 2
          },
          {
            id: 6,
            description: 'Worry that I did not pack something.',
            completed: false,
            fk: 2
          },
          {
            id: 7,
            description: 'Do not bother getting up to check if I forgot something.',
            completed: false,
            fk: 2
          },
          { 
            id: 8, 
            description: 'Forget something', 
            completed: false, fk: 2 },
          { 
            id: 9, 
            description: 'Buy forgotten thing for 10x the price when I get to destination.', 
            completed: false, 
            fk: 2 }
        ]);
      });
  };
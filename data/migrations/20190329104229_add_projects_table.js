exports.up = function(knex, Promise) {
    // changes database
    return knex.schema.createTable('projects', function(tbl) {
  
      // PK
      tbl.increments(); 
      tbl.string('name', 128)
         .notNullable()
         .unique();
      tbl.text('description').notNullable();
      tbl.boolean('completed').defaultTo(false);
  
      tbl.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    // rollback changes
    return knex.schema.dropTableIfExists('projects');
  };
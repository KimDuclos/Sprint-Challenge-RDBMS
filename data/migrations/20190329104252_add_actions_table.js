exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
  
      // PK
      tbl.increments(); 
  
      tbl.string('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);
  
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable();
  
      tbl.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    // rollback
    return knex.schema.dropTableIfExists('actions');
  };
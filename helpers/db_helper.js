const db = require('../data/dbConfig');

module.exports = {
  get_projects: () => {
    return db('projects');
  },

  get_project: id => {
    return db('projects')
      .where({ id: Number(id) })
      .select('id', 'name', 'description', 'completed');
  },

  get_projectActions: id => {
    return db('actions')
      .select('id', 'description', 'notes', 'completed')
      .where({ project_id: Number(id) });
  },

  add_project: project => {
    return db('projects').insert(project);
  },

  add_action: action => {
    return db('actions').insert(action);
  }
};
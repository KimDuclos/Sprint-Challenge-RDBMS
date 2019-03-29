const server = require('./server');
const projects_router = require('./projects/projects_router');
const actions_router = require('./actions/actions_router');

const port = 4000;
server.listen(port, () => console.log(`\nAPI running on port 4000.\n`));

server.get('/projects/projects_router', projects_router);
// server.get('/api/projects/test', projectsRouter);
// server.get('/api/projects/:id', projectsRouter);

server.post('./projects/projects_routers', projects_router);



server.post('./actions/actions_router', actions_router);

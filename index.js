const server = require('./server');
const projects_router = require('./projects/projects_router');
const actions_router = require('./actions/actions_router');


server.use("/api", projects_router);


server.use("/api", actions_router);


const port = 4000;
server.listen(port, () => console.log(`\nAPI running on port 4000.\n`));
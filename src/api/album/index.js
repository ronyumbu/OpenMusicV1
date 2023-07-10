const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'Albums',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const Handler = new AlbumsHandler(service, validator);
    server.route(routes(Handler));
  },
};

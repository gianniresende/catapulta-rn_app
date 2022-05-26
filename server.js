/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {createServer, Model, Response} from 'miragejs';

createServer({
  urlPrefix: 'http://localhost:8080',
  namespace: 'api',
  models: {
    user: Model,
  },
  seeds(server) {
    server.create('user', {
      firstName: 'Gianni',
      lastName: 'Resende',
      email: 'gianniresende@gmail.com',
      password: '698dc19d489c4e4db73e28a713eab07b',
      token: 'ayah34123hfadf7134hfadf4351341jdfhasdkf',
    });
  },
  routes() {
    this.get('/user', (schema) => {
      return schema.users.all();
    });

    this.post('/auth', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.findBy({
        email: body.email,
        password: body.password,
      });

      if (!user) {
        return new Response(404);
      }
      return user;
    });

    this.post('/user', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.create({...body, token:"aydf56df4asd32f1asd4fasdf1"});
      return user;
    });
  },
});

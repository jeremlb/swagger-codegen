import { CatsApi } from '../generated-client/index';

const api = new CatsApi({ basePath: 'http://localhost:3000'});

api.appControllerGetAll().then((results) => {
  console.log(results.data)
});

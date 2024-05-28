import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuarioController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuarios', UsuariosController.index);

routes.get('/usuarios/:id', UsuariosController.show);
routes.get('/usuarios/:name/name',UsuariosController.search);

routes.post('/usuarios', upload.array('images'),UsuariosController.create);

routes.put('/users/:id/changed', upload.array('images'), UsuariosController.change);
routes.get('/users/:id/change',UsuariosController.show);

export default routes;
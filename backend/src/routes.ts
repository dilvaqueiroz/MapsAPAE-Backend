import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuarioController';
import DoadoresController from './controllers/DoardorController';
import ColaboradoresController from './controllers/ColaboradorController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuarios', UsuariosController.index);
routes.get('/doadores',DoadoresController.index);
routes.get('/colaboradores',ColaboradoresController.index);

routes.get('/usuarios/:id', UsuariosController.show);
routes.get('/usuarios/:name/name',UsuariosController.search);
routes.get('/doadores/:id',DoadoresController.show);
routes.get('/doadores/:name/name',DoadoresController.search);
routes.get('/colaboradores/:id',ColaboradoresController.show);
routes.get('/colaboradores/:name/name',ColaboradoresController.search);

routes.post('/usuarios', upload.array('images'),UsuariosController.create);
routes.post('/doadores',upload.array('images'),DoadoresController.create);
routes.post('/colaboradores',upload.array('images'),ColaboradoresController.create);

routes.put('/users/:id/changed', upload.array('images'), UsuariosController.change);
routes.get('/users/:id/change',UsuariosController.show);
routes.put('/donors/:id/changed',upload.array('images'),DoadoresController.change);
routes.get('/donor/:id/change',DoadoresController.show);
routes.put('/collaborators/:id/changed',upload.array('images'),ColaboradoresController.change);
routes.get('/collaborator/:id/change',ColaboradoresController.show);

export default routes;
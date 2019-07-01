import {Router} from 'express';
import rolesControlles from '../controllers/rolesController';

class RolesRoutes{

  public router : Router = Router();

  constructor(){
this.config();
  }

config(): void{
  this.router.get('/',rolesControlles.index);
  this.router.post('/',rolesControlles.add);
}

}

const rolesRoutes = new RolesRoutes();
export default rolesRoutes.router;
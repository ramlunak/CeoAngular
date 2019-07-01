import{Request,Response} from 'express';
import pool from '../db'

class RolesController{
    
   public index (req : Request,res:Response) {
        var rols = pool.query('SELECT *FROM roles');
         res.json(rols);
    }

    public async add (req : Request,res:Response) {       
        await pool.query('INSERT INTO roles set ?',[req.body]);
        res.json(req.body);
   }


}
 const rolesController = new RolesController();
 export default rolesController;
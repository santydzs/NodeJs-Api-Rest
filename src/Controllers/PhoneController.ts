import Db from "../Infraestructure/mongoDriver";
import phone from "../Infraestructure/Schemas/phone";

export default class phoneController{
    private _db: Db;

    constructor(){
        this._db = new Db();
    }

    public Add(req: Request , res:Response){
        try{
            this._db.createPhone(req.body);
        }catch(error){
            throw error;
        }
    }
}
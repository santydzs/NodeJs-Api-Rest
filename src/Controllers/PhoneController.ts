import Db from "../Infraestructure/mongoDriver";
import phone from "../Infraestructure/Schemas/phone";

export default class PhoneController {
    private db: Db;

    constructor() {
        this.db = new Db();
    }

    public Add(req: any) {
        try {
            this.db.createPhone(req.body);
        } catch (error) {
            throw error;
        }
    }
}

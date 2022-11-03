import { Router } from "express";

class IndexRouter{

    public router:Router=Router();

    constructor(){
        this.config();

    }

    config():void{
        this.router.get('/algodon',(req,res)=>res.send("Si se pudo guapo"));
    }
}

const indexRouter=new IndexRouter();
export default indexRouter.router;
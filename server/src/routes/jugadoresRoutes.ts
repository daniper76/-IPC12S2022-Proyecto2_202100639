import { Router } from "express";

const todoscracks=[
    {
        id:1,
        nombre: "Lionel",
        apellido: "Messi",
        seleccion: "Argentina",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/158/023/23_120.png"
    },

    {
        id:2,
        nombre: "Emiliano",
        apellido: "Martínez",
        seleccion: "Argentina",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/202/811/23_120.png"
    },

    {
        id:3,
        nombre: "Lautaro",
        apellido: "Martínez",
        seleccion: "Argentina",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/231/478/23_120.png"
    },

    {
        id:4,
        nombre: "Rodrigo",
        apellido: "De Paul",
        seleccion: "Argentina",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/212/616/23_120.png"
    },

    {
        id:5,
        nombre: "Lisandro",
        apellido: "Martínez",
        seleccion: "Argentina",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/239/301/23_120.png"
    },

    {
        id:6,
        nombre: "Neymar",
        apellido: "Jr",
        seleccion: "Brasil",
        region: "conmebol",
        imagen: "https://www.futbolred.com/files/article_main/uploads/2018/07/04/5b3d476e6da3f.jpeg"
    },

    {
        id:7,
        nombre: "Bruno",
        apellido: "Guimarães ",
        seleccion: "Brasil",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/247/851/23_120.png" 
    },

    {
        id:8,
        nombre: "Alison",
        apellido: "Becker",
        seleccion: "Brasil",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/212/831/23_120.png"  
    },

    {
        id:9,
        nombre: "Lucas",
        apellido: "Paquetá",
        seleccion: "Brasil",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/233/927/23_120.png"
    },

    {
        id:10,
        nombre: "Antony",
        apellido: "Dos Santos",
        seleccion: "Brasil",
        region: "conmebol",
        imagen: "https://cdn.sofifa.net/players/255/475/23_120.png"
    },

    {
        id:11,
        nombre: "Harry",
        apellido: "Kane",
        seleccion: "Inglaterra",
        region: "Europa",
        imagen: "https://cdn.sofifa.net/players/202/126/23_120.png"
    },

    {
        id:12,
        nombre: "Jack",
        apellido: "Grealish",
        seleccion: "Inglaterra",
        region: "Europa",
        imagen: "https://cdn.sofifa.net/players/206/517/23_120.png"
    },

    {
        id:13,
        nombre: "Bukayo",
        apellido: "Saka",
        seleccion: "Inglaterra",
        region: "Europa",
        imagen: "https://cdn.sofifa.net/players/246/669/23_120.png"
    },

    {
        id:14,
        nombre: "Kieran",
        apellido: "Trippier",
        seleccion: "Inglaterra",
        region: "Europa",
        imagen: "https://cdn.sofifa.net/players/186/345/23_120.png"
    },

    {
        id:15,
        nombre: "Jordan",
        apellido: "Henderson",
        seleccion: "Inglaterra",
        region: "Europa",
        imagen: "https://cdn.sofifa.net/players/183/711/23_120.png"
    },

    {
        id:16,
        nombre: "Takehiro",
        apellido: "Tomiyasu",
        seleccion: "Japon",
        region: "Asia",
        imagen: "https://cdn.sofifa.net/players/232/938/23_120.png"
    },

    {
        id:17,
        nombre: "Daichi",
        apellido: "Kamada",
        seleccion: "Japon",
        region: "Asia",
        imagen: "https://cdn.sofifa.net/players/232/730/23_60.png"
    },

    {
        id:18,
        nombre: "Takumi",
        apellido: "Minamino",
        seleccion: "Japon",
        region: "Asia",
        imagen: "https://cdn.sofifa.net/players/226/627/23_60.png"
    },

    {
        id:19,
        nombre: "Takefusa",
        apellido: "Kubo",
        seleccion: "Japon",
        region: "Asia",
        imagen: "https://cdn.sofifa.net/players/237/681/23_60.png"
    },

    {
        id:20,
        nombre: "Kyogo",
        apellido: "Furuhashi",
        seleccion: "Japon",
        region: "Asia",
        imagen: "https://cdn.sofifa.net/players/245/538/23_60.png"
    }
];

class JugadoresRouter{

    public router:Router=Router();

    constructor(){
        this.config();

    }

    config():void{
        this.router.get('/algodon',(req,res)=>res.send("messi chiquito"));
        this.router.get('/all',(req,res)=>{
            res.send(todoscracks);
        });

        this.router.get('/nombre/:nombre',(req,res)=>{
            const jugador=this.obtenerJugadorPorNombre(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/seleccion/:seleccion', (req,res)=>{
            const seleccion=this.obtenerSeleccionPorNombre(req.params.seleccion);
            res.send(seleccion);
        });

        this.router.get('/region/:region',(req,res)=>{
            const region=this.obtenerRegionPorNombre(req.params.region);
            res.send(region);
        });
       
    }

    obtenerJugadorPorNombre(nombreJugador:any):any{
        return todoscracks.find(dato => dato.nombre == nombreJugador);    
    }

    obtenerSeleccionPorNombre(nombreSeleccion: any): any {
        let tempo = [];
        for (const jugador of todoscracks) {
            if (jugador.seleccion == nombreSeleccion) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }

    obtenerRegionPorNombre(nombreRegion:any):any{
        let temp=[];
        for(const jugador of todoscracks){
            if(jugador.region == nombreRegion){
                temp.push(jugador);
            }
        }
        return temp;
    }
}


const jugadoresRouter=new JugadoresRouter();
export default jugadoresRouter.router;
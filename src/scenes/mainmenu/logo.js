//@ts-check
import { k } from "../../engine.js"
import "../../assets.js"
import * as globalobjs from "../../globalobj.js"

const logo = globalobjs.stick({
    color:null,
    position:center(),
    islogo:true,
    scale:0.3,
    isrightstick:false
})
onUpdate(()=>{
    k.debug.log(logo.stick.click)
})
//@ts-check
import { k } from "../../engine.js"
import "../../assets.js"
import * as globalobjs from "../../globalobj.js"
k.scene("logo",() => {
    const logo = globalobjs.stick({
        color:null,
        position:center(),
        islogo:true,
        scale:0.3,
        isrightstick:false
    })
    function beep() {
        logo.circle.animate("scale",[vec2(0.29),vec2(0.3)],{
            duration:60/500,
            direction:"ping-pong",
            easing:easings.easeOutCubic
        })
    }
    beep()
})
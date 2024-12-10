//@ts-check
import { k } from "../engine.js"
import "../assets.js"

const ring_menu = ({ size,pos:{x,y},color })=>{
    //TODO make text display
    const button = add([
        ,k.circle(size/2)
        ,k.pos(x,y)
        ,k.color(color)
        ,k.outline(30,color,0.5)
        ,k.area()
    ])

    return { button, }
}

export { ring_menu }
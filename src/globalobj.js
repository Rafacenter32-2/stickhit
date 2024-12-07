//@ts-check
import { k } from "./engine.js"
import "./assets.js"
/**
 *  
 * @param {Object} param0 
 * @param {boolean} param0.islogo 
 * @param {number} param0.scale 
 * @param {*} param0.position
 * @param {*} param0.color
 * 2 that dosent work
 */

const stick = ({
    islogo,
    position,
    scale,
    color,
})=>{
    const circle = k.add([
        (()=>{
            if (islogo) {
                return k.sprite("logo_body")
            }else{
                return k.circle(19.5)
            }
        })(),
        k.anchor("center"),
        k.pos(position),
        k.scale(scale),
        (()=>{
            if (!islogo) {
                return k.color(color)
            }
        })()
    ])
    const stick = circle.add([
        sprite("stick"),
        anchor("center"),
        pos(0,0),
        area()
    ])
    if (islogo) {
    const text = circle.add([
        sprite("logo_text"),
        anchor("center")
    ])
    return {circle, stick, text}
}
return {circle, stick}
}
export { stick }
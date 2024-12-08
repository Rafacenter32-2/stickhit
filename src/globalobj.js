//@ts-check
import { k } from "./engine.js"
import "./assets.js"
/**
 *  
 * @param {Object} param0 
 * @param {boolean} param0.islogo 
 * @param {number} param0.scale 
 * @param {boolean} param0.isrightstick
 * @param {*} param0.position
 * @param {*} param0.color
 * 2 that dosent work
 */

const stick = ({
    islogo,
    position,
    scale,
    color,
    isrightstick,
})=>{
    const circle = k.add([
        (()=>{
            if (islogo) {
                return k.sprite("logo_body")
            }else{
                return k.circle(1280/2)
            }
        })(),
        k.anchor("center"),
        k.pos(position),
        k.scale(scale),
        (()=>{
            if (!islogo) {
                return k.color(color)
            }
        })(),
        k.animate()
    ])
    const stick = circle.add([
        sprite("stick"),
        anchor("center"),
        pos(0,0),
        area(),
        {  click:false }
    ])
    //scripts
    onUpdate(()=>{
        stick.pos.x = getGamepadStick('left').x *((1280/2)-(384/2))
        stick.pos.y = getGamepadStick('left').y *((1280/2)-(384/2))
    })
    onGamepadButtonPress('lshoulder',()=>{
        stick.click = true
        setTimeout(() => {
            stick.click = false
        }, 1000/20);
    })
    


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
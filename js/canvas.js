var canvasref=document.getElementById("mycanvas")
var ctx=canvasref.getContext("2d")

var x=10
y=10
var animateText=function(){   
    ctx.restore()
    ctx.font="44px serif"
    ctx.strokeText("Hello Canvas",x,y)
    y+=20    
    window.requestAnimationFrame(animateText)
}
//Draw the line

ctx.moveTo(0,0)
ctx.lineTo(300,300)
ctx.stroke()

//fill rectangle
ctx.fillSytle="rgba(200,0,0,0.5)"
ctx.fillRect(50,50,100,100)

//draw rectange
ctx.lineWidht="4"
ctx.strokeStyle="green"
ctx.strokeRect(200,200,50,75)


//draw the circle
ctx.beginPath()
ctx.arc(225,100,50,0,Math.PI*2,true)
ctx.stroke()

window.requestAnimationFrame(animateText)


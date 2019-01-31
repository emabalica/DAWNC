let myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

var x = document.createElement("P");
var t = document.createTextNode("In Europe, up to 40% of people with respiratory allergies may have pollen allergy.");
x.appendChild(t);
x.style.color="white";
x.style.margin="0 0 0 10%";
document.body.appendChild(x);

myCanvas.width = 500;
myCanvas.height = 500;

myCanvas.id="myCanvas";



let radians = grade=>(Math.PI/180)*grade;


if (myCanvas.getContext) {

    var context = myCanvas.getContext('2d');

    let valori=[60,40];

    if (valori.reduce((a,b)=>a+b)==100)
    {
        valori = valori.map(x=>x*3.6);
        let s0=0,s1=0;
        for(let i=0; i<valori.length; i++)
        {
            s1+=valori[i];
            context.fillStyle = "RGB("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
            context.beginPath();
            context.moveTo(400,400);
            context.arc(400, 400, 100, radians(s0), radians(s1), 0);
            context.closePath();
            context.fill();
            context.stroke();
            s0=s1;
        }
        context.font = "10px Arial";
        context.strokeText("Pollen Allergy", 400,400-30);
        context.font = "10px Arial";
        context.strokeText("Non pollen allergy", 350,400+30);
    }

}

myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

x = document.createElement("P");
t = document.createTextNode("Allergic reactions accordint to route of exposure");
x.appendChild(t);
x.style.color="white";
x.style.margin="0 0 0 10%";
document.body.appendChild(x);

myCanvas.width = 500;
myCanvas.height = 500;

myCanvas.id="myCanvas";



radians = grade=>(Math.PI/180)*grade;


if (myCanvas.getContext) {

    context = myCanvas.getContext('2d');

    let valori=[88,8,3,1];

    if (valori.reduce((a,b)=>a+b)==100)
    {
        valori = valori.map(x=>x*3.6);
        let s0=0,s1=0;
        for(let i=0; i<valori.length; i++)
        {
            s1+=valori[i];
            context.fillStyle = "RGB("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
            context.beginPath();
            context.moveTo(400,400);
            context.arc(400, 400, 100, radians(s0), radians(s1), 0);
            context.closePath();
            context.fill();
            context.stroke();

            s0=s1;
        }
        context.font = "10px Arial";
        context.strokeText("Ingestion", 400-50,400-10);
        context.font = "10px Arial";
        context.strokeText("Skin", 400+50,400-30);
        context.font = "10px Arial";
        context.strokeText("Inhalation", 400+50,400-10);
        context.font = "10px Arial";
        context.strokeText("Others", 400+60,400+1);

    }

}



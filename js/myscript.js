//elments 
var img=document.getElementsByTagName('im');
var download=document.getElementsByTagName('h3');
var crox=document.getElementById('crox');
var prevx=document.getElementById('prevx');
var nex=document.getElementById('nex');
var jan=document.getElementById('jan');
var cross=document.getElementById('crox');
var inner=document.getElementById('in');
//element for the poem button
// var write=document.getElementById('write');
//element for the writing
var writePoint=document.getElementById('letter');//for the writing point
//textarea for writing of the poem
var elNote = document.createElement('textarea');
elNote.setAttribute('id','note');
elNote.innerHTML = 'Start here...';

//***PICTURE ARRAY HERE */

//***START FUNCTIONS HERE
function elWrite() {
        writePoint.appendChild(elNote);
}

function elPrev() {
    var piks=['image/1.jpg','image/2.jpg'];

    var index=0;
    img.setAttribute('scr',piks[index]);
    index=(index+1)% piks.length;
}
setInterval(elPrev, 1000);

function elRemove(){
    inner.removeAttribute('class','inner');
    prevx.removeAttribute('class','prev');
    nex.removeAttribute('class','next');
    crox.removeAttribute('class','cross');
}

   
//***EVENT START HERE */
jan.addEventListener('click',function(){

    setTimeout(() =>{

        var p=prevx.setAttribute('class','prev');
        var n=nex.setAttribute('class','next');
        var c=crox.setAttribute('class','cross');
        var k=inner.setAttribute('class','inner');
        document.body.appendChild(k);
        inner.appendChild(c);
        inner.appendChild(p);
        inner.appendChild(n);
        download.innerHTML='DOWNLOAD picture';
    },500);
},false);
//write.addEventListener('click', elWrite, false);
cross.addEventListener('click',function() {elRemove()},false);
prevx.addEventListener('click',elPrev,false);
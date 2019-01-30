function initialize(){ARSynth.init({noteElm:$("#note")[0],frequencyElm:$("#frequency")[0]}),$("#color").bind("change",function(){ARSynth.set("color",this.value);// hex color
}),$("#color2").bind("change",function(){ARSynth.set("color2",this.value);// hex color
}),$("#color-offset").bind("change",function(){ARSynth.set("cOffset",parseInt(this.value,10))}),$("#size-offset").bind("change",function(){ARSynth.set("sizeOffset",parseInt(this.value,10))})}
// var synth = new Tone.Synth().toMaster();
/* Euer Code */function checkIfColorVisible(){
// Hier wird der Text auf den Screen geschrieben, ob sichtbar oder nicht
$("#debugger").text("farbe sichtbar: "+farbe1),$("#debugger2").text("farbe 2 sichtbar: "+farbe2),
// Hier schauen wir if-else mäßig, ob Farbe1 sichtbar ist oder nicht
1==farbe1?fadeInSound1():fadeOutSound1(),
// Hier schauen wir if-else mäßig, ob Farbe2 sichtbar ist oder nicht
1==farbe1?fadeInSound2():fadeOutSound2(),
// Die Check Funktion ruft sich hier alle 100ms wieder selber auf
setTimeout(function(){checkIfColorVisible()},1e3)}
/* Hier passieren dann die Audio sachen */
function fadeInSound1(){bass.play()}function fadeOutSound1(){stimme.play()}function fadeInSound2(){}function fadeOutSound2(){}checkIfColorVisible();var bass=new Howl({src:["bass.wav"],preload:!0,volume:.2,autoplay:!1,loop:!0}),stimme=new Howl({src:["stimme.mp3"],preload:!0,volume:0,autoplay:!1});bass.play();
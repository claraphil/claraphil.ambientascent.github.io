function initialize(){
  ARSynth.init({
    noteElm: $('#note')[0],
    frequencyElm: $('#frequency')[0]
  });

  $('#color').bind('change', function(){
    ARSynth.set('color', this.value); // hex color
  });
  $('#color2').bind('change', function(){
    ARSynth.set('color2', this.value); // hex color
  });

  $('#color3').bind('change', function(){
    ARSynth.set('color3', this.value); // hex color
  });

  $('#color-offset').bind('change', function(){
    ARSynth.set('cOffset', parseInt(this.value, 10));
  });

  $('#size-offset').bind('change', function(){
    ARSynth.set('sizeOffset', parseInt(this.value, 10));
  });
}


var bass = new Howl({       //Änderung in Wasser
  src: ["wasser.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});

var stimme = new Howl({     //Änderung in melodie
  src: ["Melodie.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});


var zweiteStimme = new Howl({   //Änderung: streicher
  src: ["streicher.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});

var terz = new Howl({     //Änderung: Bass
  src: ["bass.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});

var wasser = new Howl({         //Änderung: Cello
  src: ["cello.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});



var ambient = new Howl({
  src: ["ambient.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});


var gitarre = new Howl({
  src: ["gitarre.mp3"],
  preload: true,
  volume: 0,
  autoplay: false,
  loop: true,
});




wasser.play();
terz.play();
stimme.play();
bass.play();
zweiteStimme.play();
ambient.play();
gitarre.play();



/* Euer Code */

function checkIfColorVisible(){

  // Hier wird der Text auf den Screen geschrieben, ob sichtbar oder nicht
  $("#debugger").text("farbe sichtbar: " + farbe1 + anzahl);
  $("#debugger2").text("farbe 2 sichtbar: " + farbe2 + anzahl);
  $("#debugger3").text("farbe 3 sichtbar: " + farbe3 + anzahl);

  // Hier schauen wir if-else mäßig, ob Farbe1 sichtbar ist oder nicht
  if(farbe1 == true){
    fadeInSound1(); // Ist sichtbar
    stimme2();
  }else{
    fadeOutSound1(); // Ist nicht sichtbar

  }

  // Hier schauen wir if-else mäßig, ob Farbe2 sichtbar ist oder nicht
  if(farbe2 == true){
    fadeInSound2(); // Ist sichtbar
    gitarredazu();
  }else{
    fadeOutSound2(); // Ist nicht sichtbar
  }

  // Hier schauen wir if-else mäßig, ob Farbe3 sichtbar ist oder nicht
  if(farbe3 == true){
    fadeInSound3(); // Ist sichtbar
    ambientdazu();
  }else{
    fadeOutSound3(); // Ist nicht sichtbar

  }


  // Die Check Funktion ruft sich hier alle 100ms wieder selber auf
  setTimeout(function(){
    checkIfColorVisible();
  },1000)

}
checkIfColorVisible();

/* Hier passieren dann die Audio sachen */


var tasse1ahoi = false;
var tasse2ahoi = false;
var tasse3ahoi =false;
var fadeInLength = 20000;
var fadeOutLength = 20000;


function fadeInSound1 () {
if (tasse1ahoi == false) {      //Tasse wird registriert
tasse1ahoi = true;
anzahl++;
document.getElementById("icon1").style.opacity = "1";

  if (tasse2ahoi== false && tasse3ahoi==false){                //Muss Tasse noch Sound abspielen?
    bass.fade(bass.volume(),1, fadeInLength);       //jap, dann einmal Bass bitte
    terzdazu();
    wasserdazu();
    stimme1();

    }
  }
}


function fadeInSound2() {
if (tasse2ahoi == false) {      //Tasse wird registriert
tasse2ahoi = true;
anzahl++;
document.getElementById("icon2").style.opacity = "1";

  if (tasse1ahoi== false && tasse3ahoi == false){                //Muss Tasse noch Sound abspielen?
    bass.fade(bass.volume(),1,fadeInLength);       //jap
    terzdazu();
    wasserdazu();
    stimme1();
                          //evtl noch eine Stimme bitte.
  }
}
}



function fadeInSound3() {
if (tasse3ahoi == false) {      //Tasse wird registriert
tasse3ahoi = true;
anzahl++;
document.getElementById("icon3").style.opacity = "1";

  if (tasse1ahoi== false && tasse2ahoi == false){                //Muss Tasse noch Sound abspielen?
    bass.fade(bass.volume(),1,fadeInLength);       //jap
    terzdazu();
    wasserdazu();
    stimme1();
                          //evtl noch eine Stimme bitte.
  }
}
}



function fadeOutSound1() {
if (tasse1ahoi == true){           //Tasse1 einmal abmelden bitte
  tasse1ahoi = false;
  anzahl--;
  document.getElementById("icon1").style.opacity = "0.5";
  if (tasse2ahoi == false && tasse3ahoi ==false)   {      //und bitte nur faden wenn du die letzte Tasse bist
    bass.fade(bass.volume(),0,fadeOutLength);
  }
}
}


function fadeOutSound2() {
if (tasse2ahoi == true){           //Tasse1 einmal abmelden bitte
  tasse2ahoi = false;
  anzahl--;
  document.getElementById("icon2").style.opacity = "0.5";
  if (tasse1ahoi == false && tasse3ahoi ==false)   {      //und bitte nur faden wenn du die letzte Tasse bist
    bass.fade(bass.volume(),0,fadeOutLength);
  }
}
}


function fadeOutSound3() {
if (tasse3ahoi == true){           //Tasse1 einmal abmelden bitte
  tasse3ahoi = false;
  anzahl--;
  document.getElementById("icon3").style.opacity = "0.5";
  if (tasse1ahoi == false && tasse2ahoi ==false)   {      //und bitte nur faden wenn du die letzte Tasse bist
    bass.fade(bass.volume(),0,fadeOutLength);
  }
}
}



var stimmedurchziehenbitte=true;

function stimme1(){
    if (bass.volume()>0.9 && stimmedurchziehenbitte ==true){
      stimme.fade(stimme.volume(),1,fadeInLength);
      stimmedurchziehenbitte=false;
    }
    else if (bass.volume()<0.9 && stimmedurchziehenbitte ==false && (tasse1ahoi==false || tasse2ahoi == false)){
      stimme.fade(stimme.volume(),0,fadeOutLength);
      stimmedurchziehenbitte =true;
    }
  	setTimeout(function(){stimme1();},1000)
  }



  var zweitestimmedurch=true;

  function stimme2(){
      if (stimme.volume()>0.9 && zweitestimmedurch ==true && anzahl>1){
        zweiteStimme.fade(zweiteStimme.volume(),0.1,fadeInLength);
        zweitestimmedurch=false;
      }
      else if (anzahl<=1 && zweitestimmedurch==false){
        zweiteStimme.fade(zweiteStimme.volume(),0, fadeOutLength);
        zweitestimmedurch =true;
      }
    	setTimeout(function(){stimme2();},1000)
    }



var terzbitte=true;

function terzdazu(){
  if (bass.volume()>0.3 && terzbitte ==true){
    terz.fade(terz.volume(),0.6,fadeInLength);
    terzbitte=false;
  }
  else if (bass.volume()<0.9 && terzbitte ==false && (tasse1ahoi==false || tasse2ahoi == false)){
    terz.fade(terz.volume(),0,fadeOutLength);
    terzbitte =true;
  }
  setTimeout(function(){terzdazu();},1000)

}


var wasserbitte= true;

function wasserdazu(){
  if (terz.volume()>0.45 && wasserbitte ==true){
    wasser.fade(wasser.volume(),0.7,fadeInLength);
    wasserbitte=false;
  }
  else if (bass.volume()<0.9 && wasserbitte ==false && (tasse1ahoi==false || tasse2ahoi == false)){
    wasser.fade(wasser.volume(),0,fadeOutLength);
    wasserbitte =true;
  }
  setTimeout(function(){wasserdazu();},1000)
}



var ambientbitte= true;

function ambientdazu(){
  if (stimme.volume()>0.9 && ambientbitte ==true && anzahl>1){
    ambient.fade(ambient.volume(),1,fadeInLength);
    ambientbitte=false;
  }
  else if (anzahl<=1 && ambientbitte==false){
    ambient.fade(ambient.volume(),0,fadeOutLength);
    ambientbitte =true;
  }
  setTimeout(function(){ambientdazu();},1000)
}




var gitarrebitte= true;

function gitarredazu(){
  if (stimme.volume()>0.9 && gitarrebitte ==true && anzahl>1){
    gitarre.fade(gitarre.volume(),0.4,fadeInLength);
    gitarrebitte=false;
  }
  else if (anzahl<=1 && gitarrebitte==false){
    gitarre.fade(gitarre.volume(),0,fadeOutLength);
    gitarrebitte =true;
  }
  setTimeout(function(){gitarredazu();},1000)
}

//Jetzt der tassenkram
var anzahl= 0;

function tassenanzahl(){


if (anzahl==1){
  document.getElementById("icon1").style.opacity = "1";
  document.getElementById("icon2").style.opacity = "0.5";
  document.getElementById("icon3").style.opacity = "0.5";

}
else if(anzahl==2){
  document.getElementById("icon1").style.opacity = "1";
  document.getElementById("icon2").style.opacity = "1";
  document.getElementById("icon3").style.opacity = "0.5";
}
else if(anzahl==3){
  document.getElementById("icon1").style.opacity = "1";
  document.getElementById("icon2").style.opacity = "1";
  document.getElementById("icon3").style.opacity = "1";
}
else{
  document.getElementById("icon1").style.opacity = "0.5";
  document.getElementById("icon2").style.opacity = "0.5";
  document.getElementById("icon3").style.opacity = "0.5";
}
  setTimeout(function(){tassenanzahl();},1000)
}

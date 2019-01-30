!function(t){function i(){v={color:"#000000",color2:"#000000",webcamElm:document.getElementById("webcam"),webcamMirror:document.getElementById("webcamMirror"),trackedElm:document.getElementById("tracked"),frequencyElm:!1,noteElm:!1,cOffset:20,sizeOffset:5,useTimbre:!1}}function e(){var t=v.webcamElm,i=function(t){alert("Webcam error!",t)};navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(i){t.srcObject=i,t.play()})}function r(t,i){for(var e in i)t[e]=i[e];return t}function o(t,i){var e=String(t);if(e.length<i)for(var r=i-e.length,o=0;o<r;o++)e='<span class="inactive">0</span>'+e;return e}function h(t){var i=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],e=t%12,r=Math.floor(t/12)-1,o=i[e];return o+(o.length<2?"-":"")+r}function s(t){return Math.round(12*Math.log(t/440)+69)}function a(t){return h(s(t))}function n(){if(v.frequencyElm&&(v.frequencyElm.innerHTML=o(Math.round(g.frequency),4)+" Hz"),v.noteElm){var t=a(g.frequency);v.noteElm.innerHTML=t}}function d(){var t=0,i,e,r=2*Math.PI;this.samplingRate=44100,e=1/this.samplingRate,this.pitchBase=50,this.pitchBend=0,this.pitchRange=2e3,this.volume=.5,this.maxVolume=.5,this.frequency=this.pitchBase,i=this.pitchBase,this.getBuffer=function(o){for(var h=[],s=this.volume*this.maxVolume,a=0;a<o;a++)for(h[a]=s*Math.sin(t*r),t+=i*e;t>1;)t-=1},this.setPitchBend=function(t){this.pitchBend=t,this.frequency=this.pitchBase+this.pitchBend*this.pitchRange,i=this.frequency}}function c(t){var i=t.outputBuffer,e=i.getChannelData(0),r=i.getChannelData(1),o=e.length,h=[];if(farbe1){h=g.getBuffer(o);for(var s=0;s<h.length;s++)e[s]=h[s],r[s]=h[s]}else for(var s=0;s<o;s++)e[s]=0,r[s]=0}function l(){g=new d,m=new AudioContext,f=m.createScriptProcessor(4096),f.onaudioprocess=c,f.connect(m.destination)}function u(t){var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}var m,f,g,v={};i(),window.onload=function(){i(),e();try{l()}catch(t){console.log(t),alert("Your browser does not support webkitAudioContext")}};var w={doLoad:function(){var t=this;this.video=v.webcamElm,this.mirrorVideo=v.webcamMirror,this.mirrorVideoCtx=this.mirrorVideo.getContext("2d"),this.twElement=v.trackedElm,this.pageLoaded=!0,this.startPlayer()},videoIsPlaying:function(){this.timerCallback()},videoIsReady:function(){this.videoLoaded=!0,this.startPlayer()},startPlayer:function(){this.videoLoaded&&this.pageLoaded&&(this.width=this.video.width,this.height=this.video.height,this.mirrorVideo.width=this.width,this.mirrorVideo.height=this.height,this.mirrorVideoCtx.fillStyle="white",this.mirrorVideoCtx.strokeStyle="black",this.mirrorVideoCtx.translate(this.mirrorVideo.width,0),this.mirrorVideoCtx.scale(-1,1),this.playVideo())},playVideo:function(){this.video.play(),this.videoIsPlaying()},stopVideo:function(){this.video.pause(),clearTimeout(this.timeout)},timerCallback:function(){if(!this.video.paused&&!this.video.ended){this.computeFrame();var t=this;this.timeout=setTimeout(function(){t.timerCallback()},50)}},dist:function(t,i,e,r){return Math.sqrt((t-e)*(t-e)+(i-r)*(i-r))},computeFrame:function(){var t=u(v.color),i=t.r,e=t.g,r=t.b,o=v.sizeOffset,h=v.cOffset;this.mirrorVideoCtx.clearRect(0,0,this.width,this.height);try{this.mirrorVideoCtx.drawImage(this.video,0,0,this.width,this.height)}catch(t){return}for(var s=this.mirrorVideoCtx.getImageData(0,0,this.width,this.height),a,d,c=null,l,m,f,a,d,w=20,y=s.data.length/4,p=4,b=0;b<y;b+=4)if(l=s.data[4*b+0],m=s.data[4*b+1],f=s.data[4*b+2],a=b%this.width,d=Math.round(b/this.width),l>i-h&&l<i+h&&m>e-h&&m<e+h&&f>r-h&&f<r+h)if(c){var x=this.dist(a,d,c.x,c.y);x<w&&(c.x+=1/(c.weight+1)*(a-c.x),c.y+=1/(c.weight+1)*(d-c.y),c.rgb=l+","+m+","+f,c.weight++)}else c={},c.x=a,c.y=d,c.rgb=l+","+m+","+f,c.weight=1;if(!c)return void(farbe1=!1);c.weight>o?(this.twElement.style.top=c.y+"px",this.twElement.style.left=c.x+"px",this.twElement.style.backgroundColor="rgb("+c.rgb+")",farbe1=!0,g.setPitchBend(c.x/this.width),g.volume=1-c.y/this.height,n()):farbe1=!1}},y={doLoad:function(){var t=this;this.video=v.webcamElm,this.mirrorVideo=v.webcamMirror,this.mirrorVideoCtx=this.mirrorVideo.getContext("2d"),this.twElement=v.trackedElm,this.pageLoaded=!0,this.startPlayer()},videoIsPlaying:function(){this.timerCallback()},videoIsReady:function(){this.videoLoaded=!0,this.startPlayer()},startPlayer:function(){this.videoLoaded&&this.pageLoaded&&(this.width=this.video.width,this.height=this.video.height,this.mirrorVideo.width=this.width,this.mirrorVideo.height=this.height,this.mirrorVideoCtx.fillStyle="white",this.mirrorVideoCtx.strokeStyle="black",this.mirrorVideoCtx.translate(this.mirrorVideo.width,0),this.mirrorVideoCtx.scale(-1,1),this.playVideo())},playVideo:function(){this.video.play(),this.videoIsPlaying()},stopVideo:function(){this.video.pause(),clearTimeout(this.timeout)},timerCallback:function(){if(!this.video.paused&&!this.video.ended){this.computeFrame();var t=this;this.timeout=setTimeout(function(){t.timerCallback()},50)}},dist:function(t,i,e,r){return Math.sqrt((t-e)*(t-e)+(i-r)*(i-r))},computeFrame:function(){var t=u(v.color2),i=t.r,e=t.g,r=t.b,o=v.sizeOffset,h=v.cOffset;this.mirrorVideoCtx.clearRect(0,0,this.width,this.height);try{this.mirrorVideoCtx.drawImage(this.video,0,0,this.width,this.height)}catch(t){return}for(var s=this.mirrorVideoCtx.getImageData(0,0,this.width,this.height),a,d,c=null,l,m,f,a,d,w=20,y=s.data.length/4,p=4,b=0;b<y;b+=4)if(l=s.data[4*b+0],m=s.data[4*b+1],f=s.data[4*b+2],a=b%this.width,d=Math.round(b/this.width),l>i-h&&l<i+h&&m>e-h&&m<e+h&&f>r-h&&f<r+h)if(c){var x=this.dist(a,d,c.x,c.y);x<w&&(c.x+=1/(c.weight+1)*(a-c.x),c.y+=1/(c.weight+1)*(d-c.y),c.rgb=l+","+m+","+f,c.weight++)}else c={},c.x=a,c.y=d,c.rgb=l+","+m+","+f,c.weight=1;if(!c)return void(farbe2=!1);c.weight>o?(this.twElement.style.top=c.y+"px",this.twElement.style.left=c.x+"px",this.twElement.style.backgroundColor="rgb("+c.rgb+")",farbe2=!0,g.setPitchBend(c.x/this.width),g.volume=1-c.y/this.height,n()):farbe2=!1}},p={init:function(t){r(v,t),w.doLoad(),w.videoIsReady(),y.doLoad(),y.videoIsReady()},set:function(t,i){v[t]=i}};t.ARSynth=p}(window);
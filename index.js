const time_to_switch_wallpapers = 12+5 //out of 24 hours

const wallpaper = require('wallpaper');
var fs = require('fs');
var num_files = fs.readdirSync('/backgrounds/')
var base = 99999999999
var offset = 9999999999999
var update = false

function loop(){
  var time = new Date()
  if(time.getHours()<time_to_switch_wallpapers){
    if(base!==0){
      update=true
    }
    base = 0
  }else{
    if(base!==1){
      update=true
    }
    base = 1
  }

  if(time.getDate()%(num_files/2)!==offset){
    offset=time.getDate()%(num_files/2)
    update=true
  }

  if(update){
    console.log('backgrounds/'+base+(offset*2)+'.jpg')
    wallpaper.set('backgrounds/'+(base+(offset*2))+'.jpg')
    update = false
  }
  setTimeout(loop,1000*10)
}
loop()

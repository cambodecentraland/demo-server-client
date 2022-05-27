import { connect } from './connection'

connect('my_room').then((room)=>{

  room.onMessage("command", (data)=>{
      log("hello");
  })
});
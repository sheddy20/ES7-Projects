const person = {
    talk(){
        var self = this;
       setTimeout(()=>{
           console.log('self', this);
       }, 2000);
    }
}
person.talk();
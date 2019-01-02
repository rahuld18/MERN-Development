import { write } from "fs";

/* 
var name='admin';

document.write('Hel  '+ name +'!'); */

class Person{

    constructor(name){
        this.name=name;
    }
    welcome(){
        if(typeof this.name === 'string')
        {
            return 'hello, my name is '+this.name+'!'
        }
        else{
            return 'hello'
        }
    }
}

var per=new Person('Manager');

var greetHTML=templates['greetings']({
    message: per.welcome()
})
document,write(greetHTML);
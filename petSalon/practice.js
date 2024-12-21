var g lobalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am local scope";
    console.log(globalVariable);
    console.log(localVariable);
    if(true){
        let blockVariable = "I am a block warrior";
        console.log(blockVariable);
    }
}


myFunction();
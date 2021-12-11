//Var global variable and Let is local- let is grayed out as it is local
function print (){
    var num =0;
       if (num==0){
        var num2= 30;
        let num3 = 20;
    }
    console.log(num2);
    
}
print();
//call back
const cbPrint=function print(){
    console.log("Data is added");
}
function node_add(){
    const data= {name:"Emp01"}
    //passing call back function as parameter
    db_add(data,cbPrint);
}
function db_add(data,cb){
    cb();
    //Adds data
}

node_add();
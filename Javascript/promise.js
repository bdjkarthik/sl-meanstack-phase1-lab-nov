function node_add(){
    const date = {name : "Emp 01"}
    //calling async 
    db_add().then(
        value=>{
            console.log("Data is printing")
        }
      //  (err)=>{
      //  console.log("error occurred");}
    );

}

function db_add(){
    return new Promise((resolve,reject)=>{
        resolve('success');
    });
}

node_add();
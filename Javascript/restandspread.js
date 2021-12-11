//rest operator
function addwithrest(...numbers){

    let sum=0;

    for (let num of numbers){

        sum= sum+num;
    }
    console.log(sum);
}

addwithrest(1,2);
addwithrest(1,2,3);
addwithrest(1,2,3,4,5);
//spread operator
// function addname(){

//     const name =["name1","name2","name3"]
//     const morename=["name4",...name]
//     console.log(morename);
// }
// addname();

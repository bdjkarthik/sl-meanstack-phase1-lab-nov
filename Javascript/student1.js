function student(name,subject,id){

    this.name=name;
    this.subject=subject;
    this.id=id;
}

student.prototype.add = function(){
    console.log(this.name)

    console.log("adding name");
}
student.prototype.update = function(){
    console.log(this.id)

    console.log("adding id");
}
student.prototype.delete = function(value){
    console.log(this.class)

    console.log("deleting class : "+value);
}
student.prototype.get = function(value){
    console.log(this.name)

    console.log("getting name :"+value);
}

var stu = new student("Supriya","EVS","1111");
stu.add();
console.log(stu);
stu.update();
stu.delete("Student record");
stu.get("Karthik");

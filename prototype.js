function Employee(name,designation,department){
this.name=name;
this.designation=designation;
this.department= department;
}

Employee.prototype.add = function(){

    console.log("Adding to database") 
}
  
var emp =new Employee ("Emp01","Developer");
console.log(emp);
emp.add();

function Employee(name,Desg,Dept) {
        this.name=name;
        this.Desg= Desg;
        this.Dept= Dept;
    }

    Employee.prototype.add = function(){

        console.log("Adding Employee.....");
    }

    var emp = new Employee("Karthik","SDM","IT");
    emp.add();
    console.log(emp);
  
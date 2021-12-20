class Employee{

    constructor(name,dept){
        this.name=name;
        this.dept=dept;

    }

    print(){
        console.log("name :"+this.name, " Dept :"+this.dept);
    }
}

const emp = new Employee("KB", "IT");
emp.print();

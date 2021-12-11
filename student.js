function Student (name,subject){
    this.name=name;
    this.subject=subject;
    }

    Student.prototype.addstudent = function(){

        console.log("Add Student name",this.name);
    }
    Student.prototype.deletestudent = function(){
        console.log("deleting sudent record",this.name)
    }
    Student.prototype.updatestudent = function(){
        console.log("updateStudent",this.name);
      }
      Student.prototype.getstudent = function(){
        console.log("getStudent",this.name);
      }

      var Stu = new Student('Kb','Maths');
Stu.addstudent();
Stu.deletestudent();
Stu.updatestudent();
Stu.getstudent();


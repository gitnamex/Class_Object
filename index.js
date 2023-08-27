let Employee={
    name:'john',
    position:'Accountancy',
    salary:50000,
    getsalary:()=>{
        console.log(" The employee "+this.name+ " Salary from "+this.salary)
    }
}



document.write(Employee.name)
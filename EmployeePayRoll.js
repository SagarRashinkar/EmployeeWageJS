const userInput = require('readline-sync');

class EmployeePayRoll{
    constructor(id, name, salary, gender, date) {
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._gender = gender;
        this._date = date;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get salary(){
        return this._salary;
    }
    get gender(){
        return this._gender;
    }
    get startDate(){
        return this._date;
    }
    set id(id){
        this._id = id;
    }
    set name(name){
        this._name = name;
    }
    set salary(salary){
        this._salary = salary;
    }
    set gender(gender){
        this._gender = gender;
    }
    set startDate(date){
        this._date = date;
    }
}
let empId = userInput.questionInt("Enter Id: ");
let empName = userInput.question("Enter name: ");
let empSal = userInput.questionInt("Enter salary: ");
let gender = userInput.question("Enter your gender: ");
let date = userInput.question("Enter start date: ");
let empPayRoll = new EmployeePayRoll(empId, empName, empSal, gender, date);
console.log("Employee PayRoll Data: ");
console.log(empPayRoll._id+" "+empPayRoll._name+" "+empPayRoll._salary+" "+empPayRoll._gender+" "+empPayRoll._date);
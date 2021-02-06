const util = require('./Utility');
const empData = require('./EmployeePayRoll')

// util.empWageCal();

try{
    empData.id = 1;
    empData.name = "Sagar";
    empData.salary = 500;
    empData.gender = "M";
    empData._startDate = "06/5/2000";
    console.log(empData.toString());
}catch(e){
    console.error(e);
}
class Utility{
    empWageCal(){
        var totWorkHr = 0;
        const wagePerHr = 20;
        const totalWorkDays = 20;
        const workHourOfMonth = 160;
        var workDays = 0;

        //var dailyWageArr = [];
        var myMap = new Map();
        while((totalWorkDays > workDays) && (workHourOfMonth>=totWorkHr)){
            workDays++;
            var check = Math.floor(Math.random()*3);
            //console.log(check);
            switch(check){
                case 0:
                    var workHr = 0;
                    //Absent
                    totWorkHr += workHr;
                break;
                case 1:
                    var workHr = 4;
                    //Part Time
                    totWorkHr += workHr;
                break;
                case 2:
                    var workHr = 8;
                    //Full Time
                    totWorkHr += workHr;
                break;
            }
            var dailyWage = workHr * wagePerHr;
            var totalWage = totWorkHr * wagePerHr;
            //var obj = 
            myMap.workDays = [workDays, dailyWage, totalWage];
            console.log(myMap.workDays);
        }
        
        //myMap.forEach(wage => console.log("daily wage is: "+myMap.get()));
        // console.log("work hours in month is: "+totWorkHr);
        
        //console.log("Total Wage Of The Month is: "+totalWage);
    }
}
module.exports = new Utility();
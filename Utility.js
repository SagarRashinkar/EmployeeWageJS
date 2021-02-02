class Utility{
    // Check employee is present or not
    checkEmpAttendence(){
        
        let check = Math.round(Math.random() *1);
        if(check === 0){
            console.log("Employee is Absent");
        }
        else{
            console.log("Employee is Present");
        }
        this.DailyEmpWage(check);
    }

    DailyEmpWage(check){
        let workHour = 0;
        let wagePerHr = 20;
        const partTimeHr = 0;
        const fullTimeHr = 1;
        switch(check){
            case 0:
                workHour = 4;
                console.log("Employee is Part Time");
            break;
            case 1:
                workHour = 8;
                console.log("Employee is Full Time")
            break;
        }
        console.log("Wage of Employee is: "+(workHour * wagePerHr));
    }
}
module.exports = new Utility();
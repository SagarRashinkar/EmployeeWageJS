class Utility{
    checkEmpAttendence(){
        var check = Math.round(Math.random() *1);
        if(check === 0){
            console.log("Employee is present");
        }
        else{
            console.log("Employee is absent");
        }
    };
}
module.exports = new Utility();
class EmployeePayRoll{

    get name(){ 
        return this._name;
    }
    set name(name)
    {
        let pat = RegExp("^[A-Z][a-z]{2,}$");
        if(pat.test(name))
            this._name = name;
        else throw "Enter a valid name!!!!";
    }

    get id(){ 
        return this._id;
    }
    set id(id){
        let idPat = RegExp("[1-9]|1[0-9]$");
        if(idPat.test(id))
        this._id = id;
        else throw "Enter a valid ID number!!!!";
    }

    get salary(){ 
        return this._salary;
    }
    set salary(salary){
        let salaryPat = RegExp("[0-9][0-9]+");
        if(salaryPat.test(salary))
        this._salary = salary;
        else throw "Enter a valid Salary!!!!";
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderPat = RegExp("(M|F|m|f)$");
        if(genderPat.test(gender))
        this._gender = gender;
        else throw "Gender is Invalid!!!!";
    }

    get startDate(){ 
        return this._startDate;
    }
    set startDate(startDate){
        
        //let datePat = RegExp("([0-2][0-9]|3[0-1]))[./-]([1-9]|[1][0-2])[./-]([200][0-9]{1}|[201][0-9]{1}|[202][0-1]{1})");
        let datePat = RegExp("([1-2]{1}[0-9]{1}|3[0-1]{1})\/\.\-(0[1-9]{1}|1[1-2]{1})\/\.\-((?:19|20)[0-9][0-9])");

        if(datePat.test(startDate))
        this._startDate = startDate;
        else throw "Date is invalid!!!!";
        
    }

    toString(){
        return "id="+ this.id+", name="+this.name+", salary="+this.salary+", gender="+this._gender+", startdate="+this.startDate;
    }
}

module.exports = new EmployeePayRoll();
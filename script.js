

function getDateOfYear(){
    const dateofbirth = new Date(document.getElementById("dob").value);
    const currentDate = new Date();
    if(isNaN(dateofbirth)){
        document.getElementById("output").innerHTML=`!Enter a valid date of birth`
        return
    }

    let result = (currentDate.getFullYear()) - (dateofbirth.getFullYear())
    let monthDifference = (currentDate.getMonth()) - (dateofbirth.getMonth());

    if(monthDifference<0 || (monthDifference===0 && currentDate.getDate()<dateofbirth.getDate())){
        result--;
    }
    document.getElementById("output").innerHTML=`You are ${result} old now.`

}


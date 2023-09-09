

function getDateOfYear(){
    const dateofbirth = new Date(document.getElementById("dob").value);
    const currentDate = new Date();
    if(isNaN(dateofbirth)|| dateofbirth>currentDate){
        document.getElementById("output").innerHTML=`!Enter a valid date of birth`
        return
    }

    let result = (currentDate.getFullYear()) - (dateofbirth.getFullYear())
    let monthDifference = (currentDate.getMonth()) - (dateofbirth.getMonth());

    if(monthDifference<0 || (monthDifference===0 && currentDate.getDate()<dateofbirth.getDate())){
        result--;
    }
   let name= document.getElementById("name").value
    let cap = name.toUpperCase()
    document.getElementById("output").innerHTML=`Hai "${cap}" ,you are ${result} old now.`

}


interface User_Data{
    firstnameElement : HTMLInputElement | null
    lastnameElement : HTMLInputElement | null
    emailElement : HTMLInputElement | null
    passwordElement : HTMLInputElement | null

    varifyData():number
}

enum Status {
    Varified,
    Unvarified
}

class User implements User_Data{
    firstnameElement : HTMLInputElement | null
    lastnameElement : HTMLInputElement | null
    emailElement : HTMLInputElement | null
    passwordElement : HTMLInputElement | null
    constructor (){
        this.firstnameElement = <HTMLInputElement>document.getElementById("first-name")
        this.lastnameElement = <HTMLInputElement>document.getElementById("last-name")
        this.emailElement = <HTMLInputElement>document.getElementById("email")
        this.passwordElement = <HTMLInputElement>document.getElementById("password")
    }
    varifyData(): Status {
        // console.log(this.firstnameElement,"first name")
        const firstName : string | undefined = this.firstnameElement?.value.trim();
        const lastname : string | undefined = this.lastnameElement?.value.trim();
        const email : string | undefined = this.emailElement?.value.trim();
        const password : string | undefined = this.passwordElement?.value.trim();
        if(nameVarified(firstName, lastname) && emailVarified(email) && passVarified(password)){
            return Status.Varified
        }
        return Status.Unvarified
    }
}


function nameVarified(firstName:string | undefined, lastName:string | undefined) : boolean{
    if(firstName === '' && lastName === ''){
        console.log(firstName)
        alert("First Name and Last Name cannot be empty.")
        return false
    }
    return true
}

function emailVarified(email:string | undefined):boolean{
    const emailPattern : RegExp = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    if(email === '' || email === null || email === undefined){
        alert("Email field Cannot be empty");
        return false
    }
    else if(!emailPattern.test(email)){
        alert("Not a valid emailID");
        return false
    }
    else
    {
        return true
    }
}

function passVarified(password : string | undefined) : boolean{
    const passwordPattern : RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(password === '' || password === null || password === undefined){
        alert("Password field cannot be empty.")
        return false
    }
    else if(!passwordPattern.test(password)){
        alert("Password must have least one number, one lowercase and one uppercase letter,at least six characters.");
        return false
    }
    else{
        return true
    }
}

async function varifyUser() : Promise<void>{

    const newUser: User = new User();
    const varifying : Promise<void> = new Promise<void>((resolve,reject) => { 
        setTimeout(() => {
            if (newUser.varifyData() === Status.Unvarified){
            reject(new Error("There is some discrepency in user Data. Unabele to sign up"))
        }
        else {
            resolve()
        }
        }, 3000)

    })

    return varifying
}

// async function waitForVarification(ms : number){
//     setTimeout(varifyUser, ms)
// }

function showLoader() {
    const loaderElement = document.getElementById("loader");
  
    if (loaderElement) {
        // console.log(loaderElement)
      loaderElement.innerHTML = "Loading....";
    //   console.log(loaderElement)

  }
}

  function hideLoader() {
    const loaderElement = document.getElementById("loader");
  
    if (loaderElement) {
      loaderElement.innerHTML = '';
    }
  }

async function formValidator() {
    try{

        showLoader();
        console.log("loding")
        await varifyUser();
        alert("User Signed up successfully.")
        
        
    }
    catch(err){
        alert(err);
    }
    finally{
        console.log("loding completed")
        hideLoader();
    }
}
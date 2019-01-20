/*
* first name, last name, email, and password (all strings,
* but passwords should not be displayed in plain text inputs
* This application should store its data using localStorage only
* The dashboard should list (in chronological order), all of the "To-Do Lists"
*/

let getValueUser;
let getValueUserPass;
let mainArray = [];
let listArray = [];
let listD = 0;

//Create Main Page For To Do List
function createRegistrationPage() {
    var cc = document.getElementById("b1");
    var para = document.createElement("P");
    para.setAttribute("id","instruction");
    para.innerText = "This Application is to create various To Do lists" +
        " and you can make as many task list as reminder. But Before that" +
        " you have to register your email and password in the following link" +
        " If you already registered than press log in button! ";

    cc.appendChild(para);

    var logIn = document.createElement("BUTTON");
    logIn.setAttribute("id","btn");
    var t = document.createTextNode("Log In");
    logIn.appendChild(t);
    cc.appendChild(logIn);

    var registar = document.createElement("BUTTON");
    registar.setAttribute("id","btnReg");
    var tt = document.createTextNode("Registar");
    registar.appendChild(tt);
    cc.appendChild(registar);

    var createRegForm = document.getElementById("btnReg");
    createRegForm.addEventListener("click",createFrm);

   var dash = document.getElementById("btn");
   dash.addEventListener("click",createLogInUserAnsPassForDashBoard);

}
//create form for registration
function createFrm() {
     removeElement("instruction");
     removeElement("btn");
     removeElement("btnReg");
     var string = "Plese Fill in the blank field and all field must be filled." +
         " Please add password with minimum 7 digit";
     var str = "Enter Your Email";
    addElement("b1","P","regDetail","frm",string);
    //addElement("b1","form","formDetail","frm","");
    //addElement("formDetail","input","input","frm");
    let label1 = "First Name ::";
    let label2 = "Last Name ::";
    addElementAndItsChildEle("b1","div","userInputDiv","box01","firstName",label1);
    addElementAndItsChildEle("b1","div","userInputDiv1","box01","lastName",label2);
    createForm("b1");
}
//remove element function
function removeElement(elementId){
     var elemnt = document.getElementById(elementId);
     elemnt.parentNode.removeChild(elemnt);
}
//create element function
function addElement(parentElement,newElementTagName,newId,newClass,string){
    var temp = document.getElementById(parentElement);
    var newElement = document.createElement(newElementTagName);
    newElement.setAttribute("id",newId);
    newElement.setAttribute("class",newClass);
    newElement.innerText = string;
    temp.appendChild(newElement);

}
//create div and it`s child inside parentElement
function addElementAndItsChildEle(parentElement,newElementTagName,newId,newClass,newIdOFChild,label){
    var temp = document.getElementById(parentElement);
    var newDiv = document.createElement("DIV");
    newDiv.innerHTML = "<span id='firstNameLabel'>"+label + "&nbsp" + "</span>";
    newDiv.setAttribute("class",newClass);
    newDiv.setAttribute("id",newId);
    temp.appendChild(newDiv);

    var firstName = document.createElement("input");
    firstName.setAttribute("type","text");
    firstName.setAttribute("value","");
    firstName.setAttribute("id",newIdOFChild);//"firstName"
    newDiv.appendChild(firstName);

}
//////////////////////
//create form element for user name and password
function createForm(parentElement){
    var temp = document.getElementById(parentElement);
    var f = document.createElement("form");
    f.setAttribute("id","frm");

    var newd1 = document.createElement("div");
    newd1.setAttribute("id","div1");
    newd1.innerHTML = "<span id='formSp1Label'>" + "User Name ::" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;"  + "</span>";
    var i = document.createElement("input");
    i.setAttribute("type","text");
    i.setAttribute("name","username");
    i.setAttribute("id","userSname");
    i.setAttribute("value","no");

    newd1.appendChild(i);

    var newd2 = document.createElement("div");
    newd2.setAttribute("id","div2");
    newd2.innerHTML = "<span id='formSp2Label'>" + "Password ::   "+"&nbsp;" + "&nbsp;"  + "</span>";
    var pass = document.createElement("input");
    pass.setAttribute("type","text");
    pass.setAttribute("password","password");
    pass.setAttribute("id","pass");
    pass.setAttribute("name","Name");

    newd2.appendChild(pass);

    var newd3 = document.createElement("div");
    newd3.setAttribute("id","div3");

    var s = document.createElement("BUTTON");
    s.setAttribute("type","BUTTON");
    s.setAttribute("value","Submit");
    s.setAttribute("id","userPassword");

    newd3.appendChild(s);

    f.appendChild(newd1);f.appendChild(newd2);f.appendChild(newd3);

    //f.appendChild(pass);
    //temp.appendChild(s);
    temp.appendChild(f);
    var btnLabel = document.getElementById("userPassword");
    btnLabel.innerText = "Submit";



    let gv = document.getElementById("userPassword");

    gv.addEventListener("click",getValueS);


}
//get all value fill in the form to save
function getValueS(){
    var user = document.getElementById("userSname").value;
    getValueUser = user;


    var userPass = document.getElementById("pass").value;
    getValueUserPass = userPass;

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    //to reset data

    if (firstName === "clear_key"){
        localStorage.removeItem('FirstName');
        alert("clear key");


        return;
    }
    if (firstName === "clear_data"){
        mainArray = [];
        localStorage.setItem("FirstName",  JSON.stringify(mainArray));
        alert("clear data");
        return;
    }

    if(user === "" || getValueUserPass === "" || user === undefined || getValueUserPass === undefined){
        alert("blank");
        return;
    }
    if (user.length<=3 || getValueUserPass.length <=6){
        alert("Short");
        return;
    }

    alert(getValueUser + " " + getValueUserPass + " "+firstName +" "+lastName);

    var tt = new   SavingObject(firstName,lastName,user,userPass);

    //var storedData = localStorage.getItem('FirstName');
    if("FirstName" in localStorage){
        alert('yes');
        var storedData = localStorage.getItem('FirstName');
        mainArray = JSON.parse(storedData);
        if (checkDuplicateUserName(mainArray,user) === false){
            return;
        }
        mainArray.push(tt);
        localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    } else {
        alert('no');
        mainArray.push(tt);
        localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    }
   /* if (storedData) {
        mainArray = JSON.parse(storedData);
       if (checkDuplicateUserName(mainArray,user) === false){
           return;
       }
        mainArray.push(tt);
        localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    }else{
        localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    }*/
    //localStorage.setItem('FirstName', JSON.stringify(mainArray));

    //var getFirstName = localStorage.getItem('FirstName');
    var storedNames = JSON.parse(localStorage.getItem("FirstName"));
    // alert ('retrievedObject: ' + storedNames[0].userName +""+storedNames[0].lastName);
    console.log(storedNames);
    var ff = document.getElementById("regDetail");
    ff.innerText = "";
    removeElement("userInputDiv");
    removeElement("userInputDiv1");
    removeElement("frm");
    //recreate main page after new registration
    createRegistrationPage();

}
// create main  object for saving all users
function SavingObject(firstName,lastName,userName,password){
    this.firstName = firstName,
    this.lastName = lastName,
    this.userName = userName,
    this.password = password,
        this.fn = function () {
            return this.firstName;
        },
        this.ln = function () {
            return this.lastName;
        }
}
//check function for stopping duplicate user name
function checkDuplicateUserName(arr,name){
    for (var i = 0;i<arr.length;i++){
        if(arr.length == 0){
            alert("no data");
            return ;
        }
        if(arr[i].userName===name){
            alert(name + "Duplicate user, user exist found");
            return false;
        }
    }
}

function createLogInUserAnsPassForDashBoard(){
    //alert();
    removeElement("btn");
    removeElement("btnReg");
    var ff = document.getElementById("instruction");
    ff.innerText = "";
    ff.style.border = "none";

    addElement("b1","div","d1","box02","");

    var lbl = document.getElementById("d1");
    lbl.innerHTML = "<span id='logInUserName'>"+"User Name"+"</span>";
    var user = document.createElement("input");
    user.setAttribute("id","userLn");
    user.setAttribute("value","");
    lbl.appendChild(user);

    addElement("b1","div","d11","box02","");

    var lbl1 = document.getElementById("d11");
    lbl1.innerHTML = "<span id='logInUserNameLbl'>"+"User Password"+"</span>";
    var userPass = document.createElement("input");
    userPass.setAttribute("id","userLnPass");
    userPass.setAttribute("value","");
    lbl1.appendChild(userPass);

    addElement("b1","div","d111","box02","");

    var temp = document.getElementById("d111");
    var btnToCheckUserPass = document.createElement("BUTTON");
    btnToCheckUserPass.setAttribute("id","btnToCheckUser");
    btnToCheckUserPass.innerText = "Press";
    temp.appendChild(btnToCheckUserPass);

    btnToCheckUserPass.addEventListener("click",createDashBoardCheck);

}

function createDashBoardCheck(){
    //alert();
    let username = document.getElementById("userLn").value;
    let userpassword = document.getElementById("userLnPass").value;
    if("FirstName" in localStorage){
        alert('yes');
        var storedData = localStorage.getItem('FirstName');
        mainArray = JSON.parse(storedData);
        for(let i = 0;i<mainArray.length;i++){
            if (mainArray[i].userName === username && mainArray[i].password === userpassword){
                alert("found user " + mainArray[i].userName + " "+username);
                removeElement("userLn");removeElement("userLnPass");
                removeElement("btnToCheckUser");removeElement("logInUserName");
                removeElement("logInUserNameLbl");
                createDashBoard(username,mainArray[i].firstName,mainArray[i].lastName);
                break;
            }else  {
                 if(i===mainArray.length-1){
                     alert("User Name or password is wrong");
                 }
            }

        }

        //mainArray.push(tt);
        //localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    } else {
        alert('no ');
        // mainArray.push(tt);
        //localStorage.setItem("FirstName",  JSON.stringify(mainArray));
    }

}
//dash board dialog box
function createDashBoard(userN,fName,lName) {
    addElement("b1","div","dashboard","box03","");
    let dash = document.getElementById("dashboard");
    dash.innerHTML = "<span id='welcome'>"+"Welcome "+ fName +" "+ lName +"</span>";
    if (listArray.length === 0){
        alert("no list");
        addElement("b1","div","dashboardNoList","box03","");
        let dashnolist = document.getElementById("dashboardNoList");
        dashnolist.innerHTML = "<span id='noList'>"+"You Don`t have list, "+ fName +" "+ lName +"</span>";
    }else{
        alert("u have list");
    }
    addElement("b1","div","createList","box04","");
    let bb1 = document.getElementById("createList");
    let createBtnForList =  document.createElement("button");
    createBtnForList.setAttribute("id","createlistbtn");
    createBtnForList.innerText ="Create List";
    bb1.appendChild(createBtnForList);
    
    let tempBtnCreateList = document.getElementById("createlistbtn");
    tempBtnCreateList.addEventListener("click",listView);
}
function listView() {
    //alert();
    if (listD===1){
        alert("exist");
        return;
    }
    addElement("b1","div","newList","box04","");
    let tt = document.getElementById("newList");
    tt.style.backgroundColor = "black";

    let add  = document.createElement("button");
    add.setAttribute("id","addTaskBtn");
    tt.appendChild(add);

    let remove  = document.createElement("button");
    remove.setAttribute("id","removeTaskBtn");
    tt.appendChild(remove);


    let ul = document.createElement("ul");
    ul.setAttribute("id","ul");
    tt.appendChild(ul);
    //createList("ul");

    let addListBtn = document.getElementById("addTaskBtn");
    addListBtn.innerText = "Add Item";
    let removeListBtn = document.getElementById("removeTaskBtn");
    removeListBtn.innerText = "Remove Item";

    addListBtn.addEventListener("click",makeList);


    listD = 1;
}
function makeList(){
    createList("ul");
}
function createList(parentElement){
    let tt = document.getElementById(parentElement);
    let lli = document.createElement("li");
    lli.setAttribute("class","lis");
    let addthing = prompt("Enter Item :" );
    lli.innerText = addthing;
    listArray.push(lli.innerText);
    //lli.style.fontSize = "28px";
    tt.appendChild(lli);
}

//final function run
createRegistrationPage();
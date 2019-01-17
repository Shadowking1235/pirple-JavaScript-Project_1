//alert();
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

}
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
    createForm("b1");
}
function removeElement(elementId){
     var elemnt = document.getElementById(elementId);
     elemnt.parentNode.removeChild(elemnt);
}
function addElement(parentElement,newElementTagName,newId,newClass,string){
    var temp = document.getElementById(parentElement);
    var newElement = document.createElement(newElementTagName);
    newElement.setAttribute("id",newId);
    newElement.setAttribute("class",newClass);
    newElement.innerText = string;
    temp.appendChild(newElement);

}
function createForm(parentElement){
    var temp = document.getElementById(parentElement);
    var f = document.createElement("form");

    var newd1 = document.createElement("div");
    newd1.setAttribute("id","div1");
    newd1.innerHTML = "<span id='formSp1'>" + "User Name::" + "</span>";
    var i = document.createElement("input");
    i.setAttribute("type","text");
    i.setAttribute("name","username");
    i.setAttribute("id","userSname");

    newd1.appendChild(i);

    var newd2 = document.createElement("div");
    newd2.setAttribute("id","div2");
    newd2.innerHTML = "<span id='formSp1'>" + "Password::" + "</span>";
    var pass = document.createElement("input");
    pass.setAttribute("type","text");
    pass.setAttribute("password","password");
    pass.setAttribute("id","userSname");

    newd2.appendChild(pass);

    var newd3 = document.createElement("div");
    newd3.setAttribute("id","div3");

    var s = document.createElement("input");
    s.setAttribute("type","submit");
    s.setAttribute("value","Submit");
    s.setAttribute("id","userPassword");

    newd3.appendChild(s);

    f.appendChild(newd1);f.appendChild(newd2);f.appendChild(newd3);

    //f.appendChild(pass);
    f.appendChild(s);
    temp.appendChild(f)

}




createRegistrationPage();
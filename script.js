const userName = document.getElementById('username');
const enter = document.getElementById('enter')
const email = document.getElementById('email');
const contactAdmin = document.getElementById('contactAdmin');
const opts = document.getElementById('opts');
const submitBtn = document.getElementById('submitBtn');
const backbtn = document.getElementById('backbtn');
const typeMedi = document.getElementById('typeMedi');
const oilP = document.getElementById('oilP');
const leafP = document.getElementById('leafP');
const oilConcen = document.getElementById('oilConcen');
const oilDose = document.getElementById('oilDose');
const leafDose = document.getElementById('leafDose');
const mediPurpose = document.getElementById('mediPurpose');
const othersNote = document.getElementById("othersNote");
const otherSel = document.getElementById("otherSel");
const saveB = document.getElementById("saveB");
const drivingRecordSign = document.getElementById("drivingRecordSign");
const medicationSign = document.getElementById("medicationSign");
const datePicker1 = document.getElementById("datePicker1");
const datePicker2 = document.getElementById("datePicker2");
const recordBtn = document.getElementById("recordBtn");
const recordHeading = document.getElementById("recordHeading");
const records = document.getElementById("records");
const showTime = document.getElementById('showTime');
const theDate = document.getElementById('theDate');
const today = new Date();
const stopRecordBtn = document.getElementById('stopRecordBtn');
const select = document.getElementById('select');

const show_other = document.getElementById('show_other');
const input_other = document.getElementById('input_other');
const alcoholSign = document.getElementById('alcoholSign');
const alcoholType = document.getElementById('alcoholType');
const alcoholQuantity = document.getElementById('alcoholQuantity');
const alcoholUnit = document.getElementById('alcoholUnit');



enter.addEventListener('click', enterPage);
oilP.addEventListener('click', oilPPage);
leafP.addEventListener('click', leafPPage);
saveB.addEventListener('click', confirmSave);
recordBtn.addEventListener('click', timeStampPage);
stopRecordBtn.addEventListener('click', confirmSave);









function enterPage(){
    enter.classList.add('hide');
    userName.classList.add('hide');
    email.classList.add('hide');
    contactAdmin.classList.remove('hide');
    backbtn.classList.add('hide');
    opts.classList.remove('hide');
    typeMedi.classList.add('hide');
    mediPurpose.classList.add('hide');
    drivingRecordSign.classList.add('hide');
    medicationSign.classList.add('hide');
    datePicker1.classList.add('hide');
    datePicker2.classList.add('hide');
    leafDose.classList.add('hide');
    oilConcen.classList.add('hide');
    oilDose.classList.add('hide');
    saveB.classList.add('hide');
    othersNote.classList.add('hide');
    recordBtn.classList.add('hide'); 
    recordHeading.classList.add('hide');
    records.classList.add('hide');;
    theDate.classList.add('hide');
    stopRecordBtn.classList.add('hide');
    showTime.classList.add('hide');
    alcoholSign.classList.add('hide');
    alcoholType.classList.add('hide');
    alcoholQuantity.classList.add('hide');
    alcoholUnit.classList.add('hide');
    select.classList.add('hide');

    
}



function mediInfoPage(){

    enter.classList.add('hide');
    userName.classList.add('hide');
    opts.classList.add('hide');
    backbtn.classList.remove('hide');
    contactAdmin.classList.add('hide');
    typeMedi.classList.remove('hide');
    datePicker1.classList.add('hide');
    datePicker2.classList.add('hide');
    saveB.classList.remove('hide');


    
}


function othersPage(){
    var x = document.getElementById("mediPurpose").value;

    othersNote.classList.add('hide');

    if (x  == 11){
        othersNote.classList.remove('hide');
    }
    else{
        othersNote.classList.add('hide');
    }
   
}

function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
        el.checked = false;
    });
    id.checked = true;
  }

    
    

function oilPPage(){
   

        oilConcen.classList.remove('hide');
        oilDose.classList.remove('hide');
        leafDose.classList.add('hide')
        mediPurpose.classList.remove('hide');
        
        
    
}

function leafPPage(){ 

        oilConcen.classList.add('hide');
        oilDose.classList.add('hide');
        leafDose.classList.remove('hide')
        mediPurpose.classList.remove('hide');
        

}



function drivingRecoPage(){

    enter.classList.add('hide');
    userName.classList.add('hide');
    opts.classList.add('hide');
    backbtn.classList.remove('hide');
    select.classList.remove('hide');
    input_other.classList.add('hide');
    contactAdmin.classList.add('hide');
    recordBtn.classList.remove('hide');
    showTime.classList.add('hide');

}
function showOther(){
    input_other.classList.remove('hide');

}
function hideOther(){
    input_other.classList.add('hide');

}

function timeStampPage(){
    recordBtn.classList.add('hide');
    showTime.classList.remove('hide');
    theDate.classList.remove('hide');
    document.getElementById('theDate').innerHTML = today.toDateString();
    document.getElementById('showTime').innerHTML = today.toLocaleTimeString();
    stopRecordBtn.classList.remove('hide');


}


function confirmSave(){

    if (confirm('Save successfully')) {
        signInPage();
    }
  
}


function recordHiPage(){

    enter.classList.add('hide');
    userName.classList.add('hide');
    opts.classList.add('hide');
    backbtn.classList.remove('hide');
    contactAdmin.classList.add('hide');
    recordHeading.classList.remove('hide');
    records.classList.remove('hide');
    

    
   

}
function alcoholinfo(){
    enter.classList.add('hide');
    alcoholSign.classList.remove('hide');
    alcoholType.classList.remove('hide');
    alcoholQuantity.classList.remove('hide');
    alcoholUnit.classList.remove('hide');
    contactAdmin.classList.add('hide');
    opts.classList.add('hide');
    backbtn.classList.remove('hide');
    
    
   

 

    
   

}

function manualRecoPage(){

    enter.classList.add('hide');
    userName.classList.add('hide');
    opts.classList.add('hide');
    backbtn.classList.remove('hide');
    contactAdmin.classList.add('hide');
    typeMedi.classList.remove('hide');
    drivingRecordSign.classList.remove('hide');
    medicationSign.classList.remove('hide');
    datePicker2.classList.remove('hide');
    saveB.classList.remove('hide');

    if (oilP.onclick){
        datePicker1.classList.remove('hide');
    }
    else{
        datePicker1.classList.remove('hide');
    }
    

}

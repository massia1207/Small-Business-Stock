/********************************1202 GAINS*********************************************** */
//UI Elements
const chkCcorp = document.querySelector('#ccorp');
const chkSmallBus = document.querySelector('#smallbus');
const chkOrigIssue = document.querySelector('#originalissue');
const chkQualSmallBus = document.querySelector('#qsbreq');
const chkActiveBus = document.querySelector('#activebus');
const btn1202 = document.querySelector("#submit1202");
const message1202 = document.querySelector('.message1202');
const error1202msg = "You must meet all of the criteria above to potentially exclude any capital gains"

function myGains(){
  var gain;
  document.getElementById("buymessage").innerHTML = "";
  document.getElementById("salemessage").innerHTML = "";
  var date1 = new Date(2010, 8, 27);
  var date2 =new Date(2009, 1, 17);
  var date3 = new Date(1993, 7, 10);
  var buyInput = document.getElementById("buydate").value;
  var buyDate = new Date(buyInput);
  var saleInput = document.getElementById("saledate").value;
  var saleDate = new Date(saleInput);
  if(buyInput == null || buyInput == "") {
    document.getElementById("buymessage").innerHTML = "Please choose a date";
    return false;
  }else if (saleDate.getTime() < buyDate.getTime()){
    setMessage1202("The purchase date must occur before the sale date","red",'');
  }else if(saleInput == null || saleInput == ""){
    document.getElementById("salemessage").innerHTML = "Please enter a date";
    return false;
  }else if(chkCcorp.checked == false || chkSmallBus.checked == false || chkOrigIssue.checked == false || chkQualSmallBus.checked == false || chkActiveBus.checked == false){
  setMessage1202(error1202msg,'red','');
  disclaimer1202.textContent = '';  
  }else{
  //do the thing
  var month_diff = saleDate.getTime() - buyDate.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var holdingTime = Math.abs(year - 1970);
  if (holdingTime < 5){
    setMessage1202("You must hold the investment for a minimum of 5 years to qualify for IRS Code Section 1202 excluded gains", 'red', '');
  }else{
    console.log("determining gains");
    var p_time = buyDate.getTime();
    var t1 = date1.getTime();
    var t2 = date2.getTime();
    var t3 = date3.getTime();
    
    if(p_time <= t3){
      setMessage1202("This stock  is not elibible for IRS Code Section 1202 Gain Exclusion because it was issued before August 11, 1993", 'red', '');
    }else{
      if (p_time > t3){
        gain = "50%";
      }
      if(p_time > t2){
        gain = "75%";
      }
      if(p_time > t1){
        gain  = "100%";
      }
      setMessage1202(`${gain} of this gain is eligible for exlusion under IRS Code Section 1202`,'black', 'rgb(153,255,153)'); 
      disclaimer1202.textContent = 'For Discussion Purposes Only.  Please consult with your tax advisor.';
       
    }
  }
 }
}

function setMessage1202(msg, color, bckg){
  message1202.textContent = msg;
  message1202.style.color = color;
  message1202.style.background = bckg;
}


//first quantity begin
const minusButton1=document.getElementById("quantityMinus1");
minusButton1.addEventListener("click",function(){
    const phoneQuan=parseInt(document.getElementById("quantityiPhone").value);
    document.getElementById("quantityiPhone").value=quantityDecreased(phoneQuan);
    if(phoneQuan>0)
    {
        iPhoneValueDecreased();
    }
    calculation();
})
function quantityDecreased(num)
{
    if(num>0)
    {
        return num-1;
    }
    else
    {
        return 0;
    }
}

const plusButton1=document.getElementById("quantityPlus1");
plusButton1.addEventListener("click",function(){
    const phoneQuan=parseInt(document.getElementById("quantityiPhone").value);
    document.getElementById("quantityiPhone").value=quantityIncreased(phoneQuan);
    iPhoneValueIncreased();
    calculation();
})

function quantityIncreased(num)
{
    return num+1;
}

//first quantity ends

//second quantity begin
const minusButton2=document.getElementById("quantityMinus2");
minusButton2.addEventListener("click",function(){
    const phoneQuan=parseInt(document.getElementById("quantityiPhoneCase").value);
    document.getElementById("quantityiPhoneCase").value=quantityDecreased(phoneQuan);
    if(phoneQuan>0)
    {
        iPhoneCaseValueDecreased();
    }
    calculation();
})

function quantityDecreased(num)
{
    if(num>0)
    {
        return num-1;
    }
    else
    {
        return 0;
    }
}

const plusButton2=document.getElementById("quantityPlus2");
plusButton2.addEventListener("click",function(){
    const phoneQuan=parseInt(document.getElementById("quantityiPhoneCase").value);
    document.getElementById("quantityiPhoneCase").value=quantityIncreased(phoneQuan);
    iPhoneCaseValueIncreased();
    calculation();
})

function quantityIncreased(num)
{
    return num+1;
}

//second quantity ends


const removeItem1Button=document.getElementById("removeItem1");
removeItem1Button.addEventListener("click",function(){
    document.getElementById("cart1").style.display="none";
    document.getElementById("totalWithoutTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)-(parseInt(document.getElementById("quantityiPhone").value))*1219;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)-(parseInt(document.getElementById("quantityiPhone").value))*12.19).toFixed(2);

    document.getElementById("totalWithTax").innerText=((parseFloat(document.getElementById("totalWithTax").innerText))-(parseInt(document.getElementById("quantityiPhone").value)*1219)-(parseInt(document.getElementById("quantityiPhone").value)*12.19)).toFixed(2);
    

})

const removeItem2Button=document.getElementById("removeItem2");
removeItem2Button.addEventListener("click",function(){
    document.getElementById("cart2").style.display="none";
    document.getElementById("iPhoneCaseUnitPrice").innerText=0;
    document.getElementById("totalWithoutTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)-(parseInt(document.getElementById("quantityiPhoneCase").value))*59;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)-(parseInt(document.getElementById("quantityiPhoneCase").value))*5.9).toFixed(2);

    document.getElementById("totalWithTax").innerText=((parseFloat(document.getElementById("totalWithTax").innerText))-(parseInt(document.getElementById("quantityiPhoneCase").value)*59)-(parseInt(document.getElementById("quantityiPhoneCase").value)*5.9)).toFixed(2);
})

function iPhoneValueDecreased(){
    let oneUnitPrice=parseInt(document.getElementById("iPhoneUnitPrice").innerText);
    document.getElementById("iPhoneUnitPrice").innerText=oneUnitPrice-1219;
    document.getElementById("totalWithoutTax").innerText=parseInt(document.getElementById("totalWithoutTax").innerText)-1219;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)-12.19).toFixed(2);
    document.getElementById("totalWithTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)+parseFloat(document.getElementById("totalTax").innerText);
}

function iPhoneValueIncreased(){
    //let oneUnitPrice=parseInt(document.getElementById("iPhoneUnitPrice").innerText);
    let iPhoneUnit=parseInt(document.getElementById("quantityiPhone").value);
    document.getElementById("iPhoneUnitPrice").innerText=1219*iPhoneUnit;
    document.getElementById("totalWithoutTax").innerText=parseInt(document.getElementById("totalWithoutTax").innerText)+1219;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)+12.19).toFixed(2);
    document.getElementById("totalWithTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)+parseFloat(document.getElementById("totalTax").innerText);
}

function iPhoneCaseValueIncreased(){
    //let oneUnitPrice=parseInt(document.getElementById("iPhoneUnitPrice").innerText);
    let iPhoneUnit=parseInt(document.getElementById("quantityiPhoneCase").value);
    document.getElementById("iPhoneCaseUnitPrice").innerText=59*iPhoneUnit;
    document.getElementById("totalWithoutTax").innerText=parseInt(document.getElementById("totalWithoutTax").innerText)+59;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)+5.9).toFixed(2);
    document.getElementById("totalWithTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)+parseFloat(document.getElementById("totalTax").innerText);
}
function iPhoneCaseValueDecreased(){
    let oneUnitCasePrice=parseInt(document.getElementById("iPhoneCaseUnitPrice").innerText);
    document.getElementById("iPhoneCaseUnitPrice").innerText=oneUnitCasePrice-59;
    document.getElementById("totalWithoutTax").innerText=parseInt(document.getElementById("totalWithoutTax").innerText)-59;
    document.getElementById("totalTax").innerText=(parseFloat(document.getElementById("totalTax").innerText)-5.9).toFixed(2);
    document.getElementById("totalWithTax").innerText=parseFloat(document.getElementById("totalWithoutTax").innerText)+parseFloat(document.getElementById("totalTax").innerText);
}


function thousandSeparator(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
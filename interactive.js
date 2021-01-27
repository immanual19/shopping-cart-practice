const quantityMinusBtn1=document.getElementById("quantityMinus1");
const quantityPlusBtn1=document.getElementById("quantityPlus1");
const quantityMinusBtn2=document.getElementById("quantityMinus2");
const quantityPlusBtn2=document.getElementById("quantityPlus2");

quantityMinusBtn1.addEventListener("click",function(){
    let quantity1=document.getElementById("quantityiPhone").value;
    if(quantity1>0)
    {
        document.getElementById("quantityiPhone").value=quantity1-1;
    }
    else
    {
        document.getElementById("quantityiPhone").value=0;
    }
  
    overallCalculation();
})

quantityPlusBtn1.addEventListener("click",function(){
    let quantity1=document.getElementById("quantityiPhone").value;
    document.getElementById("quantityiPhone").value=parseInt(quantity1)+1;
    overallCalculation();
})

quantityMinusBtn2.addEventListener("click",function(){
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    if(quantity2>0)
    {
        document.getElementById("quantityiPhoneCase").value=quantity2-1;
    }
    else
    {
        document.getElementById("quantityiPhoneCase").value=0;
    }
    overallCalculation();
})

quantityPlusBtn2.addEventListener("click",function(){
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    document.getElementById("quantityiPhoneCase").value=parseInt(quantity2)+1;
    overallCalculation();
})

function overallCalculation()
{
    let iPhoneUnitPrice=parseInt(document.getElementById("iPhoneUnitPrice").innerText.replace(",",""));
    let quantity1=document.getElementById("quantityiPhone").value;
    let iPhoneCaseUnitPrice=parseInt(document.getElementById("iPhoneCaseUnitPrice").innerText.replace(",",""));
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    let subtotal=thousandSeparator((quantity1*1219)+(quantity2*59));
    let tax=((quantity1*12.19)+(quantity2*5.9));
    
    

    document.getElementById("iPhoneUnitPrice").innerText=thousandSeparator(quantity1*1219);
    document.getElementById("iPhoneCaseUnitPrice").innerText=thousandSeparator(quantity2*59);
    if(parseFloat(tax)>-1000)
    {
        document.getElementById("totalTax").innerText=thousandSeparator(parseFloat(tax).toFixed(2));
    }
    else
    {
        document.getElementById("totalTax").innerText=parseFloat(tax).toFixed(2);
    }
    document.getElementById("totalWithoutTax").innerText=subtotal;
    let total=parseInt(document.getElementById("totalWithoutTax").innerText.replace(",","")) + parseFloat(document.getElementById("totalTax").innerText.replace(",",""));
    document.getElementById("totalWithTax").innerText=thousandSeparator(total);
    

}


const removeItemBtn1=document.getElementById("removeItem1");
const removeItemBtn2=document.getElementById("removeItem2");

removeItemBtn1.addEventListener("click",function(){
    document.getElementById("cart1").style.display="none";
    let quantity1=document.getElementById("quantityiPhone").value;
    let subtotal=parseInt(document.getElementById("totalWithoutTax").innerText.replace(",",""));
    let emptySubtotal=thousandSeparator(subtotal-(quantity1*1219));
    document.getElementById("totalWithoutTax").innerText=emptySubtotal;
    let tax=parseFloat(document.getElementById("totalTax").innerText.replace(",",""));
    let emptyTax=(tax-(quantity1*12.19)).toFixed(2);
    document.getElementById("totalTax").innerText=emptyTax;
    let total=parseFloat(document.getElementById("totalWithTax").innerText.replace(",",""));
    let emptyTotal=total-(quantity1*1219)-(quantity1*12.19);
    document.getElementById("totalWithTax").innerText=emptyTotal.toFixed(2);
})
removeItemBtn2.addEventListener("click",function(){
    document.getElementById("cart2").style.display="none";
    let quantity2=document.getElementById("quantityiPhoneCase").value;
    let subtotal=parseInt(document.getElementById("totalWithoutTax").innerText.replace(",",""));
    let emptySubtotal=thousandSeparator(subtotal-(quantity2*59));
    document.getElementById("totalWithoutTax").innerText=emptySubtotal;
    let tax=parseFloat(document.getElementById("totalTax").innerText.replace(",",""));
    let emptyTax=(tax-(quantity2*5.9)).toFixed(2);
    document.getElementById("totalTax").innerText=emptyTax;
    let total=parseFloat(document.getElementById("totalWithTax").innerText.replace(",",""));
    let emptyTotal=total-(quantity2*59)-(quantity2*5.9);
    document.getElementById("totalWithTax").innerText=emptyTotal.toFixed(2);
})
function thousandSeparator(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
// 1. "quantityMinus1" first -
// 2. "quantityPlus1" first +
//"quantityiPhone" first
// "quantityMinus2" second -
// "quantityPlus2" second +
//"quantityiPhoneCase" second
//"iPhoneUnitPrice" 1 unit price of iPhone
//iPhoneCaseUnitPrice" 1 unit price of iPhone Case


//1
const quantityMinus1Button=document.getElementById("quantityMinus1");
quantityMinus1Button.addEventListener("click",function(){
    let iPhoneQuantity=document.getElementById("quantityiPhone").value;
    //console.log(iPhoneQuantity);
    quantity1Decreased(iPhoneQuantity);
    updateAllValues("iPhoneUnitPrice");

})

function quantity1Decreased(quantity){
    if(quantity>0)
    {
        document.getElementById("quantityiPhone").value=parseInt(quantity)-1;
    }
    else
    {
        document.getElementById("quantityiPhone").value=0;
    }
}
//2
const quantityPlus1Button=document.getElementById("quantityPlus1");
quantityPlus1Button.addEventListener("click",function(){
    let iPhoneQuantity=document.getElementById("quantityiPhone").value;
    //console.log(iPhoneQuantity);
    quantity1Increased(iPhoneQuantity);
    updateAllValues();

})

function quantity1Increased(quantity){
    document.getElementById("quantityiPhone").value=parseInt(quantity)+1;
}

//3
const quantityMinus2Button=document.getElementById("quantityMinus2");
quantityMinus2Button.addEventListener("click",function(){
    let iPhoneCaseQuantity=document.getElementById("quantityiPhoneCase").value;
    console.log(iPhoneCaseQuantity);
    quantity2Decreased(iPhoneCaseQuantity);
    updateAllValues();

})

function quantity2Decreased(quantity){
    if(quantity>0)
    {
        document.getElementById("quantityiPhoneCase").value=parseInt(quantity)-1;
    }
    else
    {
        document.getElementById("quantityiPhoneCase").value=0;
    }
}

//4
//2
const quantityPlus2Button=document.getElementById("quantityPlus2");
quantityPlus2Button.addEventListener("click",function(){
    let iPhoneCaseQuantity=document.getElementById("quantityiPhoneCase").value;
    console.log(iPhoneCaseQuantity);
    quantity2Increased(iPhoneCaseQuantity);
    updateAllValues();

})

function quantity2Increased(quantity){
    document.getElementById("quantityiPhoneCase").value=parseInt(quantity)+1;
}

function updateAllValues(){
    const iPhoneUnitPrice=document.getElementById("iPhoneUnitPrice").innerText.replace(",","");
    const iPhoneUnitPriceNumber=parseInt(iPhoneUnitPrice);
    let iPhoneQuantity=document.getElementById("quantityiPhone").value;
    let iPhoneQuantityNumber=parseInt(iPhoneQuantity);
    let iPhoneTax=iPhoneQuantityNumber*12.19;
    document.getElementById("iPhoneUnitPrice").innerText=thousandSeparator(1219*iPhoneQuantityNumber);


    const iPhoneCaseUnitPrice=document.getElementById("iPhoneCaseUnitPrice").innerText.replace(",","");
    const iPhoneCaseUnitPriceNumber=parseInt(iPhoneCaseUnitPrice);
    let iPhoneCaseQuantity=document.getElementById("quantityiPhoneCase").value;
    let iPhoneCaseQuantityNumber=parseInt(iPhoneCaseQuantity);
    let iPhoneCaseTax=iPhoneCaseQuantityNumber*5.9;
    document.getElementById("iPhoneCaseUnitPrice").innerText=thousandSeparator(59*iPhoneCaseQuantityNumber);

    const priceOfiPhone=document.getElementById("iPhoneUnitPrice").innerText.replace(",","");
    const priceOfiPhoneNumber=parseFloat(priceOfiPhone);
    const priceOfiPhoneCase=document.getElementById("iPhoneCaseUnitPrice").innerText.replace(",","");
    const priceOfiPhoneCaseNumber=parseFloat(priceOfiPhoneCase);
    document.getElementById("totalWithoutTax").innerText=thousandSeparator((priceOfiPhoneNumber+priceOfiPhoneCaseNumber).toFixed(2));
    document.getElementById("totalTax").innerText=thousandSeparator((iPhoneTax+iPhoneCaseTax).toFixed(2));
    document.getElementById("totalWithTax").innerText=thousandSeparator((priceOfiPhoneNumber+iPhoneTax+priceOfiPhoneCaseNumber+iPhoneCaseTax).toFixed(2));
    
}

const removeItem1Button=document.getElementById("removeItem1");
removeItem1Button.addEventListener("click",function(){
    vanishItem("cart1");
})
const removeItem2Button=document.getElementById("removeItem2");
removeItem2Button.addEventListener("click",function(){
    vanishItem("cart2");
    
})

function vanishItem(id){
    document.getElementById(id).style.display="none";
}

const sectionRemoveButton=document.getElementById("checkout");
sectionRemoveButton.addEventListener("click",function(){
    
    sectionVanish("wholeSection");
})

function sectionVanish(id){
    let iPhoneQuantity=document.getElementById("quantityiPhone").value;
    let iPhoneQuantityNumber=parseInt(iPhoneQuantity);
    let iPhoneCaseQuantity=document.getElementById("quantityiPhoneCase").value;
    let iPhoneCaseQuantityNumber=parseInt(iPhoneCaseQuantity);
    if(iPhoneQuantityNumber!=0 || iPhoneCaseQuantityNumber!=0)
    {
        document.getElementById(id).style.display="none";
    }
    else
    {
        document.getElementById(id).style.display="block";
    }
}

//Thousand Separator
function thousandSeparator(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
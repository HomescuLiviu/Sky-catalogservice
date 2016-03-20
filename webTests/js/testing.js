function sendDataToUrl(url, customerID, resultDiv, resultparser){
    $.ajax({
        url: url,
        headers: { customerID: customerID},
        success: function(result){
            $(resultDiv).html(result);
            resultparser(resultDiv);
        }});
}

function parseScenario1(resultDiv){
var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
         listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
         listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
         listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }

    updateTestStatus(listOfErrors, "Test passes :<br> Customer can see only default products");
}

function parseScenario2(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }

    if ($(resultDiv).text().indexOf("LIVERPOOL") > 0){
        listOfErrors = listOfErrors.concat("<br>Customer sees products that are not for his locationID");
    }

    if ($(resultDiv).text().indexOf("PARIS") > 0){
        listOfErrors = listOfErrors.concat("<br>Customer sees products that are not for his locationID");
    }
    updateTestStatus(listOfErrors, "Test passes :<br> Customer can see products <br> only for LONDON and the default products");
}


function parseScenario3(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    listOfErrors = selectTwoProducts(listOfErrors, "prod_1", " prod_6", "Arsenal TV", "Sky News");

    updateTestStatus(listOfErrors, "Test passes :<br> Customer can add products <br> only for LONDON and the default products");

}


function parseScenario4(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    listOfErrors = selectTwoProducts(listOfErrors, "prod_6", " prod_7", "Sky News", "Sky Sport News");

    updateTestStatus(listOfErrors, "Test passes :<br> Customer without location <br> can add only default products");
}

function parseScenario5(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    listOfErrors = selectTwoProducts(listOfErrors, "prod_6", " prod_7", "Sky News", "Sky Sport News");

    setTimeout(function () {checkoutProductsAndUpdateStatus(listOfErrors, "Test passes :<br> Customer without location <br> can order only default products" ,"customer_not_exists","Sky News", "Sky Sport News");}, 10 * 1000);

}

function parseScenario6(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    listOfErrors = selectTwoProducts(listOfErrors, "prod_4", " prod_7", "French TV", "Sky Sport News");

    setTimeout(function () {checkoutProductsAndUpdateStatus(listOfErrors, "Test passes :<br> Customer with location <br> can order default and Paris products" ,"customerY","French TV", "Sky Sport News");}, 10 * 1000);

}

function checkoutProductsAndUpdateStatus(previousListOfErrors, successMessage, customerID, firstProductName, secondProductName){
    var listOfErrors = checkoutProducts(previousListOfErrors, customerID, firstProductName, secondProductName);
    updateTestStatus(listOfErrors, successMessage);
}

function checkoutProducts(previousListOfErrors, customerID, firstProductName, secondProductName){
    var listOfErrors = previousListOfErrors;
    if (typeof $("input[id=checkout]").text() == 'undefined' ) {
         listOfErrors = listOfErrors.concat("<br>Checkout button is missing or not working properly");
         return listOfErrors;
    }
    $("input[id=checkout]").click();
    if ($("#resulttext").text().indexOf(firstProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Confirmation page did not contain product : "+firstProductName);
    }
    if ($("#resulttext").text().indexOf(secondProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Confirmation page did not contain product : "+secondProductName);
    }
    if ($("#resulttext").text().indexOf(customerID) <0) {
                listOfErrors = listOfErrors.concat("<br>Confirmation page did not contain customerID : "+customerID);
    }
    return listOfErrors;

}

function updateTestStatus(listOfErrors, successText){

    if (listOfErrors.length <= 0){
            $("#success").html(successText);
        } else {
            $("#errors").html(listOfErrors);
        }
}

function selectTwoProducts(listOfPreviousErrors, firstProduct , secondProduct, firstProductName, secondProductName){
    var listOfErrors = listOfPreviousErrors;
    $("input[id="+firstProduct+"]").click();
    $("input[id="+secondProduct+"]").click();

    if ($("li[id="+firstProduct+"]").text().indexOf(firstProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Customer cannot add "+firstProductName+" to basket");
    }
    if ($("li[id="+secondProduct+"]").text().indexOf(secondProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Customer cannot add "+secondProductName+" to basket");
    }
    return listOfErrors;

}

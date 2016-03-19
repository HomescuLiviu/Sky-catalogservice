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
    selectTwoProductsAndUpdateStatus(listOfErrors, "prod_1", " prod_6", "Arsenal TV", "Sky News", "Test passes :<br> Customer can add products <br> only for LONDON and the default products");
}


function parseScenario4(resultDiv){
    var listOfErrors = '';
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
        listOfErrors = listOfErrors.concat("<br>User with no location id can not see Sky Sport News");
    }
    selectTwoProductsAndUpdateStatus(listOfErrors, "prod_6", " prod_7", "Sky News", "Sky Sport News", "Test passes :<br> Customer without location <br> can add only default products");
}

function checkConfirmationPage(){

}

function updateTestStatus(listOfErrors, successText){
    if (listOfErrors.length <= 0){
             $("#success").html(successText);
        } else {
            $("#errors").html(listOfErrors);
        }
}

function selectTwoProductsAndUpdateStatus(listOfPreviousErrors, firstProduct , secondProduct, firstProductName, secondProductName, successMessage){
    var listOfErrors = listOfPreviousErrors;
    $("input[id="+firstProduct+"]").click();
    $("input[id="+secondProduct+"]").click();

    if ($("li[id="+firstProduct+"]").text().indexOf(firstProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Customer cannot add "+firstProductName+" to basket");
    }
    if ($("li[id="+secondProduct+"]").text().indexOf(secondProductName) <0) {
            listOfErrors = listOfErrors.concat("<br>Customer cannot add "+secondProductName+" to basket");
    }

    updateTestStatus(listOfErrors, successMessage);
}

function checkout(){
     sendDataToUrl("http://localhost:8082/productSelection", "customerR", "#resulttext" , checkConfirmationPage);

}
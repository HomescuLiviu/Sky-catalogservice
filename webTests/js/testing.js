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

    if ($(resultDiv).text().indexOf("LONDON") <= 0){
        listOfErrors = listOfErrors.concat("<br>Customer can not see his locationID");
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

    if ($(resultDiv).text().indexOf("LONDON") <= 0){
        listOfErrors = listOfErrors.concat("<br>Customer can not see his locationID");
    }

    if ($(resultDiv).text().indexOf("LIVERPOOL") > 0){
        listOfErrors = listOfErrors.concat("<br>Customer sees products that are not for his locationID");
    }

    if ($(resultDiv).text().indexOf("PARIS") > 0){
        listOfErrors = listOfErrors.concat("<br>Customer sees products that are not for his locationID");
    }

    selectTwoProductsAndCheckout(listOfErrors);
}

function checkConfirmationPage(){
alert("confirmation page");
}

function updateTestStatus(listOfErrors, successText){
    if (listOfErrors.length <= 0){
             $("#success").html(successText);
        } else {
            $("#errors").html(listOfErrors);
        }
}

function selectTwoProductsAndCheckout(listOfPreviousErrors){
    var listOfErrors = listOfPreviousErrors;
    $('#check_1_product_1').attr('checked', true);
    $('#check_2_product_1').attr('checked', true);
    if ($('basket').text().indexOf($('#categ_1_product_1').text()) <=0) {
            listOfErrors = listOfErrors.concat("<br>Customer cannot add products to basket");
    } else {
        sendDataToUrl("http://localhost:8082/productSelection", "customerR", "#resulttext" , checkConfirmationPage);
    }

    updateTestStatus(listOfErrors, "Test passes :<br> Customer can see products <br> only for LONDON and the default products");

    alert(listOfErrors);
}
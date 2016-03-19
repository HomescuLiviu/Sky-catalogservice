function sendDataToUrl(url, customerID, resultDiv, resultparser){
        alert("sending data");
        $.ajax({
            url: url,
            headers: { customerID: customerID},
            success: function(result){
                $(resultDiv).html(result);
                alert(resultparser);
                resultparser(resultDiv);
            }});
        alert("data sent");

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

    alert("///" + ($(resultDiv).text().indexOf("News") > 0) + "// "+ $(resultDiv).text() );


}

function updateTestStatus(listOfErrors, successText){
    if (listOfErrors.length <= 0){
             $("#success").html(successText);
        } else {
            $("#errors").html(listOfErrors);
        }
}
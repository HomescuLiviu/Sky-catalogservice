function sendDataToUrl(url, customerID, resultDiv, resultparser){
        alert("sending data");
        $.ajax({
            url: url,
            data: { customerID: customerID},
            success: function(result){
                $(resultDiv).html(result);
                alert(resultparser);
                resultparser(resultDiv);
            }});
        alert("data sent");

}

function parseScenario1(resultDiv){
    if ($(resultDiv).text().indexOf("Sky News") <= 0){
         $("#errors").html("The list of products does not contain Sky News");
    }
    if ($(resultDiv).text().indexOf("Sky Sport News") <= 0){
         $("#errors").html("The list of products does not contain Sky Sport News");
    }
    if ($.trim($("#errors").text()).length <= 0){
         $("#success").html("Test passes");
    }

    alert("///" + ($(resultDiv).text().indexOf("News") > 0) + "// "+ $(resultDiv).text() );


}
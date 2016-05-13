
    /*Using Jquery Javascript Library for easier access over DOM Elements*/

   $(document).ready(function(){
      
      $(".prescreen-input").val("John:2\nJane:3\nJohn:4\nJane:5");


        $(".prescreen-button").click(function(){
            /*For change in TextBox without refreshing - Jquery animation*/
            $("#errDiv").hide();
            $("#resultDiv").hide();
            var sumObj = calculateSumForUsers($(".prescreen-input").val());
           
            console.log(sumObj);
            if(!_.isEmpty(sumObj)){
              renderHTML(sumObj);
            }
            
        });

    });

    function renderHTML(sumObj){
       
            $("#resultDiv").empty();
            $("#errDiv").empty();
       
              /*Iterating Object skipping prototype Objects - best option is to use underscore js*/
            _.each(sumObj, function(value, key){
                      if(key == "err"){
                         $( "<p></p>", {
                                text: "Please check the following Inputs :"
                              
                            }).appendTo( "#errDiv" );
                          value.split("|").forEach(function(eachErr){
                              $( "<p></p>", {
                                text: eachErr
                              
                            }).appendTo( "#errDiv" );
                        });
                        $("#errDiv").show(  );
                      }else{
                        console.log(value +" : "+ key);
                       
                       var isPalindrome =  PalindromeChecker(key);
                       if(isPalindrome === true && $("#palindromeCheck").is(':checked')){
                          $( "<p></p>", {
                                text: "The total for "+key+" is ",
                                
                            }).append($('<span/>', 
                                        {text: value,
                                        "class": "prescreen-palindrome"}
                              )).appendTo( "#resultDiv" );
                       }else{
                            $( "<p></p>", {
                                text: "The total for "+key+" is "+value,
                                "class":"prescreen-output",
                            }).appendTo( "#resultDiv" );
                       }

                      }
                    
                    
                });
                $("#resultDiv").show("500");
              
    }

    function calculateSumForUsers(inputFromTextArea){
       /*split on new-line and a filter to exclude if any empty lines are there in the input */
       var inputText = inputFromTextArea.split("\n").filter(function(el) {return el.length != 0});
            var inputObj = {};
            var errObj = {};
            inputText.forEach(function(eachLine) {

                if(validateInputEachLine(eachLine) ===  true){

                var nameVal = eachLine.split(":");

                    if($("#ignoreCaseCheck").is(':checked')){

                        nameVal[0] = capitalizeFirstChar(nameVal[0].toLowerCase());

                    }
                    if(inputObj[nameVal[0]] === undefined){

                        inputObj[nameVal[0]] = parseInt(nameVal[1],10);
                        
                    }else{
                        inputObj[nameVal[0]] =  inputObj[nameVal[0]] + parseInt(nameVal[1],10);
                    }
                
                }else{
                  if(_.isEmpty(errObj)){
                    errObj["err"] =  eachLine;
                  }else{
                    errObj["err"] = errObj["err"] + "|" + eachLine;
                  }
                  
                }
             
            });

            if(!_.isEmpty(errObj)){
              return errObj;
            }
              return inputObj;
            
       
    }
    function capitalizeFirstChar(str)
    {
        return str[0].toUpperCase() + str.slice(1);
    }
    function validateInputEachLine(eachLine){
      
          var validInput = eachLine.match(/^[A-za-z. ]+:[0-9]+$/);
          if(validInput === null){
            return false;
          }
          return true;

    }
    /*Compares only n/2 chars in the string*/
    function PalindromeChecker(text) {
        var cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
         if (cleanText === undefined) {
          return false;
        }
        var left = 0;
        var right = cleanText.length - 1;
        while (left < right) {
          if (cleanText[left++] !== cleanText[right--]) {
            return false;
          }
        }
        console.log(text+" is a palindrome !!");
        return true;
       
      }
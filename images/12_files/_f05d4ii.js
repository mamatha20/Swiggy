try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "33l1356") {
        var email;
       var phone_no;
      
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                console.log("object");
                for (var keys in data.questionResponses[i].value.values) {
                    
                    if (keys == "Your Email Address") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                  
                  if (keys == "Phone No.") {
                        phone_no = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
       
        console.log("we_email", email);
      
       console.log("we_phone", phone_no);
        if (
            webengage &&
            webengage.state &&
            typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null ||
                webengage.state.getForever().cuid === undefined) &&
            email !== null
        ) {
            webengage.user.login(email);
          webengage.user.setAttribute({               
                "we_email": email,
              "we_phone": phone_no
            });
          webengage.track('intl_rakhi_lc', {
                "we_email": email,
                "we_phone": phone_no,
                "surveyId": data.surveyId
            });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4ii');
	 }
 }

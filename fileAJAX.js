
    var name= "Ashish";           //-----------This is simple data  variable-----------------
    var email= "ashish@gmail.com";            //-----------This is simple data in variable-----------------
  
    $.ajax({
        method: 'POST',
        type: 'json',
        url: "http://localhost:3000",
        data: {name: name, email: email},    //-----------We have created an object of data-----------------
        success: function( data ){      //-----------This is data to be send-----------------
            if(data){
                console.log("This is response data we are getting from node at backend "+data);         //-----------This is the data we are receiving from response of server-----------------
            }
        },
        error: function (request, status, error) {
             console.log("This is the error "+error);
        }
		});


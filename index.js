$(document).on('click', '.btn', function(){
  let input = $("#inputData").val();
  let id = $(this)[0].id;

  if(id == "clear")
  {
    $("#inputData")[0].value = "";
    $("#convertedText").html("");
  }
  else
  {
    if(input == "")
    {
      alert('Input is empty!');
      return false;
    }
    let url = "";
    if(id == "yoda")
      url = "https://api.funtranslations.com/translate/yoda.json?text="+input;
    else if(id == "sith")
      url = "https://api.funtranslations.com/translate/sith.json?text="+input;
    else
      url = "https://api.funtranslations.com/translate/minion.json?text="+input;


    fetch(url)
    .then(response => 
      response.json())
    .then(function(data){
      $("#convertedText").html(data.contents.translated);
      })
    .catch(function(error){ 
      $("#convertedText").html('Error');
    });

  }
});
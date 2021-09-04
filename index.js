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
      url = "https://api.funtranslations.com/translate/yoda.json";
    else if(id == "sith")
      url = "https://api.funtranslations.com/translate/sith.json";
    else
      url = "https://api.funtranslations.com/translate/minion.json";

    $.ajax({
      url: url,
      method: 'GET',
      data: {"text": input},
      success: function(response) {
        console.log(response);
        $("#convertedText").html(response.contents.translated);
      },
      error: function(response){
        console.log(response);
        $("#convertedText").html("Error!");
      }
    });
  }
});
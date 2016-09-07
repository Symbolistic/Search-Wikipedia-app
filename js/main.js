$(document).ready(function(){
  
  function main() {
    $("form").submit(function(e){
      e.preventDefault();
      var text = $("#searchbox").val();
      var api = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&namespace=0&format=json&callback=?&search=";
      $.getJSON(api + text, function(data){
      getResults(data);
    });
    });
  }
  
  function getResults (data){
    $(".results").remove();
    var info = data;
    
    // Loop through the info
    for(var i=0;i<info[1].length;i++){
      
      //Append all info, used class "results" for styling and made a unique id to seperate each result.
      $(".search-results").append("<div class='results' id='[i]'><a href='" + info[3][i] + "'><h1>" + info[1][i] + "</h1><p>" + info[2][i] + "</p></a></div>");
      $("[i]").wrap("<a href='info[3][i]'>" );

    }
    $(".results").slideDown(1500);
  }
  
  main();
  
});
function getData() {
  var input = document.getElementById("search-bar").value;
  console.log(input);
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions%7Cextracts&titles=Main+Page&generator=search&rvprop=content&exsentences=1&exlimit=20&exintro=1&gsrsearch=" + input + "&gsrnamespace=0&gsrlimit=10&callback=?", function(data) {
    display(data);
  });
}

function display(data) {
  var myNode = document.getElementById("results");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  $.each(data.query.pages, function(index, value) {
    //console.log(value.title, value.extract);
    $("#results").append("<a href='https://en.wikipedia.org/wiki/" + encodeURIComponent(value.title) + "' target='_blank'><div class='search-result'><h3>" + value.title + "</h3>" + value.extract + "</div></a>");
  })
}

$(document).ready(function() {
  $("#search-bar").focus();
  $("#search-button").on("click", getData);
});
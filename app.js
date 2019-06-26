// // from data.js
var tableData = data;

var tbody = d3.select("tbody");
function BuildTable(data) {
  tbody.html("")
  console.log(data);
}

// YOUR CODE HERE!
data.forEach(function(sighting){
    console.log(sighting)
    var row = tbody.append("tr")

    Object.entries(sighting).forEach(function([key,value]){
        console.log(`${key}, ${value}`)

        row.append("td").text(value)
    })
});   

var submit = d3.select("#filter-btn");
submit.on("click",function(){

  d3.event.preventDefault();
  var inputElement=d3.select("#datetime.form-control");
  var inputValue=inputElement.property("value");
  console.log(inputValue);
  
  var filteredData=data.filter(row=>row.datetime ===inputValue);
  
  BuildTable(filteredData);

filteredData.forEach(function(x){
  console.log(x)
  var row = tbody.append("tr")

  Object.entries(x).forEach(function([key,value]){
      console.log(`${key}, ${value}`)

      row.append("td").text(value)
  })
});
});



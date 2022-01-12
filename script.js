var today = moment();
var CurrentTime = document.getElementsByTagName("h2");
var Block = [];
$("#currentDay").text(today.format("dddd, MMM Do"));

$("button").on("click", function (event) {
  for (var i = 0; i < 24; i++) {
    var BlockInput = $("#hour-" + i).val();
    console.log(BlockInput);
    Block[i] = BlockInput
    saveBlock();
  }
});

function setBlock(){
  if (localStorage.getItem("Block") != null) {
    Block = JSON.parse(localStorage.getItem("Block"));
    renderBlock();
}};
function saveBlock() {
    localStorage.setItem("Block", JSON.stringify(Block));
  }

function renderBlock(){
    for (var i = 0; i < 24; i++) {
        $("#hour-" + i).text(Block[i])
    } 
}


function timeColor() {
  for (var i = 0; i < 24; i++) {

    var timeData = parseInt(CurrentTime[i].getAttribute("data-time"));

    if (moment().format("k") > timeData) {
      console.log("past");
      $("#hour-" + i).addClass("past-time");
    } else if (moment().format("k") < timeData) {
      console.log("future");
      $("#hour-" + i).addClass("future-time");
    } else {
      console.log("present");
      $("#hour-" + i).addClass("present-time");
    }
  }
}
timeColor();
setBlock();

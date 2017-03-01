$(document).ready(function() {
  //draw initial grid
  drawGrid(16);

  //monitors and colors squares
  $(document).on('mouseenter', '.square', function() {
    $(this).css("background-color", "lightblue");
  });

});

function drawGrid(gridSize) {
  //Add rows
  for (var i = 0; i < gridSize; i++) {
    $('#grid').append('<tr></tr>');
  }
  //Fill rows
  for (var i = 0; i < gridSize; i++) {
    $('tr').append('<td class="square"></td>');
  }
}

function resetGrid() {
  $("#grid").empty();
  var squaresPerSide = prompt("How many squares per side would you like?", "16");
  drawGrid(squaresPerSide);
}
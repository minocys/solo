//Board constructor
var GOboard = function(size){
  this.size = size || 19;
  this.board = this.createBoard(this.size);
  this.currentColor = this.black;
  this.last_move = null;
  
  //pieces
  this.empty = 0;
  this.black = 1;
  this.white = 2;
}

//Create array representation of board
GOboard.prototype.createBoard = function(size){
  var board = []
  for( var i = 0; i < size*size; i++ ){
    board[i] = this.empty;
  }
  return board;
}

//Checks if position is on the board
GOboard.prototype.isOnBoard = function(x, y){
  if( x < 0 || x >= this.size || y < 0 || y >= this.size){
    return false;
  }
  return true;
}

//checks if spot is empty
GOboard.prototype.isEmptyPos = function(x, y){
  return this.get(x, y) === this.empty;
}

//Get piece at position
GOboard.prototype.get = function(x, y){
  if(this.isOnBoard(x, y)){
    return this.board[(x * this.size) + y];
  }
  return null;
}

//Set piece at position
GOboard.prototype.set = function(x, y, empty){
  new_piece = empty || this.currentColor;
  this.board[(x * this.size) + y] = new_piece;
}

//Get opposite color
GOboard.prototype.otherColor = function(){
  return (this.currentColor === this.black) ? this.white : this.black;
}

//for switching current piece color after play
GOboard.prototype.changePlayer = function(){
  this.currentColor = this.otherColor;
}


module.exports = GOboard;
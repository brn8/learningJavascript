function tiles(f,r){
    this.files = f;
    this.row = r;
    if(this.corruption()){
    	this.files="a";
    	this.row = "1";
    }
}
tiles.prototype.print= function (){
    console.log(this.files);
    console.log(this.row);
}
tiles.prototype.corruption=function(){
	var isCorrupt = false;
	if(this.files<"a"|| this.files>"h" || this.row<"0" || this.row>"8"){
		isCorrupt = true;
	}
	return isCorrupt;
}
// King.
// Rook.
// Bishop.
// Queen.
// Knight.
// Pawn.
function piece(c,t,l){
	this.color= c;
	this.type = t;
	this.location = l;
}
piece.prototype.print = function (){
	console.log(this.color);
	console.log(this.type);
	this.location.print();
}


var t1 = new tiles('a',1);
var t2 = new tiles('b',9);
var p1 = new piece(true,"pawn",t1)
var p2 = new piece(false,"queen",t2)
p1.print()

t2.print();
if(t2.corruption()){
	console.log("It's corrupted");
}
else{
	console.log("It's Not corrupted")
}

function board(){
	var a = new Array(8);
	a[1]="a";
	a[2]="b";
	a[3]="c";
	a[4]="d";
	a[5]="e";
	a[6]="f";
	a[7]="g";
	a[8]="h";
	this.b = new Array(64); var i=0;
	for(var r=1; r<=8; r++){
		for(var f=1; f<=8; f++){
			this.b[i]= new tiles(a[f],r);
			i++;
		}
	}
}
board.prototype.print = function(){
	for(var i=0; i<64; i++){
		this.b[i].print();
	}
}

var b1 = new board();
b1.print();

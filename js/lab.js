function halloWereld(aantal){ 
	for(var i=1; i <= aantal; i++)
   		document.write(i + " Hallo Wereld! <br/>" );

}

halloWereld(3);
halloWereld(7);
var a = parseInt(prompt('vul een getal in'));
var b = parseInt(prompt('vul een getal in'));

var naam;
var leeftijd;


document.write(a + " + " + b + " = " + addition(a,b));



function addition(number1, number2){
	return number1 + number2;

}
document.write('<br>');


while(naam != "stop"){
	naam = prompt("Geef je naam");
	if(naam != 'stop'){
		 leeftijd = prompt('geef je leeftijd');
		 document.write(naam + ', ' + leeftijd + "<br/>");
	}	

}

var vraag;
vraag = prompt('vul hier je tafel in')
tafelVan(vraag);

function tafelVan(getal){
	for(var f=1; f<=getal; f++){
		for(var i=1; i<=10;i++)
		document.write(i + ' x ' + f + ' = ' + i*f + '<br/>');
}
}




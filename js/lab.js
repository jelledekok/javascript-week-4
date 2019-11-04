function halloWereld(aantal){ 
	for(var i=1; i <= aantal; i++)
   		document.write(i + " Hallo Wereld! <br/>" );

}

halloWereld(3);
halloWereld(7);
var a = parseInt(prompt('vul een getal in'));
var b = parseInt(prompt('vul een getal in'));



document.write(a + " + " + b + " = " + addition(a,b));



function addition(number1, number2){
	return number1 + number2;
}



var bestelling;
var aantalfris=0;
var aantalbier=0;
var aantalwijn=0;
var aantal;
var fristotaal=0;
var biertotaal=0;
var wijntotaal=0;
var bal8=0;
var bal16=0;
var aantalballen=0;
var bal16totaal=0;
var bal8totaal=0;
while(bestelling != "stop"){
	bestelling = prompt("wat wilt u bestellen");
		if(bestelling == 'fris'){
			aantal = parseInt(prompt('hoeveel fris wilt u?'));
			aantalfris = aantalfris + aantal;
			console.log('aantalfris ' + aantalfris);
		}
		else{
			if(bestelling == 'bier'){
				aantal = parseInt(prompt('hoeveel bier wilt u?'));
				aantalbier = aantalbier + aantal;
				console.log('aantalbier ' + aantalbier);
				}
			else{
				if(bestelling == 'wijn'){
					aantal = parseInt(prompt('hoeveel wijn wilt u?'));
					aantalwijn = aantalwijn + aantal;
				}
				else{
					if(bestelling == 'snack'){
						aantalballen = prompt('wilt u 8 of 16 bitterballen?');
						if(aantalballen == '8'){
							aantal = parseInt(prompt('hoeveel bakjes van 8 bitterballen wilt u?'));
							bal8 = bal8 + aantal;
						}
						else{
							if(aantalballen == '16'){
							aantal = parseInt(prompt('hoeveel bakjes van 16 bitterballen wilt u?'));
							bal16 = bal16 + aantal;
							}
							else{
								alert('sorry u kunt alleen tussen 8 en 16 kiezen');
							}
						}

					}
					else{
						if(bestelling != 'stop'){
							alert('sorry dat hebben we niet, we heben wel wijn bier en fris')
						}
					}
				}
			}
		}
	
}
if (bestelling == "stop"){
		document.write('<h3>rekening eethuis simple</h3><br><br>');
		document.write('locatie: file:///C:/DVCAO/J1B1/javascript%20week%204/horica-app.html<br>')
	    document.write('u bent geholpen door: CPU <br> <br>');
	    document.write('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br>');
		document.write('fris = ' + aantalfris + ' × €2,20 = '+ ' € ' + aantalfris*2.20 + ' <br>');
		document.write('bier = ' + aantalbier + ' × €3,50 = '+ ' € ' + aantalbier*3.50 + ' <br>');
		document.write('wijn = ' + aantalwijn + ' × €4 = '+ ' € ' + aantalwijn*4 + '<br>');
		document.write('8 bitterballen = ' + bal8 + ' × €2,25 = ' + '€ ' + bal8*2.25 + '<br>');
		document.write('16 bitterballen = ' + bal16 + ' × €4,10 = ' + '€ ' + bal16*4.10 + '<br><br>');
		bal8totaal = bal8*2.25;
		bal16totaal = bal16*4.10;
		fristotaal = aantalfris*2.20;
		biertotaal = aantalbier*3.50;
		wijntotaal = aantalwijn*4.00;
		document.write('<h4>totaal ='  + ' € ' + fristotaal + '+' + ' € ' + biertotaal + '+' + ' € ' + wijntotaal + '+' + ' € ' + bal8totaal + '+' + ' € ' + bal16totaal + '=' + ' € ' + (fristotaal+biertotaal+wijntotaal+bal16totaal+bal8totaal) + '</h4>');
		document.write('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br>');
	}
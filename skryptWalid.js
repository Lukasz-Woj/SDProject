//var but = document.getElementById("but1");


var imie = document.getElementById("name");
var nazwisko = document.getElementById("surname");
var nazwaFirmy = document.getElementById("firma");
var NIP = document.getElementById("NIP");
var telefon = document.getElementById("Tel");
var mail = document.getElementById("mail");


var AdrDom = document.getElementById("ADdom");
var Logo = document.getElementById("Logo");
var AdrStr = document.getElementById("ADstr");
var ChatTak = document.getElementById("Ctak");
var ChatNie = document.getElementById("Cnie");
var SocMedTak = document.getElementById("SMtak");
var SocMedNie = document.getElementById("SMnie");
var SklTak = document.getElementById("SKtak");
var SklNie = document.getElementById("SKnie");
var JezTak = document.getElementById("Jtak");
var JezIlosc = document.getElementById("jezIlosc");
var RespTak = document.getElementById("Rtak");
var RespNie = document.getElementById("Rnie");
var HostTak = document.getElementById("Htak");
var HostNie = document.getElementById("Hnie");
var ServTak = document.getElementById("Stak");
var ServNie = document.getElementById("Snie");
var GrafTak = document.getElementById("Gtak");
var GrafNie = document.getElementById("Gnie");
var DomTak = document.getElementById("Dtak");
var DomNie = document.getElementById("Dnie");
var ObrTak = document.getElementById("Otak");
var ObrNie = document.getElementById("Onie");
var IloscPodstr = document.getElementById("iloscStron");




document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
	
	let formErrors = [];
	
	const wImie = /[a-z]/;
	const wNIP = /PL[0-9]{3}\s[0-9]{6}\s[0-9]{1}/;
	const wTel = /[0-9]{9}/;
	
	
	
	if(wImie.test(imie.value) == false){
		formErrors.push("Wypełnij poprawnie pole z imieniem");
	}
	
	
	if(wImie.test(nazwisko.value) == false){
		formErrors.push("Wypełnij poprawnie pole z nazwiskiem");
	}
	
	if(wNIP.test(NIP.value) == false){
		formErrors.push("Wypełnij poprawnie pole NIP");
	}
	
	if(wTel.test(telefon.value) == false){
		formErrors.push("Wypełnij poprawnie pole z telefonem");
	}
	
	
	
	if(RespTak.checked == false && RespNie.checked == false){
		formErrors.push("Zaznacz pole responsywność strony");
	}
	
	if(ChatTak.checked == false && ChatNie.checked == false){
		formErrors.push("Zaznacz pole chat do fb");
	}
	
	if(SocMedTak.checked == false && SocMedNie.checked == false){
		formErrors.push("Zaznacz pole social media");
	}
	
	if(SklTak.checked == false && SklNie.checked == false){
		formErrors.push("Zaznacz pole sklep internetowy");
	}
	
	if(HostTak.checked == false && HostNie.checked == false){
		formErrors.push("Zaznacz pole hosting domeny");
	}
	
	if(ServTak.checked == false && ServNie.checked == false){
		formErrors.push("Zaznacz pole zapewnienie serwera dla strony");
	}
	
	if(GrafTak.checked == false && GrafNie.checked == false){
		formErrors.push("Zaznacz pole stworzenie grafik i reszty zawartości strony");
		
	}
	
	if(DomTak.checked == false && DomNie.checked == false){
		formErrors.push("Zaznacz pole domena(cena)");
		
	}
	
	if(ObrTak.checked == false && ObrNie.checked == false){  
		formErrors.push("Zaznacz pole obróbka materiałów");
	}
	
	if(!formErrors.length){
		e.target.submit();
	}
	else{
		alert(formErrors);
	}
	
});

//but.onclick = waliduj;
function error(){
   var nom,prenom,error,resultat;
       
  
nom = document.getElementById("nom").value;
 prenom =document.getElementById("prenom").value;
error=document.getElementById("error");
resultat=document.getElementById("resultat");
error.innerHTML=="";
resultat.innerHTML=="";

if(nom=="")
{resultat="la saisie du nom "}

  if(nom.length <=5){
  document.getElementById("error").removeAttribute("hidden")
    document.getElementById("error").innerHTML="le nom doit avoir au moins 5 caractéres";
  }
	else{
	document.getElementById("resultat").removeAttribute("hidden")
		document.getElementById("resultat").innerHTML="bienvenue"+prenom;
		}
		
}
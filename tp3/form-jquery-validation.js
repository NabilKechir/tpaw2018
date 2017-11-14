
 $(document).ready(function () { //pour chargement de la page
   
       $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#InputName').val() == "" || $('#InputPrénom').val() == "" || $('#Datedenaissance').val() == "" || $('#InputAdressepostale').val() == "" || $('#Inputmail').val() == "") {
   
               $('#myModal').modal("show");
           }
           else {
               $(".modal-body").html('<p>"Vous etes nes le '+$('#Datedenaissance').val()+'</p> <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#InputAdressepostale').val()+'&markers='+$('#InputAdressepostale').val()+'&size=800x400&zoom=13"/>');
               $(".modal-title").text("Bienvenue "+$("#InputName").val());
               $('#myModal').modal("show");
   
           }
   
       });
   })

//Selectam ul + efect pentru ele
//selectam ul in loc de li pentru ca exista in pagina de la inceput
//pe cand li urile se pot adauga pe parcurs
$("ul").on("click", "li", function(){ 
  $(this).toggleClass("task-complete");
});

//Click pe <span>  pentru a sterge taskurile'
// event.stopPropagation() opreste eventul dupa ce actioneaza
//pe span si nu pe parinti

  $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(600,function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

  //Adaugam un nou task folosind Enter
  $("input[type='text']").keypress(function(event){
    //which === 13 verificam daca tasta apasata e enter
    if(event.which === 13){
      //extragem valoarea introdusa in input
      var inputVal = $(this).val();
      $(this).val(""); //curata inputul dupa enter

      //append un nou li in ul cu valoarea stocata in variabila
      $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + inputVal + "</li");

    }
  });

  //plus-icon din fontawesome

  $(".fa-plus").click(function(){
    	$("input[type='text']").fadeToggle();
  });
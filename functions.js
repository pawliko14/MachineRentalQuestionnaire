// function to calculate the result of the survey

window.onload = function()
{
	var checkboxes = document.getElementsByName('q1');
	 
	 for(var i  = 0 ; i < checkboxes.length;i++)
	 {
		 if(checkboxes[i].type = 'checkbox')
			 checkboxes[i].checked = false;
	 }
	
	
}

function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;

  
  // get a list of the radio inputs on the page
  var choices = document.querySelectorAll('input[name=q1]:checked');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
	c1score =c1score + 1;
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
 
  
  // Display answer corresponding to that choice
  if(c1score == 0)
  {
	  	var answerbox = document.getElementById('answer');
	 answerbox.innerHTML = "zaznacz podpunkty,aby wyliczyc szacowany czas pracochlonnosci nad projektem";
  }
  else
  {
	var answerbox = document.getElementById('answer');
	var pri = "Masz zaznaczonych :" + c1score + " punktow, oznacza to ze szacowany czas moze wynosic: <strong>"+ c1score * 3 + " </strong>dni.<br />";
	var pri1 = "Przyjety czas na pojedyczny podpunkt to 3 dni, w przypadku podpunktow z 'Forma platnosci' przyjete sa 4 dni na podpunkt <br /><br /> "
	var pri2 = "Jest to orientacyjny czas, ktory trzeba poswiecic na napisanie oprogramowania, przetestowanie go, wdrozenie i przeszkolenie pracownikow";
	var pri3 = " Aby finalnie okreslic zapotrzebownie, sugeruje rozmowe w dniu [...], po rozmowie bedziemy mogli jednozacznie okreslic pracochlonnosc projektu"
    answerbox.innerHTML = pri + pri1 + pri2 + pri3 ;
  }
 
}


// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "";
  

	var array_x = ['FirstPkt','halfPkt','SecondPkt' ,'ThirdPkt','FourthPkt','FifthPkt','SixthPkt','seventhPkt','eightPkt','nineth','tenth','elft','zwolf','thirteenth'];
	
	for( var i = 0 ; i < array_x.length;i++)
	{
		var x = document.getElementById(array_x[i]);
		x.style.display="none";
	}
}

function selectAll(source)
{
  var checkboxes = document.getElementsByName('q1');
 
 for(var i  = 0 ; i < checkboxes.length;i++)
 {
	 if(checkboxes[i].type = 'checkbox')
		 checkboxes[i].checked = true;
 }
	
	var array_x = ['FirstPkt','halfPkt','SecondPkt' ,'ThirdPkt','FourthPkt','FifthPkt','SixthPkt','seventhPkt','eightPkt','nineth','tenth','elft','zwolf','thirteenth'];
	
	for( var i = 0 ; i < array_x.length;i++)
	{
		var x = document.getElementById(array_x[i]);
		x.style.display="block";
	}
	
 
}

function showFirstquestions(div_val)
{
	 var y = div_val;
	  var x = document.getElementById(y);
  if (x.style.display === "block") {
	  
	  var checks = document.querySelectorAll('#' + div_val + ' input[type="checkbox"]')
	  
	  for(var i = 0 ; i < checks.length;i++)
	  {
		  var check = checks[i];
		  if(!check.disabled)
		  {
			  check.checked = false;
		  }
	  }
	  
    x.style.display = "none";
	
  } else {
    x.style.display = "block";
  }
}


function fun_down(filename, text) {
	
	text = document.getElementById('answer').textContent;
	
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}




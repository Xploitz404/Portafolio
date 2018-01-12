/* Intentos fallidos de actualizar el contenido del div
$('#Desc').ready(function(){
    $('#ic1').click(function(){
      $("#Desc").load("<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>      <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p> <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>");
                   });

    $('#ic2').click(function(){
      $("#Desc").load("<p>1</p> <p>2</p> <p>3</p>");
                   });

    $('#ic3').click(function(){
      $("#Desc").load("Lorem ipsvm");
                   });
              });
**Lo mìo:
if (document).ready (function() {
  if (#ic1).click (function(){
    alert("Si funciono wii");
    }
  )};
  else {
    console.log(#ic);
}else {
  alert("No carnal, tampoco funciona");
)};


var icono1=document.getElementById("ic1");
var icono2=document.getElementById("ic2");
var icono3=document.getElementById("ic3");
var icono4=document.getElementById("ic4");
var icono5=document.getElementById("ic5");
var icono6=document.getElementById("ic6");

if (icono1.addEventListener("click",op1)) {

}
else {
  alert("No hago nada");
}

function op1(){
  alert("Escuché el primer link");
}
*/

//Cambiando la descripción del div según el ícono clickeado
    function mostrar1(){
      document.getElementById('Desc').innerHTML="<strong>Desarrollo</strong><br><p>Hola, soy programador </p> <br> <p> Manejo muchìsimos lenguajes de programaciòn</p>";
    }

    function mostrar2(){
      document.getElementById('Desc').innerHTML='Diseño';
    }

    function mostrar3(){
      document.getElementById('Desc').innerHTML='Marketing';
    }

    function mostrar4(){
      document.getElementById('Desc').innerHTML='Oratoria';
    }

    function mostrar5(){
      document.getElementById('Desc').innerHTML='Liderazgo';
    }

    function mostrar6(){
      document.getElementById('Desc').innerHTML='Project Manager';
    }

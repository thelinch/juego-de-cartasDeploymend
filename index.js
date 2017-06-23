$(document).ready(function () {
  iniciar();
  click_element();
});
var sumatotal = 0;
var array = ["espadas", "trebol", "corazon","cocos"];
function iniciar() {
  array.forEach(function (element) {
    for (i = 1; i <= 14; i++) {
      var contenidoDiv = $("#cartaPadre").html();
      var newdiv = $("<div class='carta'></div>")
      $(contenidoDiv).appendTo($(newdiv));
      $(newdiv).find("div.frente").html("<p style='text-align:center'>" + element + "</p><p style='text-align:center' >" + i + "</p>")
      $(newdiv).css("zIndex", Math.round(getRandomArbitrary(1, this.array.length * 14)));
      $("#padre_carta").prepend($(newdiv));
    };

  }, this);
}
function click_element() {
  var $panel_card = $("div#padre_cart ");
  console.log($panel_card[0])
  $elemento_detach = null;
  $(".carta").click(function () {
    // $(this).css('transform', 'rotateY(180deg)');
    var $elemento = $(this)
    $({ deg: 0 }).animate({ deg: 180 }, {
      duration: 1500,
      step: function (now) {
        $elemento.css({
          transform: 'rotateY(' + now + 'deg)',
        });
      },
      complete: function () {
        $elemento_detach = $elemento.addClass("selecionado").css("zIndex", 0).detach().unbind();
        $elemento.appendTo($panel_card[0])
        sumatotal += parseInt($elemento.find("div:first-child").find("p:last-child").html());
        if (sumatotal == 21) {
          alert("La suerte esta contigo mi joven padawan :V");
          $(".carta").unbind();
        } else if (sumatotal > 21) {
          alert("perdiste mi joven padawan :V");
          $(".carta").unbind();
        }
      }
    });
  });


}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

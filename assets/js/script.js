$(document).ready(function() {
  /* content toggle */
  $(".dropdown-title").on("click", function() {
    var $this = $(this);
    var $target = $(this).parent().find(".dropdown-content").first();
    if ($target.length != 0) {
      if (!$target.is(":visible"))
        $this.find("i").addClass("rotate");
      else
        $this.find("i").removeClass("rotate");
      $target.toggle(400)
    }
  });

  $(document).ready(function() {
    if($(window).width() >= 700){
    $('.dropdown-title').hover(function() {
        $('.information').addClass('blur');
      },
      function() {
        $('.information').removeClass('blur');
      }, 5000);
      }
  });

});

function change() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var chekboxInputs = Array.from(checkboxes).map(a => a.querySelector('input'));
  var allAreUnselected = chekboxInputs.every(function(elem) {
    return !elem.checked;
  });
  if (allAreUnselected) {
    chekboxInputs.forEach(function(input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function(item) {
        item.style.display = 'block';
      });
    });
  } else {
    chekboxInputs.forEach(function(input) {
      Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function(item) {
        item.style.display = input.checked ? 'block' : 'none';
      });
    });
  }
}
change();

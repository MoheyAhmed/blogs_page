

$(document).ready(function(){
    
    
    $('.special.cards .image').dimmer({
        on: 'hover'
    });


$("#btn").click(function() {
    window.scrollTo({ top: 550, behavior: 'smooth'});
});

if(pageYOffset <= 665){
    $(".navbar").removeClass("second_navbar");
    $(".navbar").addClass("first_nav");
}
else{
    $(".navbar").addClass("second_navbar");
    $(".navbar").removeClass("first_nav");
  }
  
  
    $(window).on("scroll", function () {
  
      if(pageYOffset >= 665){
        $(".navbar").addClass("second_navbar");
        $(".navbar").removeClass("first_nav");
      }else{
        $(".navbar").removeClass("second_navbar");
        $(".navbar").addClass("first_nav");
      }
    });
  
});

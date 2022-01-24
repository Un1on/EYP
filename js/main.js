

$("#form").validate({
    rules: {
        name: {
            required: true,
            lettersonly: true
        },
        name2: {
            required: true,
            lettersonly: true
        },
        street: {
            required: true,
            lettersonly: true
        },
        name2: {
            required: true,
            lettersonly: true
        },
        housenum: {
            required: true,
            digits: true
        },
        houselet: {
            required: true,
            lettersonly: true,
            maxlength: 2
        },
        town: {
            required: true,
            lettersonly: true,
        },
        email: {
            required: { 
                depends:function(){
                $(this).val($.trim($(this).val()));
                return true;
            }
        },
            email: true
        },
        email2: {
            required: { 
                depends:function(){
                $(this).val($.trim($(this).val()));
                return true;
            }
        },
            equalTo: "#email"
        },
        password: {
            required: true,
            minlength: 6
        },
        password2: {
            required: true,
            equalTo: "#password"
        },
        postcode: {
            digits: true,
            required: true
        },
        cardtype: {
            required: true,
            lettersonly: true
        },
        cardnumber: {
            required: true,
            digits: true,
            maxlength: 16,
            minlength: 16,
            // creditcard: true
        },
        month: {
            required: true,
            digits: true,
            min: 1,
            max: 12,
            minlength: 2
        },
        year: {
            required: true,
            digits: true,
            minlength: 4,
            maxlength: 4
        },
    },
    messages: {
        email2: {
            equalTo: "Email is not the same."
        },
        password: {
            minlength: "Your password is too short."

        },
        houselet: {
            maxlength: "Enter valid letter."
        },
        cardnumber: {
            minlength: "Please enter all digits of card.",
            maxlength: "Please enter the valid number."
        },
        year: {
            minlength: "Please enter a full year.",
            maxlength: "Please enter the valid year."
        },
        password2: {
            equalTo: "Password is not the same."
        }
    }
});
$("#signin-form").validate({
    rules: {
        login: {
            required: true,
        },
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        password: {
            minlength: "Your password is too short."

        },
    }
});
$("#reg-form").validate({
    rules: {
        name: {
            required: true,
            lettersonly: true
        },
        name2: {
            required: true,
            lettersonly: true
        },
        street: {
            required: true,
            lettersonly: true
        },
        name2: {
            required: true,
            lettersonly: true
        },
        housenum: {
            required: true,
            digits: true
        },
        houselet: {
            required: true,
            lettersonly: true,
            maxlength: 2
        },
        town: {
            required: true,
            lettersonly: true,
        },
        email: {
            required: { 
                depends:function(){
                $(this).val($.trim($(this).val()));
                return true;
            }
        },
            email: true
        },
        email2: {
            required: { 
                depends:function(){
                $(this).val($.trim($(this).val()));
                return true;
            }
        },
            equalTo: "#email"
        },
        password: {
            required: true,
            minlength: 6
        },
        password2: {
            required: true,
            equalTo: "#password"
        },
        postcode: {
            digits: true,
            required: true
        },
        cardtype: {
            required: true,
            lettersonly: true
        },
        cardnumber: {
            required: true,
            digits: true,
            maxlength: 16,
            minlength: 16,
            // creditcard: true
        },
        month: {
            required: true,
            digits: true,
            min: 1,
            max: 12,
            minlength: 2
        },
        year: {
            required: true,
            digits: true,
            minlength: 4,
            maxlength: 4
        },
    },
    messages: {
        email2: {
            equalTo: "Email is not the same."
        },
        password: {
            minlength: "Your password is too short."

        },
        houselet: {
            maxlength: "Enter valid letter."
        },
        cardnumber: {
            minlength: "Please enter all digits of card.",
            maxlength: "Please enter the valid number."
        },
        year: {
            minlength: "Please enter a full year.",
            maxlength: "Please enter the valid year."
        },
        password2: {
            equalTo: "Password is not the same."
        }
    }
});
$('.collapse-block').on('shown.bs.collapse', function () {

  });
$('.collapse-block1').on('show.bs.collapse', function () {
    $('.collapse-block').each(function () {
      $(this).collapse('hide');
    });
  });

  $('.right-menu .collapse').on('show.bs.collapse', function () {
    $('.right-menu .collapse').each(function () {
      $(this).collapse('hide');
    });
    $(".right-pos-menu").addClass('mg-r-auto')
    $(this).find(".circle-element").addClass('active')
  
  });
//   $('.menu-element-toggle').click(function () {
//     if (( $(this).find("[aria-expanded='true']").length == 1) == true) {
//          $(this).find(".circle-element").addClass("active")
//        console.log("qwe")
//     }
//     else{
//        console.log("213")
//     }
//  });

  $('.right-menu .collapse').on('hide.bs.collapse', function () {
    $(".right-pos-menu").removeClass('mg-r-auto')
    // $(".right-pos-menu .circle-element").removeClass('active')
  });
  $('.right-menu .collapse').on('hidden.bs.collapse', function () {
    // $(".right-pos-menu").removeClass('mg-r-auto')
    // $(".right-pos-menu .circle-element").removeClass('active')
  });
  $('.menu-element-toggle , .close-but2').click(function () {
    if ($(this).find(".circle-element").hasClass("active") == true){
        $(this).find(".circle-element").removeClass("active")
    }
    else{
    $(".right-pos-menu .circle-element").removeClass('active')
    $(this).find(".circle-element").addClass("active")
}
});
  
//   $(document).click(function(e) {
// 	if (!$(e.target).is('#login-navbar .collapse, #login-navbar .collapsing')) {
//     	$('.collapse').collapse('hide');	    
//     }
// });

$("header").on('show.bs.collapse', function () {
    $('.collapse').collapse('hide');
  })
//   $(".menu-element .collapse").on('show.bs.collapse', function () {
//     $('.menu-collapse').collapse('dispose');
//   })
  $(".close-but").click(function () {
    $('.collapse').collapse('hide');
  });
  $(".menu-element .close-but2").click(function () {
    $(".menu-element .collapse").collapse('hide');
  });
  $('.collapse-block').on('show.bs.collapse', function () {
    $(".wrapper").addClass("opacity");
  });
  $('.collapse-block').on('hide.bs.collapse', function () {
    $(".wrapper").removeClass("opacity");
  });
  $(".horizontal-dir").click(function () {
    $('.offers').addClass('horizontal')
    $('.horizontal-dir').addClass('active')
    $('.vertical-dir').removeClass('active')
  });
  $(".vertical-dir").click(function () {
    $('.offers').removeClass('horizontal')
    $('.vertical-dir').addClass('active')
    $('.horizontal-dir').removeClass('active')
  });
  $(".nav-item").hover(
    function() {
       $(this).find('.collapse').collapse('show');
       $(this).find('.nav-link').addClass('active');
       
     }, function() {
       $('.nav-item .collapse,.nav-item .collapsing').collapse('hide');
       $(this).find('.nav-link').removeClass('active');
     }
   );
   $('.vertical-dir').addClass('active');
   $(".club-benefits .card").hover(
    function() {
        $(".club-benefits .monthly-bonus").removeClass('active');
       
     }, function() {
        $(".club-benefits .monthly-bonus").removeClass('active');
     }
   );
   $(window).on('load', function() {
    $(".category-select .menu").before("<svg xmlns='http://www.w3.org/2000/svg'xmlns:xlink='http://www.w3.org/1999/xlink'width='11px' height='6px'><path fill-rule='evenodd'  d='M10.720,1.421 L6.118,5.737 C5.772,6.062 5.210,6.062 4.863,5.737 L0.262,1.421 C-0.085,1.096 -0.085,0.569 0.262,0.244 C0.608,-0.081 1.170,-0.081 1.517,0.244 L5.491,3.971 L9.465,0.244 C9.811,-0.081 10.373,-0.081 10.720,0.244 C11.066,0.569 11.066,1.096 10.720,1.421 Z'/></svg>");
   });


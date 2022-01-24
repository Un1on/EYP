$(document).ready(function () {
    $(".second-step input, .third-step input").attr("readonly", "readonly");
    $('#form input').addClass("empty_field");
    $(".second-step input, .third-step input").attr("tabindex", "-1");
});
$(".first-step input").on('keyup', function () {
    $("#form").find('input').each(function () {
        if ($(this).val() != '') {
            $(this).removeClass('empty_field');
        } else {
            $(this).addClass('empty_field');
        }
    });
    if ($(".first-step").find(".empty_field").length == 0) {
        $(".second-step input").removeAttr("readonly", "readonly");
        $(".second-step .step-number, .second-step .step-decription").addClass("active");
        $(".second-step input").removeAttr("tabindex", "-1");
    } else {
        $(".second-step input, .third-step input").attr("readonly", "readonly");
        $('#form input').addClass("empty_field");
        $(".second-step .step-number, .second-step .step-decription").removeClass("active");
        $(".second-step input").attr("tabindex", "-1");

    }
});
$(".second-step input").on('keyup', function () {
    $("#form").find('input').each(function () {
        if ($(this).val() != '') {
            $(this).removeClass('empty_field');
        } else {
            $(this).addClass('empty_field');
        }
    });
    if ($(".second-step").find(".empty_field").length == 0) {
        $(".third-step input").removeAttr("readonly", "readonly");
        $(".third-step .step-number, .third-step .step-decription").addClass("active");
        $(".third-step input").removeAttr("tabindex", "-1");
    } else {
        $(".third-step input").attr("readonly", "readonly");
        $('#form input').addClass("empty_field");
        $(".third-step .step-number, .third-step .step-decription").removeClass("active");
        $(".third-step input").attr("tabindex", "-1");

    }
});

  $(document).ready(function () {

    $(".ui.dropdown").dropdown();
    $(".second-step input, .third-step input").attr("readonly", "readonly");
    $('#form input').addClass("empty_field");
    $(".second-step input, .third-step input").attr("tabindex", "-1");
});
$(".first-step input").on('keyup', function () {
    $("#form").find('input').each(function () {
        if ($(this).val() != '') {
            $(this).removeClass('empty_field');
        } else {
            $(this).addClass('empty_field');
        }
    });
    if ($(".first-step").find(".empty_field").length == 0) {
        $(".second-step input").removeAttr("readonly", "readonly");
        $(".second-step .step-number, .second-step .step-decription, .step2").addClass("active");
        $(".second-step input").removeAttr("tabindex", "-1");
    } else {
        $(".second-step input, .third-step input").attr("readonly", "readonly");
        $('#form input').addClass("empty_field");
        $(".second-step .step-number, .second-step .step-decription, .step2").removeClass("active");
        $(".second-step input").attr("tabindex", "-1");

    }
});
$(".second-step input").on('keyup', function () {
    $("#form").find('input').each(function () {
        if ($(this).val() != '') {
            $(this).removeClass('empty_field');
        } else {
            $(this).addClass('empty_field');
        }
    });
    if ($(".second-step").find(".empty_field").length == 0) {
        $(".third-step input").removeAttr("readonly", "readonly");
        $(".third-step .step-number, .third-step .step-decription, .step3").addClass("active");
        $(".third-step input").removeAttr("tabindex", "-1");
    } else {
        $(".third-step input").attr("readonly", "readonly");
        $('#form input').addClass("empty_field");
        $(".third-step .step-number, .third-step .step-decription, .step3").removeClass("active");
        $(".third-step input").attr("tabindex", "-1");

    }
});
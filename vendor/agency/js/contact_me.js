$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
      console.log("form submit error: "+errors)
    },
    submitSuccess: function($form, event) {
      console.log("form submit begin")
      console.log("fields: "+$form.serialize())

      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      // var captcha = $("textarea#g-recaptcha-response").val()

      // if (!captcha) {
      //   var captchaGroup = $("textarea#g-recaptcha-response").parents(".form-group").first();
      //   captchaGroup.addClass("error")
      //   $(captchaGroup).find(".help-block").first().html('<ul role="alert"><li>Please authenticate CAPTCHA</li></ul>')
      // }

      if( !name || !email || !phone || !message ) {
        event.preventDefault(); // prevent default submit behaviour
        return
      }
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});

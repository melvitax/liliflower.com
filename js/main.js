// Add inverted rows to timeline
$(document).ready(function(){
  $(".timeline li:odd").addClass("timeline-inverted")
  var formURL = $("#contactForm").attr("action")
  formURL += "melvitax"
  formURL += "@"
  formURL += "me"
  formUEL += ".com"
  $("#contactForm").attr("action", formURL)
});

// Netlify CMS
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
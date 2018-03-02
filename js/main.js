// Add inverted rows to timeline
$(document).ready(function(){
  $(".timeline li:odd").addClass("timeline-inverted")
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
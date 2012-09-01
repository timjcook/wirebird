jQuery(document).ready(function() {
  console.log($("a[rel^='prettyPhoto']"))
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: '',
    theme: 'light_rounded'
  })
})
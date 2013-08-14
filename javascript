<script type="text/javascript">

$(".button1").click(function() {
$('body, html').animate({
scrollLeft: 0}, 3000) //Home
});
$(".button2").click(function() {
$('body, html').animate({
scrollLeft: 3100}, 3000) //About
});
$(".button3").click(function() {
$('body, html').animate({
scrollLeft: 6200}, 3000) //Contact
});

$('#div_section').css("margin-left", ( $(window).width() - 960 ) /2 + "px")
$('#div_section').css("margin-left", ( $(window).width() - 960 ) /2 + "px")
$('#div_section').css("margin-left", ( $(window).width() - 960 ) / 2 + "px")

$('#div_footer').css("width", ( (8640 * 2.4) - (($(window).width() - 960 )/2) + "px") )

</script>

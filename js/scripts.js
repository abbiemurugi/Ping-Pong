$(document).ready(function(){
$("form#abby").click(function(event){
    event.preventDefault();
    for(i=1;i<=$("input").val();i++) {
       // $("ul#list").append("<li>"+  i + "</li>");//
        if((i%3===0)&&(i%5===0)){$("ul#list").append("<li> pingpong</li>");}
    else if(i%3===0){$("ul#list").append("<li>pong</li>");}
else if(i%5===0){$("ul#list").append("<li> ping </li>");}
else {$("ul#list").append("<li>" + i + "</li>");}
    };
});
});




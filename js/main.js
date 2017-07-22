function poll()
  {
    $.getJSON("https://api.twitch.tv/kraken/streams/moonmoon_ow?client_id=o6pyc3rutga87menyk3s0w30tai4tsi",
    function(t){
        console.log(t);
        var e=document.getElementById("brandButton");
        null==t.stream?(e.innerHTML="Moon&sup2; is offline",e.href=""):(e.innerHTML="Moon&sup2; is streaming",e.href="https://www.twitch.tv/moonmoon_ow");
      });
}

$(function(){
  poll()
  setInterval(poll,3e4)
})

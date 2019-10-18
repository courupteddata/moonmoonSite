function poll() {
    $.ajax({
        headers:{"Client-ID": 'o6pyc3rutga87menyk3s0w30tai4tsi' },
        method: "GET",
        dataType: "json",
        url: "https://api.twitch.tv/helix/streams?user_id=121059319",
        success: function (data) {
            null == t.stream ? (e.innerHTML = "Moon&sup2; is offline", e.href = "") : (e.innerHTML = "Moon&sup2; is streaming", e.href = "https://www.twitch.tv/moonmoon");
        }
    });
}

$(function () {
    //poll();
    //setInterval(poll, 3e4);
});

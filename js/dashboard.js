var tabs = document.querySelector('paper-tabs');
var list = document.querySelectorAll('.tabContent');

tabs.addEventListener('core-select', function () {
    var elm = $("#" + tabs.children[tabs.selected].getAttribute('data-tab'));
    var list = $(".tabContent").not(elm);
    switchTabs(list, elm);

});

document.addEventListener('api-load', function(){
    gapi.client.setApiKey('AIzaSyBa-Ju2fu97FRZV88U9Vs6xUJVC-rXTUnQ');
    gapi.auth.authorize({clientId : '80663946874-pd1krqvnc42mdqkhofh2qm8027867kud.apps.googleusercontent.com', scopes:'https://www.googleapis.com/auth/plus.me'}, function(data){
        console.log(data);
    });

});

function switchTabs(list, elm) {
    list.not(elm).each(function () {
        $(this).animate({
            opacity: 'hide',      // animate slideUp
            margin:  'hide',
            padding: 'hide',
            height:  'hide',
            border:  'hide'
        }, 150);
    });

    slideDown(elm);
}

function slideDown(elm) {


    $(elm).animate({
        border:  'show',
        opacity: 'show',      // animate slideDown
        margin:  'show',
        padding: 'show',
        height:  'show'

    }, 150);

}
var tabs = document.querySelector('paper-tabs');
var list = document.querySelectorAll('.tabContent');

tabs.addEventListener('core-select', function () {
    var elm = $("#" + tabs.children[tabs.selected].getAttribute('data-tab'));
    var list = $(".tabContent").not(elm);
    switchTabs(list, elm);

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

var myApp = angular.module('myApp',[]);
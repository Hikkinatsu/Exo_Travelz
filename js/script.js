$(document).ready(function () {

    var body = $('body'),
        switchlist = $('.switchlist');

    switchlist.click(function () {

        var bodyClass = $(this).attr('id');

        switchlist.removeClass('active');
        $(this).addClass('active');

        body.attr('class', '').attr('class', bodyClass);

    });

});

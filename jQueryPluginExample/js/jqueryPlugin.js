(function($) {

    $.fn.helloWorld = function() {

        return this.each( function() {
            $(this).text("Hello FTFL!");
        });

    }

}(jQuery));

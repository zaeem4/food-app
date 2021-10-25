$(document).ready(function() {

    var result = $(".item-shadow-price");

    $(".scroll-bar-list-draken").scrollspy({
        target: "#scroll-bar-draken",
        offset: 7
    });
    $(".scroll-bar-list-menu").scrollspy({
        target: "#scroll-bar-menu",
        offset: 7
    });
    $(".scroll-bar-list-dessert").scrollspy({
        target: "#scroll-bar-dessert",
        offset: 7
    });

    $(".menu-bar-first-button").on('click', (e) => {

        let selected = $(e.currentTarget).attr("data-id");

        $(".menu-bar-first-button-f").removeClass('bg-light');
        $(".menu-bar-first-button-s").removeClass('bg-light');
        $(".menu-bar-first-button-t").removeClass('bg-light');
        $(e.currentTarget).addClass('bg-light');

        $(".scroll-bar-list-draken").hide();
        $(".scroll-bar-list-menu").hide();
        $(".scroll-bar-list-dessert").hide();
        $(".scroll-bar-list-" + selected).show();

        if (!($(".horizental-bar-draken").hasClass('hidden'))) {
            $(".horizental-bar-draken").addClass('hidden');
        };
        if (!($(".horizental-bar-menu").hasClass('hidden'))) {
            $(".horizental-bar-menu").addClass('hidden');
        };
        if (!($(".horizental-bar-dessert").hasClass('hidden'))) {
            $(".horizental-bar-dessert").addClass('hidden');
        };

        $(".horizental-bar-" + selected).removeClass("hidden");

    });

    $(".item-shadow-cart-img").on('click', (e) => {
        $('#cart-model').modal('toggle');
    });

    $('.count').prop('disabled', true);

    $(document).on('click', '.plus', () => {
        $('.count').val(parseInt($('.count').val()) + 1);
    });

    $(document).on('click', '.minus', () => {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });

    $("#search-input").on('keyup', () => {
        let search = $("#search-input").val().toLowerCase();
        if (search.length > 0) {
            let searchedList = [];
            $(result).each(function() {
                innertText = $(this).text().toLowerCase();
                if (innertText.includes(search)) {
                    searchedList.push($(this).parents(".scroll-bar-item-shadow").clone());
                }
            });

            if (searchedList.length > 0) {
                $("#serch-bar-list-item").html(searchedList);
            } else {
                $("#serch-bar-list-item").html(`<h5 class="text-center">No result found</5>`)
            }
            $("#scroll-bar-list").hide();
            $("#search-bar-list").show();
            $("#menu-bar").hide();
            $("#horizental-bar").hide();

        } else {
            $("#scroll-bar-list").show();
            $("#search-bar-list").hide();
            $("#menu-bar").show();
            $("#horizental-bar").show();
        }
    })
});
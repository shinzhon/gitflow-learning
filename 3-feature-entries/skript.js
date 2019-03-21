$(document).ready(function(){
    $("#btn-add").click(function () {
        var entry = $("#input-add").val();
        var amount = $("#amount").val();
        var unit = $("#unit").val();
        registerEntry("#grocery-list", entry, amount, unit)
    });
});

function registerEntry(listId, entry, amount, unit) {
    if(entry && amount && unit) {
        $(listId).append(
            $('<li class="list-group-item"/>')
            .append(
                $('<div class="container"/>').append(
                    $('<div class="row"/>')
                    .append(
                        $('<div class="col-sm-1">'+amount + unit+'</div>')
                    )
                    .append(
                        $('<div class="col">' + entry + '</div>')
                    )
                    .append(
                        $('<div class="col-sm-1">').append(createEntryBtn())
                    )
                )
            )
        );
    }
}

function createEntryBtn() {
    return $('<button/>')
    .append('<span aria-hidden="true">&times;</span>')
    .addClass('close')
    .click(
        function() {
            $(this).closest("li").remove();
        }
    );
}
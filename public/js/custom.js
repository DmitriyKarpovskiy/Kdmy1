$(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('body').on('click', '.remove-project', function() {
        $(this).siblings('form').submit();
    });

    $("body").on("click", ".remove-task", function() {
        $(this).siblings("form").submit();
    });

    $('.task_checkbox').click(function(event) {
        event.stopPropagation();
        var url = "/tasks/change_status/" + $(this).siblings('input[name="task_id"]').val();
        $.post({
            url: url
        })
    });

    $('body').on('click', '.ordering .fa', function() {

        var task = $(this).closest('.task');
        var target_id = task.find('input[name=task_id]').val()
        var direction = $(this).hasClass('fa-angle-up');
        var replacement = direction ? task.prev() : task.next();
        var replacement_id = replacement.find('input[name=task_id]').val();
        $('input[name=target_id]').val(target_id);
        $('input[name=replacement_id]').val(replacement_id);
        $(this).siblings("form").submit();
        console.log($(this).siblings("form"));
    });
    $(document).ready(function() {
        var ml = $(".navbar").outerWidth();
        ml /= 3;
        $(".navbar-brand").css({ "margin-left": ml });
    });
});
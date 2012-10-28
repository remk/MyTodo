/**
 * Created with IntelliJ IDEA.
 * User: REM
 * Date: 28/10/12
 * Time: 21:12
 * To change this template use File | Settings | File Templates.
 */


var bindEventUpdateTask = function (idTask) {
    $('#input_task_' + idTask).keypress(function (evt) {
        if (evt.keyCode == 13 ) {
            $.ajax({
                url:'updateTask',
                data:{
                    'id':idTask,
                    'txt':$('#input_task_' + idTask).val()
                },
                type:'POST'
            }).done(
                function (json) {
                    console.log('update successfull');
                    if ($('#input_task_' + idTask).val() == '') {

                        $('#td_' + idTask).remove();
                        console.log('delete successfull');
                    }


                }
            ).fail(function () {
                    console.error('update  task failed')
                })
        }
    });
}


$(function () {

    $('.task').each(function(index, input){
        bindEventUpdateTask($(input).attr('id').replace('input_task_',''))
    })

    $('#inputNewTask').keypress(function (evt) {
        if (evt.keyCode == 13 && $('#inputNewTask').val() != '') {
            $.ajax({
                url:'saveTask',
                data:{
                    'txt':$('#inputNewTask').val()
                },
                type:'POST'
            }).done(
                function (json) {
                    console.log(json);
                    $('#bodyTableTasks').append('<tr><td id="td_' + json.idTask + '"><input id="input_task_' + json.idTask + '" class="input-block-level task" value="' + $('#inputNewTask').val() + '" /></td></tr>');
                    $('#inputNewTask').val("")

                    bindEventUpdateTask(json.idTask)
                    console.log('save new task succeeded')
                }
            ).fail(function () {
                    console.error('save new task failed')
                })
        }
    })


});


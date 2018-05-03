

    //全选
    //$('.checkAll').on('click',function(){
    //
    //    if(this.checked){
    //        $(".check_single").attr("checked", true);
    //    }else{
    //        $(".check_single").attr("checked", false);
    //    }
    //})
    //iCheck 全选
    var checkAll = $('input.checkAll');
    var checkboxes = $('input.check_single');
    checkAll.on('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            checkboxes.iCheck('check');
        } else {
            checkboxes.iCheck('uncheck');
        }
    });
    checkboxes.on('ifChanged', function(event){
        if(checkboxes.filter(':checked').length == checkboxes.length) {
            checkAll.prop('checked', 'checked');
        } else {
            checkAll.prop('checked',false);
        }
        checkAll.iCheck('update');
    });


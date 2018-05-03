

    $('#delivery_date').datepicker({autoclose: true, todayHighlight: true, format: "yyyy-mm-dd"});
    $('#order_date').datepicker({autoclose: true, todayHighlight: true, format: "yyyy-mm-dd"});
    $(".select2-list").select2({allowClear: true});
    $(".select1-list").select2({allowClear: true});

    //保存
    $('#order_save').on('click',function(){

        var oid = $('input[name=oid]').val();
        if(oid == '' || oid == null){
            var url = "{:url('Order/insert_order')}";
        }else{
            var url = "{:url('Order/update_order')}"
        }
        $.post(url,$('#order_form').serialize(),function(res){
            if(res.code){
                if(res.data.status == 'insert'){
                    $('input[name=oid]').val(res.data.oid);
                }
                toastr.success(res.msg);
                location.href = res.url;
                return true;
            }else{
                toastr.error(res.msg);
                return false;
            }
        },'json');
    });

//        $('[data-toggle="tabs"] a').click(function (e) {
//            e.preventDefault();
//            $(this).tab('show');
//            if($('.tab-sub').hasClass('active')){
//                alert($('.tab-sub.active').attr('id'));
//            }
//        });

    /*添加,编辑*/

    $('.tab_edit').live('click',function(){
        var obj = $(this);
        var oid = $('input[name=oid]').val();
        if(oid == '' || oid == null){
            $.post("{:url('Order/insert_order')}",$('#order_form').serialize(),function(res){
                if(res.code){
                    $('input[name=oid]').val(res.data.oid);
                    var url = obj.data('url');
                    var id =obj.data('id');
                    var name = obj.data('name');
                    $.post("{:url('Order/tab_edit')}",{'id':id,'url':url,'name':name,'oid':oid},function(res){
                        offcanvas('#product');
                        $('#product').html(res);
                        return true;
                    },'json');
                }else{
                    toastr.error('订单中'+res.msg);
                    return false;
                }
            },'json');
        }else{
            var url = obj.data('url');
            var id =obj.data('id');
            var name = obj.data('name');
            $.post("{:url('Order/tab_edit')}",{'id':id,'url':url,'name':name,'oid':oid},function(res){
                offcanvas('#product');
                $('#product').html(res);
                return true;
            },'json');
        }

    });

    /*系统设置添加*/
    $('.offcanvas_add').on('click',function(){
        offcanvas('#product');
        var name = $(this).data('name');
        $.post("{:url('Order/setting')}",{'name':name},function(res){
            $('#product').html(res);
            return true;
        },'json');
    });

    /*删除*/
    $('.delete_id').on('click',function(){
        var obj = $(this);
        var id = obj.data('id');
        var url = obj.data('url');
        $('#simpleModal').modal('show');
        $('#delete').on('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });

    /*货物成本删除*/
    $('.delete_cProduct').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('Cost/delete_cProduct')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*物流成本删除*/
    $('.delete_cWay').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('Cost/delete_cWay')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*费用明细删除*/
    $('.delete_cDetail').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('Cost/delete_cDetail')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*退税补贴删除*/
    $('.delete_cSubsidy').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('CostSubsidy/delete_cSubsidy')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*收款记录删除*/
    $('.delete_rDeposite').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('RecordDeposit/delete_rDeposit')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });

    /*产品删除*/
    $('.delete_product').live('click',function(){
        var obj = $(this);
//            if(obj.hasClass('mulit')) {
//                var id = [];
//                obj.parents('#prodectTab').find('input[name=id]:checked').each(function () {
//                    if ($(this).attr("checked")) {
//                        id.push($(this).val());
//                    }
//                });
//                if(id == ''){
//                    toastr.error('请选择删除行');
//                    return false;
//                }
//            }else{
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
//            }
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post("{:url('OrderProduct/delete_product')}",{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*删除出运*/
    $('.delete_waybill').live('click',function(){
        var obj = $(this);
        var id = obj.data('id');
        var url = obj.data('url');
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    $('#waybill').html(data.data);
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*删除提单*/
    $('.delete_lading').live('click',function(){
        var obj = $(this);
        var id = obj.data('id');
        var url = obj.data('url');
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    $('#billLoaing').html(data.data);
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });
    /*删除出货文件*/
    $('.delete_ofile').live('click',function(){
        var obj = $(this);
        var id = obj.parents('tr').find('input').val();
        if(id == ''){
            toastr.error('缺少参数ID');
            return false;
        }
        var url = "{:url('OrderFile/delete_fWay')}";
        $('#simpleModal').modal('show');
        $('#delete').one('click',function(){
            $('#simpleModal').modal('hide');
            $.post(url,{id:id},function(data){
                if(data.code){
                    toastr.success(data.msg);
                    obj.parents('tr').remove();
                    return true;
                }else{
                    toastr.error(data.msg);
                    return false;
                }
            }, "json");
        });
    });

//    $('.add').on('click',function(){
//        $.post("{:url('Order/download_file')}",{'id':110},function(){
//            return true;
//        })
//    });
$('.remark_save').on('click',function(){

    var oid = $('input[name=oid]').val();
    if(oid == '' || oid == null){
        toastr.error('请先保存订单信息');
        return false;
    }
    if($('textarea[name=content]').val() == '' || $('textarea[name=content]').val() == null){
        toastr.error('请填写备注');
        return false;
    }
    $.post("{:url('Order/save_remark')}",$('#formNote').serialize()+"&oid="+oid,function(data){
        if(data.code){
            toastr.success(data.msg);
            $('.ul_remark').html(data.data);
//                clear_width();
            return true;
        }else{
            toastr.error(data.msg);
            return false;
        }
    }, "json");
});

//设置保存
$('.setting_save').live('click',function(){

    var url = $(this).data('url');
    var type = $(this).data('type');
    $.post(url,$('#setting_form').serialize(),function(res){
        if(res.code){
            toastr.success(res.msg);
            if(res.data){
                var html = '<option value="'+res.data.id+'">'+res.data.name_cn+'</option>';
                if(type == 'port'){
                    $('#departure_id').append(html);
                    $('#destination_id').append(html);
                }else{
                    $('#'+type).append(html);
                }

            }
            return true;
        }else{
            toastr.error(res.msg);
            return false;
        }
    },'json');
});

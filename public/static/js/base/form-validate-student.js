//以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
        $.validator.setDefaults({
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            success: function (element) {
                element.closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: "span",
            errorPlacement: function (error, element) {
                if (element.is(":radio") || element.is(":checkbox")) {
                    error.appendTo(element.parent().parent().parent());
                } else {
                    error.appendTo(element.parent());
                }
            },
            errorClass: "help-block m-b-none",
            validClass: "help-block m-b-none"


        });

jQuery.validator.addMethod("stringCheck",
    function(value, element) {
        //return this.optional(element) || /^[u0391-uFFE5w]+$/.test(value); // "只能包括中文字、英文字母、数字和下划线"
        return this.optional(element) || /^[a-zA-Z0-9_]+$/.test(value);
    }, "只能包括英文字母、数字");

        //以下为官方示例
        $().ready(function () {
            // validate signup form on keyup and submit
            var icon = "<i class='fa fa-times-circle'></i> ";
            $("#signupForm").validate({
                rules: {
                    sn: {
                        required: true,
                        stringCheck:true,
                        minlength: 2,
                        maxlength: 100
                    },
                    name: {
                        required: true,
                        minlength: 1,
                        maxlength: 100
                    },
                    email: {
                        email: true
                    },
                    id_card: {
                        maxlength: 18
                    },
                    mobile:{
                        digits:true,
                        maxlength: 20
                    },
                    birth_date:{
                        date:true
                    },
                    remark: {
                        maxlength: 200
                    }
                },
                messages: {
                    firstname: icon + "请输入你的姓",
                    title: icon + "请输入标题",
                    lastname: icon + "请输入您的名字",
                    sn: {
                        required: icon + "请输入学生学号",
                        minlength: icon + "学生学号必须两个字符以上",
                        maxlength: icon + "学生学号不要超过100个字符"
                    },
                    name: {
                        required: icon + "请输入学生姓名",
                        minlength: icon + "学生姓名最少一个字",
                        maxlength: icon + "学生姓名不要超过100个字符"
                    },
                    email: icon + "请输入您的E-mail",
                    id_card: {
                        maxlength: icon + "身份证不要超过18个字符"
                    },
                    mobile:{
                        digits:icon + "手机号只能是数字",
                        maxlength: icon + "手机号不要超过20个字符"
                    },
                    birth_date:icon + "请输入正确的出生日期",
                    remark: {
                        maxlength: icon + "身份证不要超过200个字符"
                    }
                }
            });
        });

jQuery(function() {
    var $ = jQuery,    // just in case. Make sure it's not an other libaray.
        $wrap = $('.wu-example'),
        $queue = $('<ul class="filelist"></ul>').appendTo( $wrap.find('.queueList') ),// 图片容器
        $statusBar = $wrap.find('.statusBar'),// 状态栏，包括进度和控制按钮
        $info = $statusBar.find('.info'), // 文件总体选择信息。
        $upload = $wrap.find('.uploadBtn'), // 上传按钮
        $placeHolder = $wrap.find('.placeholder'),// 没选择文件之前的内容。
        $progress = $statusBar.find('.progress').hide(), // 总体进度条
        fileCount = 0,// 添加的文件数量
        fileSize = 0, // 添加的文件总大小
        ratio = window.devicePixelRatio || 1,   // 优化retina, 在retina下这个值是2
        thumbnailWidth = 110 * ratio, // 缩略图大小
        thumbnailHeight = 110 * ratio,
        state = 'pedding', // 可能有pedding, ready, uploading, confirm, done.
        percentages = {}, // 所有文件的进度信息，key为file id
        muit_type = $('#uploader').data('type'),
        supportTransition = (function(){
            var s = document.createElement('p').style,
                r = 'transition' in s ||
                      'WebkitTransition' in s ||
                      'MozTransition' in s ||
                      'msTransition' in s ||
                      'OTransition' in s;
            s = null;
            return r;
        })(),

        // WebUploader实例
        uploader;

    if ( !WebUploader.Uploader.support() ) {
        alert( 'Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
        throw new Error( 'WebUploader does not support the browser you are using.' );
    }

    //var last_img = '';
    //图片
    //var last_img = $('.img_input').val();
    //if(last_img){
    //    $placeHolder.addClass( 'element-invisible' );
    //    $statusBar.show();
    //    $( '.btns' ).find('.uploadBtn').hide();
    //    if(muit_type == 'single'){
    //        var file = new Array();
    //        file['id'] = $('.img_input').attr('id');
    //        file['name'] = last_img;
    //        file['src'] = last_img;
    //        addFile(file,1);
    //        setState( 'ready');
    //        updateStatus('ready');
    //    }else{
    //        //var img = new Array();
    //        //img.push($last_img);
    //        $('.img_input').each(function(i){
    //        //$.each(last_img,function(i,val){
    //            var file = new Array();
    //            file['id'] = $(this).attr('id');
    //            file['name'] = $(this).val();
    //            file['src'] = $(this).val();
    //            addFile(file,1);
    //            setState( 'ready');
    //            updateStatus('ready');
    //        });
    //    }
    //}

    // 实例化
    uploader = WebUploader.create({

        //auto: true,
        disableGlobalDnd: true,
        pick: {
            id: '#filePicker',
            label: '点击选择图片',
            multiple:false,
        },
        server: UPLOAD_URL,
        dnd: '#uploader .queueList',
        paste: document.body,

        accept: {
            title: 'Images',
            extensions: extensions,
            mimeTypes: mimeTypes
        },

        // swf文件路径
        swf: BASE_URL + '/Uploader.swf',

        //
        //chunked: true,

        fileNumLimit : index,
        fileSizeLimit: 5 * 1024 * 1024,    // 200 M
        fileSingleSizeLimit: 1 * 1024 * 1024    // 50 M
    });

    if(index >1){//index==1和0时，我这里是封面图片和身份证正面照片，所以就不让他显示。index == 2 时是附件上传所以将其显示可以进行继续添加
        // 添加“添加文件”的按钮，
        uploader.addButton({
            id: '#filePicker2',
            label: '继续添加'
        });
    }



    //编辑时显示图片
    //if(last_img){
        //var $li = $( '<li id="wu_0">' +
        //    '<p class="title">' + $last_img + '</p>' +
        //    '<p class="imgWrap"><img src="'+$last_img+'"></p>'+
        //    '<p class="progress"><span></span></p>' +
        //    '</li>' );
        //
        //$('<div class="file-panel">' +
        //    '<span class="cancel">删除</span>' +
        //    '<span class="rotateRight">向右旋转</span>' +
        //    '<span class="rotateLeft">向左旋转</span></div>').appendTo( $li),
        //    //$prgress = $li.find('p.progress span'),
        //    $li.appendTo( $queue );


    //}

    // 当有文件添加进来时执行，负责view的创建
    function addFile( file) {
        var $li = $( '<li id="' + file.id + '">' +
                '<p class="title">' + file.name + '</p>' +
                '<p class="imgWrap"></p>'+
                '<p class="progress"><span></span></p>' +
                '</li>' ),

            $btns = $('<div class="file-panel">' +
                '<span class="cancel">删除</span>' +
                //'<span class="rotateRight">向右旋转</span>' +
                //'<span class="rotateLeft">向左旋转</span>'+
                '</div>').appendTo( $li ),
            $prgress = $li.find('p.progress span'),
            $wrap = $li.find( 'p.imgWrap' ),
            $info = $('<p class="error"></p>'),

            showError = function( code ) {
                switch( code ) {
                    case 'exceed_size':
                        text = '文件大小超出';
                        break;

                    case 'interrupt':
                        text = '上传暂停';
                        break;

                    default:
                        text = '上传失败，请重试';
                        break;
                }
                $info.text( text ).appendTo( $li );
            };

        //type为1时编辑显示，否则是上传
        //if(type != 1){
        //    if ( file.getStatus() === 'invalid' ) {
        //        showError( file.statusText );
        //    } else {
                // @todo lazyload
                $wrap.text( '预览中' );
                uploader.makeThumb( file, function( error, src ) {
                    alert(4444);
                    alert(error);
                    if ( error ) {
                        $wrap.text( '不能预览' );
                        return;
                    }
                    alert(src);
                    var img = $('<img src="'+src+'">');

                    $wrap.empty().append( img );

                }, thumbnailWidth, thumbnailHeight );

                percentages[ file.id ] = [ file.size, 0 ];
                file.rotation = 0;
            //}
            //file.on('statuschange', function( cur, prev ) {
            //    if ( prev === 'progress' ) {
            //        $prgress.hide().width(0);
            //    } else if ( prev === 'queued' ) {
            //        $li.off( 'mouseenter mouseleave' );
            //        $btns.remove();
            //    }
            //
            //    // 成功
            //    if ( cur === 'error' || cur === 'invalid' ) {
            //        console.log( file.statusText );
            //        showError( file.statusText );
            //        percentages[ file.id ][ 1 ] = 1;
            //    } else if ( cur === 'interrupt' ) {
            //        showError( 'interrupt' );
            //    } else if ( cur === 'queued' ) {
            //        percentages[ file.id ][ 1 ] = 0;
            //    } else if ( cur === 'progress' ) {
            //        $info.remove();
            //        $prgress.css('display', 'block');
            //    } else if ( cur === 'complete' ) {
            //        $li.append( '<span class="success"></span>' );
            //    }
            //
            //    $li.removeClass( 'state-' + prev ).addClass( 'state-' + cur );
            //});
            $btns.on( 'click', 'span', function() {
                var index = $(this).index(),
                    deg;
                switch ( index ) {
                    case 0:
                        uploader.removeFile( file );

                        return;

                    case 1:
                        file.rotation += 90;
                        break;

                    case 2:
                        file.rotation -= 90;
                        break;
                }

                if ( supportTransition ) {
                    deg = 'rotate(' + file.rotation + 'deg)';
                    $wrap.css({
                        '-webkit-transform': deg,
                        '-mos-transform': deg,
                        '-o-transform': deg,
                        'transform': deg
                    });
                } else {
                    $wrap.css( 'filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+ (~~((file.rotation/90)%4 + 4)%4) +')');
                    // use jquery animate to rotation
                    // $({
                    //     rotation: rotation
                    // }).animate({
                    //     rotation: file.rotation
                    // }, {
                    //     easing: 'linear',
                    //     step: function( now ) {
                    //         now = now * Math.PI / 180;

                    //         var cos = Math.cos( now ),
                    //             sin = Math.sin( now );

                    //         $wrap.css( 'filter', "progid:DXImageTransform.Microsoft.Matrix(M11=" + cos + ",M12=" + (-sin) + ",M21=" + sin + ",M22=" + cos + ",SizingMethod='auto expand')");
                    //     }
                    // });
                }


            });
        //}else{
        //    var img = $('<img src="'+file.src+'">');
        //    var name = $('#uploader').data('name');
        //    //var input = $('<input type="hidden" name="'+name+'" value="'+file.src+'">');
        //    //$wrap.append( input );
        //    $wrap.empty().append( img );
        //
        //    $btns.on( 'click', 'span', function() {
        //        var index = $(this).index(),
        //            deg;
        //        switch ( index ) {
        //            case 0:
        //                var Id = $(this).parents('li').attr("id");
        //                $placeHolder.removeClass( 'element-invisible' );
        //                $queue.parent().removeClass('filled');
        //                $queue.hide();
        //                $statusBar.addClass( 'element-invisible' );
        //                uploader.refresh();
        //                $li.removeClass( 'state-inited' ).addClass( 'state-cancelled' );
        //                $(this).parents('li').remove();
        //                $('#'+Id).remove();
        //                return;
        //            case 1:
        //                file.rotation += 90;
        //                break;
        //            case 2:
        //                file.rotation -= 90;
        //                break;
        //        }
        //    });
        //}

        $li.on( 'mouseenter', function() {
            $btns.stop().animate({height: 30});
        });

        $li.on( 'mouseleave', function() {
            $btns.stop().animate({height: 0});
        });


        //if(muit_type == 'single'){
        //    $placeHolder.addClass( 'element-invisible' );
        //    $('.filelist').html('');
        //}
        //$queue.html($li);
        $li.appendTo( $queue );
    }

    // 负责view的销毁
    function removeFile( file ) {
        var $li = $('#'+file.id);

        delete percentages[ file.id ];
        updateTotalProgress();
        $li.off().find('.file-panel').off().end().remove();
    }

    function updateTotalProgress() {
        var loaded = 0,
            total = 0,
            spans = $progress.children(),
            percent;

        $.each( percentages, function( k, v ) {
            total += v[ 0 ];
            loaded += v[ 0 ] * v[ 1 ];
        } );

        percent = total ? loaded / total : 0;

        spans.eq( 0 ).text( Math.round( percent * 100 ) + '%' );
        spans.eq( 1 ).css( 'width', Math.round( percent * 100 ) + '%' );
        updateStatus();
    }

    function updateStatus() {
        var text = '', stats;

        if ( state === 'ready' ) {
            text = '选中' + fileCount + '张图片，共' +
                    WebUploader.formatSize( fileSize ) + '。';
        } else if ( state === 'confirm' ) {
            stats = uploader.getStats();
            if ( stats.uploadFailNum ) {
                text = '已成功上传' + stats.successNum+ '张照片至XX相册，'+
                    stats.uploadFailNum + '张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>'
            }

        } else {
            stats = uploader.getStats();
            text = '共' + fileCount + '张（' +
                    WebUploader.formatSize( fileSize )  +
                    '），已上传' + stats.successNum + '张';

            if ( stats.uploadFailNum ) {
                text += '，失败' + stats.uploadFailNum + '张';
            }
        }

        $info.html( text );
    }

    function setState( val ) {
        var file, stats;

        if ( val === state ) {
            return;
        }

        $upload.removeClass( 'state-' + state );
        $upload.addClass( 'state-' + val );
        state = val;

        switch ( state ) {
            case 'pedding':
                $placeHolder.removeClass( 'element-invisible' );
                $queue.parent().removeClass('filled');
                $queue.hide();
                $statusBar.addClass( 'element-invisible' );
                uploader.refresh();
                break;

            case 'ready':
                $placeHolder.addClass( 'element-invisible' );
                $( '#filePicker2' ).removeClass( 'element-invisible');
                $queue.parent().addClass('filled');
                $queue.show();
                $statusBar.removeClass('element-invisible');
                uploader.refresh();
                break;

            case 'uploading':
                $( '#filePicker2' ).addClass( 'element-invisible' );
                $progress.show();
                $upload.text( '暂停上传' );
                break;

            case 'paused':
                $progress.show();
                $upload.text( '继续上传' );
                break;

            case 'confirm':
                $progress.hide();
                $upload.text( '开始上传' ).addClass( 'disabled' );

                stats = uploader.getStats();
                if ( stats.successNum && !stats.uploadFailNum ) {
                    setState( 'finish' );
                    return;
                }
                break;
            case 'finish':
                stats = uploader.getStats();
                $( '.btns' ).find('.uploadBtn').hide();
                if ( stats.successNum ) {
                    alert( '上传成功' );
                } else {
                    // 没有成功的图片，重设
                    state = 'done';
                    location.reload();
                }
                break;
        }

        updateStatus();
    }

    uploader.onUploadProgress = function( file, percentage ) {
        var $li = $('#'+file.id),
            $percent = $li.find('.progress span');

        $percent.css( 'width', percentage * 100 + '%' );
        percentages[ file.id ][ 1 ] = percentage;
        updateTotalProgress();
    };

    uploader.onFileQueued = function( file ) {

        $( '.btns' ).find('.uploadBtn').show();
        fileCount++;
        fileSize += file.size;

        if ( fileCount === 1 ) {
            $placeHolder.addClass( 'element-invisible' );
            $statusBar.show();
        }
        addFile( file );
        setState( 'ready' );
        updateTotalProgress();
    };

    uploader.onFileDequeued = function( file ) {
        fileCount--;
        fileSize -= file.size;

        if ( !fileCount ) {
            setState( 'pedding' );
        }

        removeFile( file );
        updateTotalProgress();

    };

    uploader.on( 'all', function( type ) {
        var stats;
        switch( type ) {
            case 'uploadFinished':
                setState( 'confirm' );
                break;

            case 'startUpload':
                setState( 'uploading' );
                break;

            case 'stopUpload':
                setState( 'paused' );
                break;

        }
    });

    //加载的时候，页面加载的时候模拟文件加入队列进行图片的编辑回显
    uploader.on('ready',function(){
        var id = $("#id").val();
        if(typeof(id) == 'undefined'){
            return;
        }
        $.ajax({
            url:url+'?id='+id+'&base='+base,//数据库获取文件信息
            type:'GET',
            async:false,
            success:function(files){
                //var files = eval('('+files+')');
                for(var i = 0; i < files.length; i++){
                    var obj ={};
                    statusMap = {};
                    fileCount++;
                    fileSize += files[i].size;
                    if ( fileCount === 1 ) {
                        $placeHolder.addClass( 'element-invisible' );
                        $statusBar.show();
                    }

                    obj.id=files[i].id;
                    obj.name=files[i].name;
                    obj.type=files[i].type;
                    obj.size=files[i].size;
                    obj.ret=files[i].url;
                    obj.source=this;
                    obj.flog=true;
                    obj.status = 'complete',
                        obj.getStatus = function(){
                            return '';
                        }
                    obj.version = WebUploader.Base.version;
                    obj.statusText = '';
                    obj.setStatus = function(){
                        var prevStatus = statusMap[this.id];
                        typeof text !== 'undefined' && (this.statusText = text);
                        if(status !== prevStatus){
                            statusMap[this.id] = status;
                            //文件状态设置为已完成
                            uploader.trigger('statuschage',status,prevStatus);
                        }
                    }
                    addFile(obj);
                    setState( 'ready');
                    updateStatus('ready');
                }
            }
        });
    });

    uploader.on('uploadSuccess',function(file,response){

        response = $.makeArray(response);
        var filename =  $('#uploader').data('name');
        if(muit_type == 'single' && $('.img_input').val() == 'undefined'){
            $('input[name="'+filename+'"]').val(response[0].filePath) ;
        }else{
            input = '<input name="'+filename+'['+response[0].id+']" type="hidden" value="'+response[0].filePath+'">';
            $wrap.append( input );
        }

        ////setState('finish');
        //console.log(response);
        //console.log(file);
    })

    uploader.onError = function( code ) {
        if(code == 'Q_EXCEED_NUM_LIMIT'){
            code = '文件数量超过';
        }else if(code == 'Q_EXCEED_SIZE_LIMIT'){
            code = '文件大小超过';
        }
        alert( 'Eroor: ' + code );
    };

    $upload.on('click', function() {
        if ( $(this).hasClass( 'disabled' ) ) {
            return false;
        }

        if ( state === 'ready' ) {
            uploader.upload();
        } else if ( state === 'paused' ) {
            uploader.upload();
        } else if ( state === 'uploading' ) {
            uploader.stop();
        }
    });

    $info.on( 'click', '.retry', function() {
        uploader.retry();
    } );

    $info.on( 'click', '.ignore', function() {
        alert( 'todo' );
    } );

    $upload.addClass( 'state-' + state );
    updateTotalProgress();
});

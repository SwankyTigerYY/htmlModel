<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:52
 */

namespace app\index\controller;

use think\Controller;

class News extends Controller{
    public function view_index(){
        return $this->fetch();
    }
    public function maintenance_index(){
    return $this->fetch();
}

    public function add(){
        return $this->fetch('offcanvas');
    }

    public function edit(){
        $info = [
            'zhuti' => '主题',
            'faburen' => '发布人',
        ];
        $time = [
            'begin_time' => time(),
            'end_time' => time()
        ];
        $this->assign('info', $info);
        $this->assign('time', $time);
        return $this->fetch('offcanvas');
    }

    public function save(){
        $this->success('添加成功');
    }
}
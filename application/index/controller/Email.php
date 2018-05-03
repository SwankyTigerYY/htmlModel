<?php
/**
 * Created by PhpStorm.
 * User: zeus
 * Date: 2018/5/3
 * Time: 14:43
 */

namespace app\index\controller;

use think\Controller;

class Email extends Controller{
    /**
     * 收件箱*/
    public function received(){
        return $this->fetch();
    }

    /**
     * 发件箱*/
    public function send(){
        return $this->fetch();
    }

    /**
     * 新建*/
    public function add(){
        return $this->fetch();
    }

    /**
     * 保存*/
    public function save(){
        $this->success('发送成功');
    }
}
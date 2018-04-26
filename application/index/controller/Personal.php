<?php
/**
 * Created by PhpStorm.
 * User: zeus
 * Date: 2018/4/26
 * Time: 13:44
 */
namespace app\index\controller;

use think\Controller;

class Personal extends Controller{
    //个人设置
    public function index(){
        return $this->fetch();
    }
}
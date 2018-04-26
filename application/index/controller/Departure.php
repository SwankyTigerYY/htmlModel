<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:59
 */

namespace app\index\controller;

use think\Controller;

/**
 * 派遣人员离职管理*/
class Departure extends Controller{
    /**
     * 离职维护*/
    public function maintenance_index(){
        return $this->fetch();
    }
    /**
     * 离职审核*/
    public function audit_index(){
        return $this->fetch();
    }
}
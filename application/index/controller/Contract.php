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
 * 合同*/
class Contract extends Controller{
    /**
     * 合同维护*/
    public function maintenance_index(){
        return $this->fetch();
    }

    /**
     * 合同审核*/
    public function audit_index(){
        return $this->fetch();
    }
}
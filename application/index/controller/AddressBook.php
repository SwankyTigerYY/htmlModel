<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:57
 */

namespace app\index\controller;

use think\Controller;

class AddressBook extends Controller{
    //个人通讯录
    public function personal_index(){
        return $this->fetch();
    }

    //通讯录类型
    public function type_index(){
        return $this->fetch();
    }

    //企业通讯录
    public function enterprise_index(){
        return $this->fetch();
    }
}
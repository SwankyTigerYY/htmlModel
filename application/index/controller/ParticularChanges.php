<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 15:00
 */

namespace app\index\controller;

use think\Controller;

/**
 * 异动管理*/
class ParticularChanges extends Controller{
    /**
     * 用工单位*/
    public function company_index(){
        return $this->fetch();
    }

    /**
     * 员工*/
    public function worker_index(){
        return $this->fetch();
    }

    /**
     * 薪资*/
    public function salary_index(){
        return $this->fetch();
    }

    /** 批量移动*/
    public function batch_move(){
        return $this->fetch();
    }
}
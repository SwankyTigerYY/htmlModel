<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 15:01
 */

namespace app\index\controller;

use think\Controller;

/**
 * 人员报表*/
class Report extends Controller{

    /**
     * 派遣人员月报表*/
    public function month_index(){
        return $this->fetch();
    }

    /**
     * 派遣人员日报表*/
    public function day_index(){
        return $this->fetch();
    }

    /**
     * 离职人员统计*/
    public function personal_count(){
        return $this->fetch();
    }

    /**
     * 离职原因统计*/
    public function reason_index(){
        return $this->fetch();
    }
}
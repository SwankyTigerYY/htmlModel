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
 * 社会保证金*/
class SocialSecurity extends Controller{

    /**
     * 社保增员办理
     */
    public function increase_index(){
        return $this->fetch();
    }

    /**
     * 人员社保信息维护
     */
    public function maintenance_index(){
        return $this->fetch();
    }

    /**
     * 人员社保变更执行
     */
    public function perform_index(){
        return $this->fetch();
    }

    /**
     * 人员社保变更记录
     */
    public function log_index(){
        return $this->fetch();
    }

    /**
     * 员工保险费用补缴
     */
    public function pay_index(){
        return $this->fetch();
    }
}
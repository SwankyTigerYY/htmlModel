<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:55
 */

namespace app\index\controller;

use think\Controller;

class Process extends Controller{
    //待办事项
    public function wait_index(){
        return $this->fetch();
    }
    //流量监控
    public function flow_monitoring(){
        return $this->fetch();
    }

    //历史单据
    public function historical_documents(){
        return $this->fetch();
    }
}
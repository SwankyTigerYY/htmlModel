<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:56
 */

namespace app\index\controller;

use think\Controller;

class WorkLog extends Controller{
    //提交
    public function submit_index(){
        $this->assign('time', date('Y-m-d', time()));
        return $this->fetch();
    }
    //评分
    public function score_index(){
        return $this->fetch();
    }

    //查询
    public function select_index(){
        return $this->fetch();
    }

    //分类
    public function classification_index(){
        return $this->fetch();
    }
}
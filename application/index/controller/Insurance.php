<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 15:02
 */

namespace app\index\controller;

use think\Controller;


/**
 * 保险
 */
class Insurance extends Controller{

    /**
     * 费用计算
     */
    public function count_index(){
        $this->assign('time', date('Y-m-d H:i:s', time()));
        return $this->fetch();
    }

    /**
     * 费用查询
     */
    public function select_index(){
        return $this->fetch();
    }
}
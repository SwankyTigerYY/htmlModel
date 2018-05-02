<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:58
 */

namespace app\index\controller;

use think\Controller;

/**
 * 劳务派遣
 */
class LaborDispatch extends Controller{
    /**
     * 在职员工*/
    public function employees_index(){
        return $this->fetch('emp_index');
    }

    /**
     * 离职员工*/
    public function departure_index(){
        return $this->fetch();
    }
}
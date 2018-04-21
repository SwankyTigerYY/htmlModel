<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 16:34
 */

namespace app\index\controller;

use think\Controller;

class Common extends Controller{
    public function checkOpenPage(){
        $this->success();
    }
}
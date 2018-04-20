<?php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    public function index()
    {
        return $this->fetch();
    }
    public function index_v1(){
        $this->assign('num', '第一目录，第一页');
        return $this->fetch();
    }
    public function content(){
        $this->assign('num', '第一目录，第一页');
        return $this->fetch();
    }
    public function content1(){
        $this->assign('num', '第二目录，第一页');
        return $this->fetch('content');
    }
    public function content2(){
        $this->assign('num', '第二目录，第二页');
        return $this->fetch('content');
    }
    public function content3(){
        $this->assign('num', '第二目录，第三页');
        return $this->fetch('content');
    }
    public function content4(){
        $this->assign('num', '第二目录，第四页');
        return $this->fetch('content');
    }
    public function content5(){
        $this->assign('num', '第二目录，第五页');
        return $this->fetch('content');
    }
    public function content6(){
        $this->assign('num', '第三目录，第一页');
        return $this->fetch('content');
    }
    public function content7(){
        $this->assign('num', '第三目录，第二页');
        return $this->fetch('content');
    }
    public function content8(){
        $this->assign('num', '第三目录，第三页');
        return $this->fetch('content');
    }
    public function content9(){
        $this->assign('num', '第三目录，第四页');
        return $this->fetch('content');
    }
    public function download(){
        $data=array(
            array("id"=>"test1","user_name"=>"123","sn"=>"'20170606227"),
            array("id"=>"test2","user_name"=>"456","sn"=>"'20170606228"),
            array("id"=>"test3","user_name"=>"789",'sn'=>"'20170606229"),
        );
        $string='序号,姓名,学号' . PHP_EOL;
        foreach ($data as $key => $value)
        {
            foreach ($value as $k => $val)
            {
                $value[$k]=iconv('utf-8','gb2312',$value[$k]);
            }

            $string .= implode(",",$value)."\n"; //用英文逗号分开
        }
        $char = $string;
        unset($list);
        //保存文档并返回文件名
        $dir = 'CSV/data';
        $filename = $dir . 'output' . time() . '.csv';
        if (!is_dir($dir)) {
            mkdir($dir);
        }

        //改变编码格式
        $char = iconv("UTF-8", "gbk//IGNORE", $char);
        //存文件
        $res = file_put_contents($filename, $char);
        if ($res) {
            $this->success('', '', $filename);
        } else {
            $this->error('导出失败');
        }
    }
}

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
    public function download(){
        $char = '客户单号,客户名称,建立时间,所属区域,业务类型,客户阶段,客户地址,邮政编码,客户类别,联系电话,联系人,电子邮件,经营范围,公司介绍,业务员' . PHP_EOL;

        $id = '_' . date('YmdHis');
        $file_char = iconv("UTF-8", "gbk//IGNORE", $char);
        //临时存储目录
        $dir = 'temp' . DS;
//            $dir = 'tmp' . DS;
        //保存文档并返回文件名
        $filename = $dir . 'output' . $id . '.csv';
        if (!is_dir($dir)) {
            mkdir($dir);
        }

        //存文件
        $res = file_put_contents($filename, $file_char);
        if ($res) {
            $this->success('', '', $filename);
        } else {
            //如果没有数据，删除空文档CSV
            unlink($filename);
            $this->error('导出失败1');
        }
    }

    /**
     * 下载弹框
     * @param string $filename 文件路径
     */
    public function downFile($filename)
    {
        //判断文件路径是否存在
        if (file_exists($filename)) {
            //提示下载文件
            ob_end_clean();
            //下载文件需要用到的头
            header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Length: ' . filesize($filename));
            header('Content-Disposition: attachment; filename=' . basename($filename));
            readfile($filename);
        } else {
            $this->error('导出失败');
        }
    }
}
<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

function export_csv($data)
{
    $string="";
    foreach ($data as $key => $value)
    {
        foreach ($value as $k => $val)
        {
            $value[$k]=iconv('utf-8','gb2312',$value[$k]);
        }

        $string .= implode(",",$value)."\n"; //用英文逗号分开
    }
    $filename = date('Ymd').'.csv'; //设置文件名
    header("Content-type:text/csv");
    header("Content-Disposition:attachment;filename=".$filename);
    header('Cache-Control:must-revalidate,post-check=0,pre-check=0');
    header('Expires:0');
    header('Pragma:public');
    echo $string;
}
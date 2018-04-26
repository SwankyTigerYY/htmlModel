<?php
/**
 * Created by PhpStorm.
 * User: ZhaoTingQuan
 * Date: 2018/4/21/021
 * Time: 14:58
 */

namespace app\index\controller;

use think\Controller;

class Customer extends Controller{
    //用工单位维护
    public function unit_maintenance_index(){
        return $this->fetch();
    }

    //用工单位合同维护
    public function contract_maintenance_index(){
        return $this->fetch();
    }

    //供应商信息维护
    public function supplier_information_maintenance_index(){
        return $this->fetch();
    }

    //供应商合同管理
    public function supplier_contract_management_index(){
        return $this->fetch();
    }

    //供应商综合查询
    public function supplier_comprehensive_enquiries_index(){
        return $this->fetch();
    }

    //客户跟进
    public function customer_tracking_index(){
        return $this->fetch();
    }

    //公共客户
    public function common_customer_index(){
        return $this->fetch();
    }

    //客户跟进记录
    public function customer_tracking_log(){
        return $this->fetch();
    }

    //待审批客户
    public function customer_pending_index(){
        return $this->fetch();
    }

    //删除客户
    public function delete_customer_index(){
        return $this->fetch();
    }

    //客户跟进统计
    public function customer_tracking_count(){
        return $this->fetch();
    }

    //求职查询
    public function job_search(){
        return $this->fetch();
    }

    //跟进费用统计
    public function cost_statistic(){
        return $this->fetch();
    }
}
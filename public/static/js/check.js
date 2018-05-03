// 页面输入check
function checkNull(val,name){
	val = $.trim(val);
	if (val == '') {
		alert("请输入"+name+"!");
		return false;
	}
	return true;
}

function checkSel(obj,name){
    if (obj.prop("tagName") == "SELECT"){//SELECT下拉框
        if (obj.val() == "" || obj.val() == "0"||obj.val() == null) {
            alert("请选择" + name + "!");
            return false;
        } else {
            return true;
        }
    }
    if (obj.prop("tagName") == "INPUT" && obj.attr("type") == "checkbox"){//checkbox单选框
        for (i=0;i<obj.length;i++) {
            if(obj[i].checked) return true;
        }
        alert("请选择"+name+"!");
        return false;
    }
    if (obj.length ==0) {//选择商品等
        alert("请选择"+name+"!");
        return false;
    }
    return true;
}

function checkLength(val,name,maxLen){
	if (val.length > maxLen) {
		alert(name+"最多可输入"+maxLen+"个字符!");
		return false;
	}
	return true;
}

function checkLengthRange(val,name,minLen,maxLen){
    if (val.length > maxLen || val.length < minLen) {
        if (minLen == maxLen) {
            alert(name+"的长度为"+minLen+"个字符!");
        }else{
            alert(name+"的长度为"+minLen+"至"+maxLen+"个字符!");
        }
        return false;
    }
    return true;
}

function checkNumber(val,name){
    if (val === "") return true;
	var re = /^[\d]+$/;
	if (!re.test(val)) {
		alert(name+"格式不正确，请检查!");
		return false;
	}
	return true;
}

function checkNumberPoint(val,name){
    if (val === "") return true;
	var re = /^[\d.]+$/;
	//var re = /^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$/;//非负浮点数（正浮点数 + 0）
	if (!re.test(val)) {
		alert(name+"格式不正确，请检查!");
		return false;
	}
	return true;
}

function checkRange(val,name, minVal, maxVal){
    if (minVal === "") {
        if (val > maxVal) {
            alert(name + "的最大值为" + maxVal + "，请检查!");
            return false;
        }
    } else if (maxVal === "") {
        if (val < minVal) {
            alert(name + "的最小值为" + minVal + "，请检查!");
            return false;
        }
    } else {
        if (val < minVal || val > maxVal) {
            alert(name + "的输入范围是" + minVal + "至" + maxVal + "，请检查!");
            return false;
        }
    }
    return true;
}

function checkFraction(val, name){
    var re = /^[\d]\/[\d]+$/;
    if (!re.test(val)) {
        alert(name+"格式不正确，请检查!");
        return false;
    }
    return true;
}

function checkTel(val,name){
    if (val === "") return true;
    var re = /^[\d-]+$/;
    if (!re.test(val)) {
        alert(name+"格式不正确，请检查!");
        return false;
    }
    return true;
}
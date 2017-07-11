//常用函数


Js文件基础结构

//*********
// _________ 全局变量
var g_time = {}

(function() {
    //*********
    // _________ 变量
    var i_data = {}

    //*********
    // _________ 执行

    //*********
    // _________ 绑定

    //*********
    // _________ 函数

    //*********
    // _________ ajax
})()


function console_data(res, name) {
    if (res.code != '1') {
        console.log(name + '数据错误! ->' + res.msg);
    } else {
        i_data.i += 1;
        console.log('运行排序:' + i_data.i, '接口:' + name, res);
    }

}



function ajax_fun() {
    var url_str = '';
    var str = '';
    var info = str + ' : ' + url_str;
    $.ajax({
        url: url_str,
        method: '',
        data: {}
    }).done(function(res) {
        ajaxResHandle(res, fun, [info]);
    }).fail(function(jqXHR, textStatus) {

        consloe.log(textStatus);
    });
}



function ajaxResHandle(data, callback, arg) {
    if (data) {
        var js_string = JSON.stringify(data);
        var js_obj = JSON.parse(js_string);
        let getType = Object.prototype.toString;
        if (getType.call(js_obj) !== '[object Object]') {
            throw '返回的结果必须是对象!';
        }
        if (callback && getType.call(callback) !== '[object Function]') {
            throw '回调必须是一个函数!';
        }
        if (arg && getType.call(arg) !== '[object Array]') {
            throw '参数只能以数组的方式传入!';
        }
        if (js_obj.code == 1) {
            arg = arg || [];
            arg.unshift(js_obj);
            callback && callback.apply(callback, arg);
        } else if (js_obj.code == 403) {
            location.replace('/html/account/login.html?ru=' + decodeURIComponent(location.href));
        } else {
            js_obj.msg && alert(js_obj.msg);
        }
    } else {
        console.info('接口没有返回数据!');
    }
}

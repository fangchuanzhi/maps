(function(a){a.extend(a.validator.messages,{required:"必填信息",remote:"请修正该信息",email:"请输入正确格式的电子邮件",url:"请输入合法的网址",date:"请输入合法的日期",dateISO:"请输入合法的日期 (YYYY-MM-DD).",number:"请输入合法的数值",digits:"请输入一个正整数",creditcard:"请输入合法的信用卡号",equalTo:"请再次输入相同的值",accept:"请输入拥有合法后缀名的字符串",maxlength:a.validator.format("最多可以输入 {0} 个字符"),minlength:a.validator.format("最少要输入 {0} 个字符"),rangelength:a.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),range:a.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),max:a.validator.format("请输入不大于 {0} 的数值"),min:a.validator.format("请输入不小于 {0} 的数值")})}(jQuery));
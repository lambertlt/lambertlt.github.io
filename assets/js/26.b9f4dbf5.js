(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{309:function(a,s,t){"use strict";t.r(s);var v=t(17),_=Object(v.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"考题易错笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#考题易错笔记"}},[a._v("#")]),a._v(" 考题易错笔记")]),a._v(" "),t("h3",{attrs:{id:"常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[a._v("#")]),a._v(" 常量")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("0382 是常量？")]),a._v(" "),t("ul",[t("li",[a._v("因为 0 开头是八进制，不应有 8 出现")]),a._v(" "),t("li",[a._v("故错误")])])]),a._v(" "),t("li",[t("p",[a._v("'123' 是常量？")]),a._v(" "),t("ul",[t("li",[a._v("字符串应是双引号"),t("code",[a._v('""')])]),a._v(" "),t("li",[a._v("故错误")])])]),a._v(" "),t("li",[t("p",[a._v("2.46E-1.5 是常量？")]),a._v(" "),t("ul",[t("li",[a._v("科学计数法 "),t("code",[a._v("-")]),a._v("符号右边应为整数 正确形式为"),t("code",[a._v("2.46E-15")]),a._v("代表 "),t("code",[a._v("2.46 * 10^3")])]),a._v(" "),t("li",[a._v("故错误")])])])]),a._v(" "),t("h3",{attrs:{id:"运算顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算顺序"}},[a._v("#")]),a._v(" 运算顺序")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("int x = 11; 则表达式（x++*1/3）的值是几")])]),a._v(" "),t("ul",[t("li",[a._v("答案是 3 因为 x 先参与运算后自加 也就是 "),t("code",[a._v("11/3≈3")]),a._v(" 不明白 为什么 x 不加 1 而表达式的值为 3")])])]),a._v(" "),t("li",[t("p",[a._v("在遇到如"),t("code",[a._v("x+=y+=2")]),a._v("这类表达式先从右向左进行赋值运算")])])]),a._v(" "),t("h3",{attrs:{id:"自增运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自增运算符"}},[a._v("#")]),a._v(" 自增运算符")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("x++ ++x")]),a._v(" 等这类表达式，只与本行语句相关 "),t("code",[a._v("++x")]),a._v("在本行就发生改变 "),t("code",[a._v("x++")]),a._v("到下一行时值会改变")])]),a._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("C  语言程序中，要调用的函数必须在  main( )函数中定义")]),a._v(" "),t("ul",[t("li",[a._v("错因为可以在 main()函数外定义")])])])]),a._v(" "),t("h3",{attrs:{id:"位运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算"}},[a._v("#")]),a._v(" 位运算")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("正确表示条件  100≤x≤300  的  C  表达式是")]),a._v(" "),t("p",[a._v("-"),t("code",[a._v("x>=100&&x<=300")])])])]),a._v(" "),t("h3",{attrs:{id:"循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[a._v("#")]),a._v(" 循环")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("while")]),a._v(" 和 "),t("code",[a._v("do-while")]),a._v(" 的主要区别\n"),t("ul",[t("li",[t("code",[a._v("do-while")]),a._v("  的循环体至少无条件执行一次")])])]),a._v(" "),t("li",[t("code",[a._v("int k=0; while(k=1) k--;")]),a._v(" "),t("ul",[t("li",[a._v("因为 "),t("code",[a._v("k=1")]),a._v("为赋值语句 故是无限循环")])])]),a._v(" "),t("li",[t("code",[a._v("for(语句1,语句2,语句3) 循环体")]),a._v(" "),t("ul",[t("li",[a._v("这里需要注意 进入循环 先执行 语句1，再判断，然后循环体，再是语句3。语句1只执行一次")])])])]),a._v(" "),t("h3",{attrs:{id:"字符串-字符数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串-字符数组"}},[a._v("#")]),a._v(" 字符串(字符数组)")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("字符串(字符数组) 赋值 "),t("code",[a._v('char s[10]; s="student";')]),a._v(" 是否正确")]),a._v(" "),t("ul",[t("li",[a._v("错 字符串数组只有在声明时可以 这样直接赋值")]),a._v(" "),t("li",[a._v("字符数组的赋值只能按元素一一赋值（错误的原因： C 语言并没有提供可以直接操作字符串的运算符；“=”可以用于其他数据类型的赋值，但是不可以直接给字符串赋值)")]),a._v(" "),t("li",[a._v("可以用"),t("code",[a._v("strcpy 和 strcat")]),a._v("实现赋值，但本质也是操作字符")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("strlen(str + 4)")]),a._v("其实是指针操作 "),t("code",[a._v("&str[4]")])])]),a._v(" "),t("li",[t("p",[a._v("字符串长度题 "),t("code",[a._v('strlen("xxxxx")')])]),a._v(" "),t("ul",[t("li",[a._v("转义字符系列: "),t("code",[a._v("\\\\ 表示\\ , \\n 换行 , \\0 字符串结尾标志 , \\01 代表ASCII码为八进制1的字符 , \\x || 0xab 代表十六进制数, \\t 水平制表")])])])]),a._v(" "),t("li",[t("p",[a._v("字符串数组结尾标识符"),t("code",[a._v("\\0")])]),a._v(" "),t("ul",[t("li",[a._v("遇见即为字符数组结尾")]),a._v(" "),t("li",[a._v("字符串数组结尾标识符")])])])]),a._v(" "),t("h3",{attrs:{id:"指针访问-数组元素的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指针访问-数组元素的方法"}},[a._v("#")]),a._v(" 指针访问 数组元素的方法")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("int arr[]={1,2,3,4,5};*p=arr;")]),a._v(" 访问第四个元素的方法\n"),t("ul",[t("li",[t("code",[a._v("arr[3] *(p+3) p[3]")])])])])]),a._v(" "),t("h3",{attrs:{id:"printf-输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#printf-输出"}},[a._v("#")]),a._v(" printf 输出")]),a._v(" "),t("ol",[t("li",[t("code",[a._v('int a=010,b=10, printf("%d,%d",++a,b--);')]),a._v(" 输出的值为什么\n"),t("ul",[t("li",[a._v("因为 010 为 8 进制所以 ++a 等于 8+1 ，b-- 是先运算后自减 所以还是 10")]),a._v(" "),t("li",[a._v("结果为：9 10；")])])]),a._v(" "),t("li",[a._v("关于输出精度问题 "),t("code",[a._v("3/5,3./5,3.0/5.0")]),a._v(" "),t("ul",[t("li",[a._v("带点的是浮点不带的是整形")])])])]),a._v(" "),t("h3",{attrs:{id:"标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[a._v("#")]),a._v(" 标识符")]),a._v(" "),t("ol",[t("li",[a._v("C 语言中把标识符分为三类：关键字，预定义标识符，用户自定义标识符")]),a._v(" "),t("li",[a._v("C 语言区分大小写所以"),t("code",[a._v("IF")]),a._v("是"),t("strong",[a._v("合法")]),a._v("标识符")])]),a._v(" "),t("h3",{attrs:{id:"c-语言布尔值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-语言布尔值"}},[a._v("#")]),a._v(" c 语言布尔值")]),a._v(" "),t("p",[a._v("C 中是没有布尔值的，所以，可以使用相应的整数，来表示布尔值，如 0 为假，非 0 为真")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("求输出结果 此题考验对布尔值得理解 和 逻辑运算符")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('#include<stdio.h>\n  int main()\n  {\n      int x = 2,y = 2,z = 0,a;\n      a = ++x || ++y && z++;\n// 在执行到 || 时 会判断 ++x 的 是否为真，为真就不执行后面的代码\n      printf("%d,%d,%d\\n",x,y,z);\n  }\n\n  结果：\n  3 2 0\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"逻辑运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[a._v("#")]),a._v(" 逻辑运算符 "),t("code",[a._v("&& || !=")])]),a._v(" "),t("ol",[t("li",[a._v("&& 逻辑或当一个为真即为真 后面的表达式或常量将不执行")]),a._v(" "),t("li",[a._v("|| 逻辑与当两个全为真 才为真 一假全假后面的表达式或常量不执行")]),a._v(" "),t("li",[a._v("!= 逻辑不等于 判断两侧是否相等")])]),a._v(" "),t("h3",{attrs:{id:"c-字符串长度的计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-字符串长度的计算"}},[a._v("#")]),a._v(" c 字符串长度的计算")]),a._v(" "),t("ol",[t("li",[a._v("字符串 "),t("code",[a._v('"\\\\Too\\n\\97\\\'"')]),a._v("的长度是\n"),t("ul",[t("li",[a._v("strlen() 传的参数是一个字符数组首地址")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" \\\\      代表 /\n \\n      代表 换行\n \\97     代表 a\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"ascll-字符代表码-与转义字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ascll-字符代表码-与转义字符"}},[a._v("#")]),a._v(" ascll 字符代表码 与转义字符")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("注：大小写字母的转换 'a' -'A' = 32\n\n‘0’ 的ASCLL码为48\n\n‘a ’的ASCLL码为97\n\n’A’ 的ASCLL码为65\n\n'0'即为字符 0\n\n'\\0'的ascll码为0，用于字符串的结束符\n\nNULL 其实也是ascll为0的数，只是表示方式不一样，NULL= (void*) 0；\n\n回车，ASCII 码 13\n换行，ASCII 码 10\n空格，ASCII 码 32\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("image",{attrs:{src:"https://bkimg.cdn.bcebos.com/pic/e850352ac65c103880a07b53bc119313b17e8941@wm_1,g_7,k_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5"}}),a._v(" "),t("h3",{attrs:{id:"输入输出语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入输出语句"}},[a._v("#")]),a._v(" 输入输出语句")]),a._v(" "),t("ul",[t("li",[a._v("格式化输入输出"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  printf()\n  scanf()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[a._v("单个字符输入输出"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  getchar()\n  putchar()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[a._v("字符串输入输出"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  gets()\n  puts()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"存储类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储类型"}},[a._v("#")]),a._v(" 存储类型")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("auto 自动型 函数中所有的非静态局部变量")])]),a._v(" "),t("li",[t("p",[a._v("static 静态型 在变量前加上 static 关键字的变量 (在使用期间 未设置初始值默认 0，并且只进行一次赋初值 初值具有可继承性)")])]),a._v(" "),t("li",[t("p",[a._v("extern 外部变量 一般用作全局变量作用域的扩展")])]),a._v(" "),t("li",[t("p",[a._v("register 寄存器类型 一般经常被使用的的变量（如某一变量需要计算几千次）可以设置成寄存器变量，register 变量会被存储在寄存器中，计算速度远快于存在内存中的非 register 变量")])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://www.sohu.com/a/204230419_554035",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多详情见"),t("OutboundLink")],1)])])]),a._v(" "),t("h3",{attrs:{id:"精度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精度"}},[a._v("#")]),a._v(" 精度")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("double")]),a._v(" 用 "),t("code",[a._v("%lf")]),a._v(" 表示， "),t("code",[a._v("long int")]),a._v(" 用 "),t("code",[a._v("%ld")]),a._v(" 表示")])]),a._v(" "),t("h3",{attrs:{id:"进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进制"}},[a._v("#")]),a._v(" 进制")]),a._v(" "),t("ul",[t("li",[a._v("16 进制 每一位 是 2 进制的四位")])]),a._v(" "),t("h3",{attrs:{id:"变量大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量大小"}},[a._v("#")]),a._v(" 变量大小")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("char")]),a._v(" 是 1 个字节")]),a._v(" "),t("li",[t("code",[a._v("int")]),a._v(" 是 4 个字节")])]),a._v(" "),t("h3",{attrs:{id:"递归-递龟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归-递龟"}},[a._v("#")]),a._v(" 递归(递龟)")]),a._v(" "),t("p",[a._v("常用递归的有阶乘，累加。并且只使用分之结构")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("直接递归")])]),a._v(" "),t("li",[t("p",[a._v("间接递归")])])]),a._v(" "),t("p",[a._v("###　位运算 ("),t("code",[a._v("& | >> <<")]),a._v(")")]),a._v(" "),t("p",[a._v("转化成２进制数　然后　上下进行逻辑运算")])])}),[],!1,null,null,null);s.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{320:function(s,e,t){"use strict";t.r(e);var a=t(17),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"开始第一个项目时的基本须知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始第一个项目时的基本须知"}},[s._v("#")]),s._v(" 开始第一个项目时的基本须知")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("把入口文件 index.php 从 public 里挪到根目录然后 并修改 index.php 里的目录位置")])]),s._v(" "),t("li",[t("p",[s._v("把 public 里的.htaccess 移动到根目录 可以在 url 里少写一个 index.php")])]),s._v(" "),t("li",[t("p",[s._v("打开 config.php 页面把第一个 defale 改成 true 开始调试模式\n进入 database.php 文件，把数据库信息改为自己的")])]),s._v(" "),t("li",[t("p",[s._v("在 /application /index 下创建 view 和 model")]),s._v(" "),t("p",[s._v("并在 view 下创建 index 目录 在该路下放 index.html 网页")])]),s._v(" "),t("li",[t("p",[s._v("如果用框架，需要把框架放在 public\\static\\ 下 引用时")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<link rel="stylesheet" href="public/static/bootstrap.min.css">\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在使用 tp5 时，创建新的控制器时，控制器的首字母要大写，方法也要和")])])]),s._v(" "),t("h1",{attrs:{id:"文档笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档笔记"}},[s._v("#")]),s._v(" 文档笔记")]),s._v(" "),t("p",[s._v("use 可以导入一个命名空间的类库 导入之后可以直接调用类库\n用封装好的 assign 和 fetch 时要调用 Controller\n模板 / 控制器 / 操作\nurl 驼峰法 开启区分大小写 ，修改 url_convert => 为 false(就是取消 url 强制转换为小写)\n如果你的服务器环境不支持 pathinfo 方式的 URL 访问，可以使用兼容方式，\n例如：http://tp5.com/index.php?s=/index/Index/index\n方法里有参数时，通过 url 这样传参, 在网址后面要加 "),t("strong",[s._v("?")]),s._v("， 参数不用加**$"),t("strong",[s._v("符，传多个参数时中间用")]),s._v("&**链接\n或者用 **/ **这种方法简单")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://localhost/php/__tp/index/index/new_list?name='1'&new='2'\nhttp://localhost/php/__tp/index/index/new_list/name/111/new/222\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以对 url 进行简化 修改 'url_param_type' => 1,此时参数必须按照顺序进行书写，按顺序绑定参数的话，操作方法的参数只能使用 URL pathinfo 变量，而不能使用 get 或者 post 变量。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://localhost/php/__tp/index/index/new_list/111/222\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果觉得访问 操作的时候 url 太长 可以修改 route.php 里添加路由规则 改了之后 就 不用写 模板 控制器了 直接写方法就可以访问到")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("return [\n\t添加路由规则 路由到 index控制器的hello操作方法\n'hello/:name' => 'index/index/hello',\n];\n//该路由规则表示所有 hello 开头的并且带参数的访问都会路由到 index 控制器的 hello 操作方法。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("闭包就是只有一个方法的类")]),s._v(" "),t("p",[s._v("连表操作模型")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$sql=Db::field('s.name,a.*')//截取表s的name列 和表a的全部\n    ->table(['表a'=>'a','表s'=>'s'])\n    ->where('a.name=s.id')//查询条件语句\n    ->select();\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"tp5-关于前端页面框架存放位置及引用的方法，还有路由的相关问题总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tp5-关于前端页面框架存放位置及引用的方法，还有路由的相关问题总结"}},[s._v("#")]),s._v(" Tp5 关于前端页面框架存放位置及引用的方法，还有路由的相关问题总结")]),s._v(" "),t("p",[s._v("当需要用 bootstrap 等框架时，应放到项目根目录：/public/static/ 下")]),s._v(" "),t("p",[s._v("在页面中引用的三种方法：")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v('<link rel="stylesheet" href="/public/static/css/bootstrap.min.css">')])])]),s._v(" "),t("li",[t("p",[t("code",[s._v('{css href="__CSS__/css/bootstrap.min.css"}')])])]),s._v(" "),t("li",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('//在application/config.php\t下第141行处 在中括号[]里 添加框架位置 public前面不要加/\n// 视图输出字符串内容替换\n\'view_replace_str\'       => [\n    "__CSS__" => "public/static/css",\n],\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("p",[s._v("使用了这种方法在页面里引用方式 可以省去写前面的 /public/static/css")]),s._v(" "),t("p",[t("code",[s._v('<link rel="stylesheet" href="__CSS__bootstrap.min.css">')])]),s._v(" "),t("p",[s._v("用 Tp5 使用其他框架后，url 按照 如下方式 不能正确访问到框架")]),s._v(" "),t("ol",[t("li",[s._v("用 Tp5 使用其他框架后，url 按照 如下方式 不能正确访问到框架")])]),s._v(" "),t("p",[t("code",[s._v("http://localhost/php/__tp/index/index/index")])]),s._v(" "),t("p",[s._v("解决办法")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("http://localhost/php/__tp/ //不详细写到视口")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("http://localhost/php/__tp/?s=index/index/index //这种是使用兼容格式")])])])]),s._v(" "),t("p",[s._v("以上都是临时的")]),s._v(" "),t("p",[s._v("TP5 项目放在 htdocs 根目录下，项目名称大写，")])])}),[],!1,null,null,null);e.default=n.exports}}]);
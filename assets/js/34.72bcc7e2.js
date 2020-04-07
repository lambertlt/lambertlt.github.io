(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{315:function(s,n,t){"use strict";t.r(n);var a=t(17),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ps-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps-命令"}},[s._v("#")]),s._v(" PS 命令")]),s._v(" "),t("p",[s._v("在 Linux 系统中，ps(Process Status 的缩写)命令常常用来用来列出系统中当前运行的进程。ps 命令列出的是当前那些进程的快照，就是执行 ps 命令的那个时刻的那些进程，如果想要动态的显示进程信息，就可以使用 top 命令。要对进程进行监测和控制，首先必须要了解当前进程的情况，也就是需要查看当前进程，而 ps 命令就是最基本同时也是非常强大的进程查看命令。使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等。总之大部分信息都是可以通过执行该命令得到的。")]),s._v(" "),t("p",[s._v("Linux 上进程有 5 种状态:")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("进程状态")]),s._v(" "),t("th",[s._v("含义")]),s._v(" "),t("th",[s._v("对应 ps 命令的状态码")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("运行")]),s._v(" "),t("td",[s._v("正在运行或在运行队列中等待")]),s._v(" "),t("td",[s._v("R 运行 runnable (on run queue)")])]),s._v(" "),t("tr",[t("td",[s._v("中断")]),s._v(" "),t("td",[s._v("休眠中, 受阻, 在等待某个条件的形成或接受到信号")]),s._v(" "),t("td",[s._v("S 中断 sleeping")])]),s._v(" "),t("tr",[t("td",[s._v("不可中断")]),s._v(" "),t("td",[s._v("收到信号不唤醒和不可运行, 进程必须等待直到有中断发生")]),s._v(" "),t("td",[s._v("D 不可中断 uninterruptible sleep (usually IO)")])]),s._v(" "),t("tr",[t("td",[s._v("僵死")]),s._v(" "),t("td",[s._v("进程已终止, 但进程描述符存在, 直到父进程调用 wait4()系统调用后释放")]),s._v(" "),t("td",[s._v("Z 僵死 a defunct (”zombie”) process")])]),s._v(" "),t("tr",[t("td",[s._v("停止")]),s._v(" "),t("td",[s._v("进程收到 SIGSTOP, SIGSTP, SIGTIN, SIGTOU 信号后停止运行运行")]),s._v(" "),t("td",[s._v("T 停止 traced or stopped")])])])]),s._v(" "),t("p",[s._v("ps 的参数众多 在次不一一列举")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义\n-A 列出所有的行程\n-w 显示加宽可以显示较多的资讯\n-au 显示较详细的资讯\n-aux 显示所有包含其他使用者的行程\nau(x) 输出格式 :\nUSER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND\nUSER: 行程拥有者\nPID: pid\n%CPU: 占用的 CPU 使用率\n%MEM: 占用的记忆体使用率\nVSZ: 占用的虚拟记忆体大小\nRSS: 占用的记忆体大小\nTTY: 终端的次要装置号码 (minor device number of tty)\nSTAT: 该行程的状态:\nD: 无法中断的休眠状态 (通常 IO 的进程)\nR: 正在执行中\nS: 静止状态\nT: 暂停执行\nZ: 不存在但暂时无法消除\nW: 没有足够的记忆体分页可分配\n<: 高优先序的行程\nN: 低优先序的行程\nL: 有记忆体分页分配并锁在记忆体内 (实时系统或捱 A I/O)\nSTART: 行程开始时间\nTIME: 执行的时间\nCOMMAND:所执行的指令\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h1",{attrs:{id:"kill-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill-命令"}},[s._v("#")]),s._v(" Kill 命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kill PID // 杀死进程\nkill -KILL PID // 强制杀死进程\nkill -9 PID // 彻底杀死进程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
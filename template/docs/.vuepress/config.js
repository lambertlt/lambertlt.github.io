module.exports = {
  base: '/',
  dest: './dist',
  title: 'lambert',
  description:
    '记录生活，记录自己',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  theme: 'indigo-material',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'lambert',
      description:
        '记录生活，记录自己'
    }
  },
  markdown: {
    lineNumbers: true //是否开启文章代码左边的行号显示
  },
  themeConfig: {
    placeholder: '看看有什么',
    searchReply: '这个真的没有...',
    author: 'lambert', //侧边栏的设置
    email: 'lambert_y_y@163.com',
    pagination: '10', //每一页显示的文章个数
    avatar: '/avatar.jpg', //头像地址
    brand: '/brand.jpg', //头像背景图片地址
    github: 'https://github.com/lambertlt', //点击github跳转的地址
    vssue: {
      //评论的配置,
      need: false, //是否需要评论
      option: {
        //公共的Vssue配置
        owner: '', //用户名
        repo: '', //仓库名
        locale: 'zh'
      },
      development: {
        //开发环境下的配置
        clientId: '',
        clientSecret: ''
      },
      production: {
        //生产环境的配置
        clientId: '',
        clientSecret: ''
      }
    },
    menus: {
      //侧边栏的文字
      tags: '标签分类',
      home: '主页',
      all: '时间归档',
      github: 'Github',
      about: '自我介绍'
    }
  }
};

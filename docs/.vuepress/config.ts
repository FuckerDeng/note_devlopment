import { defineUserConfig ,defaultTheme} from 'vuepress'

export default defineUserConfig({
    // base:"/notes/",
  lang: 'zh-CN',
  title: '常用笔记',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    colorModeSwitch: false,
    logo: "/imgs/logo.jpg",

    // 在这里进行配置
    navbar:[
        {
            text: '笔记导航',
            link: '/guide/',
          },
    ]
  }),
})
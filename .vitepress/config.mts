import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft Xiyu Survival",
  description: "Java 1.21.11",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '网页地图', link: 'http://mcmap.943689.top' }
    ],

    sidebar: [
      {
        text: '新手指南',
        items: [
          { text: '服务器概述', link: '/overview' },
          { text: '玩家命令列表', link: '/commands' },
          { text: '联系我们', link: '/contact' }
        ]
      },
      {
        text: '玩法和特性',
        items: [
          { text: '玩法和特性概述', link: '/features' },
          { text: '登录', link: '/login' },
          { text: 'TPA', link: '/tpa' },
          { text: '每日任务', link: '/daily-quests' },
          { text: '长期任务', link: '/long-term-quests' },
          { text: '点数', link: '/points' },
          { text: '商店', link: '/shop' },
          { text: 'McMMO', link: '/mcmmo' },
          { text: '箱子锁', link: '/blocklocker' },
          { text: '领地', link: '/dominion' },
          { text: '其他功能(投票 举报 svc)', link: '/other-features' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhentouyu/XiyuSurvival-docs' }
    ]
  }
})

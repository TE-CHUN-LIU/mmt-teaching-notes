// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://te-chun-liu.github.io',
  base: '/mmt-teaching-notes',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'MMT 天賦探索營',
      description: '兩天密集教案 · 17 張投影片完整備課 · 現場逐字稿課堂實錄',
      defaultLocale: 'root',
      locales: {
        root: { label: '繁體中文', lang: 'zh-TW' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TE-CHUN-LIU/mmt-teaching-notes',
        },
      ],
      sidebar: [
        {
          label: '課程總覽',
          link: '/',
        },
        {
          label: 'Day 1 · 系統地基與四大能量',
          items: [{ autogenerate: { directory: 'day1' } }],
        },
        {
          label: 'Day 1 課堂實錄 · 現場逐字稿',
          items: [{ autogenerate: { directory: 'day1-live' } }],
        },
        {
          label: 'Day 2 · 神話總圖與 22 張牌',
          items: [{ autogenerate: { directory: 'day2' } }],
        },
        {
          label: 'Day 2 課堂實錄 · 導師與陰影',
          items: [{ autogenerate: { directory: 'day2-live' } }],
        },
        {
          label: '附錄',
          items: [{ autogenerate: { directory: 'appendix' } }],
        },
      ],
      customCss: ['./src/styles/brand.css'],
      lastUpdated: true,
    }),
  ],
});

# MMT 天賦探索營 ・ 兩天密集教案

> 講師：劉得群（接替韻宇）
> 對應簡報：17 張投影片完整備課
> 部署：<https://te-chun-liu.github.io/mmt-teaching-notes/>

用 Astro Starlight 把備課 markdown 轉成可瀏覽 / 搜尋的教學網站。

## 結構

```
src/content/docs/
├── index.md              ← 課程總覽 + 講者全程原則
├── day1/                 ← 8 張投影片（系統 + 四大能量）
│   ├── 01-opening.md     · Slide 1–2
│   ├── 02-foundation.md  · Slide 3
│   ├── 03-five-cores.md  · Slide 4
│   ├── 04-wind.md        · Slide 5
│   ├── 05-fire.md        · Slide 6
│   ├── 06-water.md       · Slide 7
│   └── 07-earth.md       · Slide 8
├── day2/                 ← 9 張投影片（神話 + 22 張牌）
│   ├── 01-mythology.md   · Slide 9
│   ├── 02-wind-cards.md  · Slide 10–11
│   ├── 03-fire-cards.md  · Slide 12–13
│   ├── 04-water-cards.md · Slide 14–15
│   ├── 05-earth-cards.md · Slide 16–17
│   └── 06-closing.md     · 結尾 + Q&A
└── appendix/
    ├── 01-checklist.md
    ├── 02-followup.md
    ├── 03-card-quick-ref.md
    └── 04-survey.md
```

## 開發

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 輸出到 ./dist
npm run preview   # 預覽 build 結果
```

## 改內容

直接編輯對應的 `.md` 檔。Starlight 自帶：

- 左側側欄自動產生
- 右側「本頁目錄」自動產生（從 H2 / H3）
- 全站搜尋（Pagefind，build 時自動產生索引）
- 深色 / 淺色模式切換

## 部署

push 到 main → GitHub Actions 自動 build → GitHub Pages 上線。

repo settings → Pages → Source 要選 **GitHub Actions**（首次設定一次即可）。

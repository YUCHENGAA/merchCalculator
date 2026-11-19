# 周邊計算機

## 本機開發

```sh
npm ci
npm run dev
```

## 部署到 GitHub Pages

`.github/workflows/deploy.yml` 會在每次推送到 `main` 分支時建置並部署網站。

第一次部署前，請到 GitHub 專案的 **Settings → Pages**，將 **Build and deployment → Source** 設為 **GitHub Actions**。之後推送到 `main` 就會自動重新部署；可在 **Actions** 頁面查看部署狀態。

此專案部署在 `https://YUCHENGAA.github.io/merchCalculator/`，Vite 的 `base` 路徑與 Vue Router 的 Hash 路由已配合 GitHub Pages 專案網站設定。

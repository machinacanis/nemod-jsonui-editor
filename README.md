# NeMod JSON UI Editor

用于编辑、预览和校验 Minecraft 基岩版 JSON UI 文档的桌面工具。

## 技术栈

- 后端：Go + [Wails v3](https://v3.wails.io/)（WebView2）
- 前端：React 18 + TypeScript + Vite
- 样式：Tailwind CSS v4 + 项目内 [shadcn/ui](https://ui.shadcn.com/) 组件（`frontend/src/components/ui`）
- 视觉：自绘 OreUI 风格 token 与斜面材质（2px 硬边、4px 底部厚度、3px 高光、零圆角）

## 开发

```bash
wails3 dev          # 前后端热重载
wails3 build        # 生产构建，产物在 bin/
```

`wails3 dev` / `wails3 build` 会自动安装前端依赖并生成 `frontend/bindings`。

仅前端：

```bash
cd frontend
npm install
npm run build       # tsc + vite build
npm run dev         # 需要后端时会被 Vite 端口占用，一般直接用 wails3 dev
```

## 目录

```
main.go                     Wails 入口与窗口配置
appservice.go               暴露给前端的 Go 服务
frontend/src/index.css      OreUI 设计 token、Tailwind 主题、斜面工具类
frontend/src/components/ui   shadcn/ui 组件（项目内维护）
frontend/src/pages         页面（当前为设计系统预览）
build/                      Wails 构建资产与各平台 Taskfile
```

## 设计系统约定

- 颜色、边框、圆角、斜面全部走 `src/index.css` 的 CSS 变量，不在组件里写死新色值。
- 按钮的三种材质用 `ore-bevel-primary` / `ore-bevel-secondary` / `ore-bevel-destructive`；按下时 `translate-y-1` 并移除斜面。
- 新增 shadcn 组件用 `npx shadcn@latest add <name>`，随后把默认的圆角/尺寸改成 token。

## 视觉参考

仅参考视觉语言，未复制其代码或素材：

- [katorlys/OreUI](https://github.com/katorlys/OreUI)（MPL-2.0）
- [ShenYuanOR/mcui-oreui](https://github.com/ShenYuanOR/mcui-oreui)
- [Spectrollay-OreUI/OreUI](https://github.com/Spectrollay-OreUI/OreUI)（MIT）

## 许可

MIT，见 `LICENSE`。
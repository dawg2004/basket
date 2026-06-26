# RETURN Basketball — 引き継ぎドキュメント

> 最終更新: 2026-06-27  
> リポジトリ: https://github.com/dawg2004/basket  
> 最新コミット: `1232a15`

---

## 1. プロジェクト概要

バスケットボールアスリート向けリカバリーブランド **RETURN Basketball** のランディングページ。

| 項目 | 内容 |
|---|---|
| 親組織 | 一般社団法人 再生医療ネットワーク（RMNW） |
| 公開ブランド | RETURN Basketball |
| 将来展開 | RETURN 3x3 / RETURN Street / RETURN Equine |
| デプロイ | Vercel（GitHub連携、push → 自動デプロイ） |
| リポジトリ | `dawg2004/basket`（GitHub、public） |

---

## 2. 技術スタック

```
React 18 + TypeScript + Vite
Tailwind CSS（CSS変数トークン駆動）
Framer Motion（スクロールリビール・スポットライト）
Lucide React（アイコン）
```

### フォント（Google Fonts）
- **Playfair Display Italic** — 見出し・ワードマーク
- **Inter** — 本文・UI
- **Noto Sans JP** — 日本語テキスト

### デプロイ設定
- `vercel.json` 設定済み（framework: vite, outputDirectory: dist）
- ビルドコマンド: `npm run build`
- strict TypeScript で型チェックが通ること前提

---

## 3. ローカル起動

```bash
git clone https://github.com/dawg2004/basket
cd basket
npm install
npm run dev        # 開発サーバー
npm run build      # 型チェック + 本番ビルド → dist/
npm run preview    # ビルド結果をローカルで確認
```

---

## 4. ディレクトリ構成

```
basket/
├── public/
│   ├── hero.jpg          # ヒーロー背景画像（JPG最適化済み, 298KB）
│   ├── hero.webp         # 同上WebP版（152KB）
│   ├── logo.png          # ナビロゴ（クロームRETURN, 45KB）
│   └── favicon.svg
├── src/
│   ├── brand/
│   │   ├── types.ts              # Brand型定義（全サブブランド共通）
│   │   ├── return-basketball.ts  # ★ コピー・カラー・画像 すべてここ
│   │   └── index.ts             # activeBrand + applyBrandTheme()
│   ├── components/
│   │   ├── Nav.tsx               # ナビバー（スクロール変化・モバイルオーバーレイ）
│   │   ├── Hero.tsx              # スポットライト反転ヒーロー
│   │   ├── HeroPlaceholders.tsx  # SVGフォールバック（実写が無い場合に自動表示）
│   │   ├── Method.tsx            # The Return Method（ポインタスポット付き）
│   │   ├── Support.tsx           # Who We Support
│   │   ├── Network.tsx           # Recovery Is A Team Sport（タイムライン）
│   │   ├── Partners.tsx          # Partner Network
│   │   ├── Stories.tsx           # Athlete Stories
│   │   ├── About.tsx             # About
│   │   ├── Footer.tsx            # フッター
│   │   └── primitives.tsx        # Reveal / SectionHeading 共通コンポーネント
│   ├── hooks/
│   │   ├── useSpotlight.ts       # ヒーロー用スポットライトフック
│   │   └── usePointerSpot.ts     # セクション用ポインタグローフック（再利用可）
│   ├── lib/
│   │   └── motion.ts             # Framer Motion共通バリアント
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Tailwindレイヤー + CSS変数 + .spotlight-reveal等
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── index.html                    # Google Fonts読み込み（Inter/Playfair/Noto Sans JP）
```

---

## 5. ブランドアーキテクチャ（将来サブブランド対応）

全コピー・カラー・画像は **`src/brand/return-basketball.ts` の1ファイル** に集約。  
コンポーネントはブランド設定を読むだけで、内容を直接持たない。

### 新ブランド追加手順

1. `src/brand/return-basketball.ts` を複製 → `return-3x3.ts` 等
2. `theme.colors`・コピー・画像パスを変更（型 `Brand` に従う）
3. `src/brand/index.ts` の `activeBrand` を新ファイルへ向ける
4. `public/` に新ブランドの画像を配置

コンポーネント・モーション・レイアウトは**ノータッチ**で別ブランドに化ける。

### カラートークン（CSS変数）

| 変数 | 値 | 用途 |
|---|---|---|
| `--c-bg` | `5 5 5` = #050505 | 背景 |
| `--c-fg` | `255 255 255` | 主テキスト |
| `--c-muted` | `163 163 163` = #A3A3A3 | 補助テキスト |
| `--c-accent` | `255 106 0` = #FF6A00 | アクセント（橙） |
| `--c-accent-hover` | `230 92 0` | アクセントホバー |
| `--c-line` | `38 38 38` | ボーダー |
| `--c-surface` | `12 12 12` | カード背景 |

---

## 6. ヒーロー スポットライト反転

### 仕組み

```
[base layer]   暗くした背景画像（brightness 0.3 / saturate 0.5）
[reveal layer] 発光した背景画像（brightness 1.1 / saturate 1.25）
               ↑ CSS mask-image の radial-gradient でくり抜き
               ↑ ポインタ位置 (--mx, --my) + 半径 (--mr) をJSで更新
```

### デバイス別挙動

| デバイス | 挙動 |
|---|---|
| デスクトップ（fine pointer） | カーソル追従、ホバーで開きリーブで閉じる。半径 240px |
| スマホ（タッチ） | タップで点灯・その位置に保持、なぞると追従。半径 **57px** |
| reduced-motion | 静止・広め（384px）で常時表示 |

### スポット半径を変えたい場合

`src/hooks/useSpotlight.ts` の定数を編集：

```ts
const DESKTOP_RADIUS = 240; // デスクトップ
const MOBILE_RADIUS  = 57;  // スマホ ← ここを変える
```

### The Return Method カードのスポット

`usePointerSpot` フックを使って、カーソル追従の橙グロー＋マスク枠線を実装。  
他セクションに横展開するには：

```tsx
import { usePointerSpot } from "../hooks/usePointerSpot";
const spot = usePointerSpot();
// コンテナに ref と bind を渡す
<div ref={spot.ref} {...spot.bind} className="relative">
  {/* コンテンツ */}
  <div className="spot-glow pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen" />
  <div className="spot-border pointer-events-none absolute inset-0 rounded-2xl" />
</div>
```

---

## 7. 言語ポリシー

| 英語のまま | 日本語 |
|---|---|
| 各セクションのアイブロウ・ヘッドライン | 本文・サブコピー |
| ヒーロー見出し（Recovery reveals…） | CTA・ナビ |
| ステップ名（Assessment / PRP Recovery / Return To Play） | カード説明・タイムライン |
| ワードマーク RETURN・タグライン | フッター法的表記・免責 |

---

## 8. ナビゲーション

```
[ロゴ画像]  プログラム  アスリート  リカバリー  ネットワーク  パートナー  RMNW    [予約・お問合わせ]
```

- ロゴ: `public/logo.png`（h-10 mobile / h-12 desktop）
- RMNW: 外部リンク `https://rmnw.jp/` → 新規タブ
- `href` が `http` で始まるリンクは自動で `target="_blank"` になる
- CTA「予約・お問合わせ」: `text-xs px-3 py-1.5`（約60%サイズ）

---

## 9. 法的ポジショニング（重要）

RETURN Basketballは**医療機関ではない**。コピーの言い回しのルール：

| 使わない | 代わりに使う |
|---|---|
| 治療する・治す | 回復をサポートする |
| 保証・効果確約 | 〜を目指す・〜を支援する |
| 当社が医療を提供 | 提携医療機関が提供 |

PRPは「医療の特効・近道」ではなく「連携された回復プロセスの一段階」として表現。  
フッターに非医療提供者である旨の法的表記を配置済み。

---

## 10. ヒーロー画像の差し替え

`public/` に以下を置くだけで自動切り替え（コード変更不要）：

```
public/hero.jpg     # ヒーロー画像（現在: バスケ選手＋骨格発光）
public/hero.webp    # WebP版（軽量）
```

画像パスを変えたい場合は `src/brand/return-basketball.ts` の `hero.images` を編集。

---

## 11. コミット履歴

```
1232a15  tweak(nav): shrink CTA button to ~60%
d991a8b  feat(nav): enlarge logo (h-12), remove BASKETBALL submark text
a568ce5  fix(nav): replace logo with dark-bg chrome version
349651b  feat(nav): replace text wordmark with RETURN logo image
6ca48d3  copy(nav): CTA label -> 予約・お問合わせ
3595167  feat(nav): add RMNW external link (rmnw.jp)
b5d0b39  tweak(hero): mobile spotlight radius 57px
28cd8a0  feat: method spotlight (usePointerSpot); halve mobile spotlight
b31732f  feat(hero): tap-driven spotlight on touch devices
deda101  feat: uploaded hero image; Japanese copy; Noto Sans JP
8caa478  init: RETURN Basketball v1 — spotlight-reveal hero, all sections
```

---

## 12. 残タスク・今後の拡張候補

- [ ] `usePointerSpot` を **Who We Support・Partner Network** カードにも横展開
- [ ] フッターのワードマークをロゴ画像に統一
- [ ] 本番URL確定後、OGP（og:image / og:title）をindex.htmlに追加
- [ ] Partner Network のロゴ枠（現在プレースホルダー）に実ロゴを入れる
- [ ] Athlete Stories を実際のアスリートの声に差し替え
- [ ] RETURN 3x3 / Street / Equine サブブランドの設定ファイル作成
- [ ] GitHub PAT の定期ローテーション（現在のトークンはチャット履歴に露出あり → revoke推奨）

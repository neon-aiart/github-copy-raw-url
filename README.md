# <img src="https://cdn.simpleicons.org/github/d1d7e0#gh-dark-mode-only" draggable="false" style="height: 1.3em; width: 1.3em; vertical-align: -0.3em; display: inline-block;" alt="😺"><img src="https://cdn.simpleicons.org/github/181717#gh-light-mode-only" draggable="false" style="height: 1.3em; width: 1.3em; vertical-align: -0.3em; display: inline-block;" alt="😺"> GitHub Copy Raw File URL and Download File

<img src="https://cdn.simpleicons.org/github/d1d7e0#gh-dark-mode-only" draggable="false" style="height: 1.3em; width: 1.3em; vertical-align: -0.3em; display: inline-block;" alt="😺">
<img src="https://cdn.simpleicons.org/github/181717#gh-light-mode-only" draggable="false" style="height: 1.3em; width: 1.3em; vertical-align: -0.3em; display: inline-block;" alt="😺">

[![Version](https://img.shields.io/badge/version-1.3-orange.svg)](https://github.com/neon-aiart/github-copy-raw-url)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

🇯🇵  

GitHubのファイル一覧から、ワンクリックで「Raw URLのコピー」および「ファイルの直接ダウンロード」を行えるユーザースクリプトです  

## ✨ 特徴  

* **ワンクリック操作**: ファイルを開かずに一覧から直接URLコピー＆ダウンロードが可能  
* **高速＆確実な直接通信**: リダイレクトを挟まず `raw.githubusercontent.com` へダイレクトに接続  
* **軽量・低負荷**: `MutationObserver` を採用し、SPA（画面遷移）にも無駄なCPU負荷なく追従  

---

## 💡 ここが進化  

* **パフォーマンス**: １秒ごとの定期監視（`setInterval`）を全廃し、DOMの変化時のみトリガーされる `MutationObserver` を使用  
* **URL生成の安全性**: 文字列の簡易置換ではなく、標準の `URL` API および正規表現を用いて正確な Raw URL を生成  
* **洗練された視覚効果（UI/UX）**:  
  * マウスオーバー時のアクセントカラー強調（テーマ自動対応）  
  * 非同期処理中のぐるぐるアニメーションを表示  
  * 完了時の緑チェックマーク表示（一定時間後にスムーズに復帰）  

---

🇺🇸  

A userscript for GitHub file directories that enables one-click "Raw URL copying" and "direct file downloading".  

## ✨ Features  

* **One-Click Operation**: Copy Raw URLs or download files directly from the directory list without opening them.  
* **Fast & Direct Connection**: Connects directly to `raw.githubusercontent.com` without going through redirects.  
* **Lightweight & High Performance**: Uses `MutationObserver` to respond to SPA dynamic page transitions without wasting CPU resources.  

---

## 💡 Key Improvements  

* **Performance**: Completely eliminated polling interval checks (`setInterval`) in favor of `MutationObserver` to trigger strictly on DOM updates.  
* **Reliable URL Parsing**: Uses the standard `URL` API and regular expressions for precise Raw URL generation instead of fragile string replacement.  
* **Polished Visual Feedback (UI/UX)**:  
  * Accent color highlight on hover (theme-aware).  
  * Animated spinner feedback during async fetch requests.  
  * Smooth green checkmark transition on completion with auto-revert.  

---

## ✨ インストール方法 / Installation Guide  

* **UserScriptマネージャーをインストール (Install the UserScript manager):**  
  * **Tampermonkey**: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)  
  * **ScriptCat**: [https://scriptcat.org/](https://scriptcat.org/)  

* **スクリプトをインストール (Install the script):**  
  * [Greasy Fork](https://greasyfork.org/scripts/596594) にアクセスし、「インストール」ボタンを押してください  
     Access and click the "Install" button.  

---

## 📝 更新履歴 (Changelog)  

### v1.4 and later (Upcoming Tasks / Backlog)  

No Tasks...  

### v1.3 (Current Release)  

☑️ SVGアイコンをheroiconsに変更  
☑️ 完了時と読み込み時とマウスオーバー時の視覚効果を追加  
✅ 変換先を`raw.githubusercontent.com`に変更  

### v1.1 (UnReleased)  

✅ `setInterval`から`MutationObserver`に変更  

### v1.0 (UnReleased)  

✅ ベースコードを修正  

---

## 🛡️ ライセンス・クレジット  

このユーザースクリプトのソースコードは、ねおんが著作権を保有しています  

* **Base Code**: [人民的勤务员](https://greasyfork.org/users/1169082)様のスクリプトの設計思想を参考にさせていただきました  
  GitHub Copy Raw File URL and Download File v2.2.0.22: [https://greasyfork.org/scripts/505501](https://greasyfork.org/scripts/505501)  
* **License**: MIT License  

---

### ⚠️ セキュリティ警告 / Security Warning  

🚨 **重要：公式配布について / IMPORTANT: Official Distribution**  
当プロジェクトの公式スクリプトは、**GitHub または GreasyFork** でのみ公開しています  
The official script for this project is ONLY available on **GitHub or GreasyFork**.  

🚨 **偽物に注意 / Beware of Fakes**  
他サイト等で `.zip`, `.exe`, `.cmd` 形式で配布されているものはすべて**偽物**です  
これらには**ウイルスやマルウェア**が含まれていることが確認されており、非常に危険です  
Any distribution in `.zip`, `.exe`, `.cmd` formats on other sites is **FAKE**.  
These have been confirmed to contain **VIRUSES or MALWARE**.  

### ⚖️ 法的措置と通報について / Legal Action & Abuse Reports  

当プロジェクトの制作物に対する無断転載が確認されたため、過去に **DMCA Take-down通知** を送付しています  
また、マルウェアを配布する悪質なサイトについては、順次 **各機関へ通報 (Malware / Abuse Report)** を行っています  
We have filed **DMCA Take-down notices** against unauthorized re-uploads of my projects.  
Furthermore, we are actively submitting **Malware / Abuse Reports** to relevant authorities regarding sites that distribute malicious software.  

---

## 開発者 (Author)  

**ねおん (Neon)**  
<pre>
<img src="https://www.google.com/s2/favicons?domain=bsky.app&size=16" alt="Bluesky icon"> Bluesky       :<a href="https://bsky.app/profile/neon-ai.art/">https://bsky.app/profile/neon-ai.art/</a>
<img src="https://www.google.com/s2/favicons?domain=github.com&size=16" alt="GitHub icon"> GitHub        :<a href="https://github.com/neon-aiart/">https://github.com/neon-aiart/</a>
<img src="https://neon-aiart.github.io/favicon.ico" alt="neon-aiart icon" height="16"> GitHub Pages  :<a href="https://neon-aiart.github.io/">https://neon-aiart.github.io/</a>
<img src="https://www.google.com/s2/favicons?domain=greasyfork.org&size=16" alt="Greasy Fork icon"> Greasy Fork   :<a href="https://greasyfork.org/ja/users/1494762/">https://greasyfork.org/ja/users/1494762/</a>
<img src="https://www.google.com/s2/favicons?domain=zenn.dev&size=16" alt="Sizu icon"> Zenn Dev      :<a href="https://zenn.dev/neon_aiart/">https://zenn.dev/neon_aiart/</a>
<img src="https://www.google.com/s2/favicons?domain=sizu.me&size=16" alt="Sizu icon"> Sizu Diary    :<a href="https://sizu.me/neon_aiart/">https://sizu.me/neon_aiart/</a>
<img src="https://www.google.com/s2/favicons?domain=ofuse.me&size=16" alt="Ofuse icon"> Ofuse         :<a href="https://ofuse.me/neon/">https://ofuse.me/neon/</a>
<img src="https://www.google.com/s2/favicons?domain=www.chichi-pui.com&size=16" alt="chichi-pui icon"> chichi-pui    :<a href="https://www.chichi-pui.com/users/neon/">https://www.chichi-pui.com/users/neon/</a>
<img src="https://www.google.com/s2/favicons?domain=iromirai.jp&size=16" alt="iromirai icon"> iromirai      :<a href="https://iromirai.jp/creators/neon/">https://iromirai.jp/creators/neon/</a>
<img src="https://www.google.com/s2/favicons?domain=www.days-ai.com&size=16" alt="DaysAI icon"> DaysAI        :<a href="https://www.days-ai.com/users/lxeJbaVeYBCUx11QXOee/">https://www.days-ai.com/users/lxeJbaVeYBCUx11QXOee/</a>
</pre>

---

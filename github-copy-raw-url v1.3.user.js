// ==UserScript==
// @name            GitHub Copy Raw File URL and Download File
// @name:en         GitHub Copy original file URL with download files
// @name:ja         GitHub Raw URLコピー＆ファイルダウンロード
// @description     Add buttons at the end of each file line to copy the raw file URL and download the file
// @description:en  Add button at the end of each file line，to copy the original file URL and download files
// @description:ja  ファイルリストの各行末尾に、Raw URLのコピーとファイルのダウンロードを行うボタンを追加します
// @version         1.3
// @icon            data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
// @author          ねおん
// @namespace       https://bsky.app/profile/neon-ai.art
// @homepage        https://github.com/neon-aiart
// @match           https://github.com/*
// @grant           none
// @license         MIT
// ==/UserScript==

/* ==============================================================================
 * IMPORTANT NOTICE / 重要事項
 * ==============================================================================
 * Copyright (c) 2026 ねおん (Neon)
 * Released under the MIT License.
 * See LICENSE file in the repository for full license details.
 * Based on original work by Kamikaze, 人民的勤务员.
 * ==============================================================================
 * 🫧 Icon Libraries & Licenses:
 * - Heroicons (MIT): https://heroicons.com
 *   - ©️ 2026 Tailwind Labs, Inc.: https://github.com/tailwindlabs/heroicons/blob/master/LICENSE
==============================================================================  */

(function () {
    'use strict';

    // SVGアイコン定義
    const COPY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>`;
    const INBOX_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" /></svg>`;
    const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
    const SPINNER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="16" height="16" style="animation: cp-spin 0.8s linear infinite;"><style>@keyframes cp-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" style="opacity: 0.25;"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="opacity: 0.75;"></path></svg>`;

    // ボタンの追加処理
    const appendButtons = () => {
        // 未処理のファイルリスト行を取得（新旧両方のDOMパターンに対応）
        const selector = 'tr.react-directory-row:not(.cp-btn-rdy), div.Box-row:not(.cp-btn-rdy), table.files tr.js-navigation-item:not(.cp-btn-rdy)';
        const fileRows = document.querySelectorAll(selector);

        fileRows.forEach((row) => {
            // 先頭で二重処理防止フラグを付与
            row.classList.add('cp-btn-rdy');

            // ファイルへのリンク要素を検索
            const linkEl = row.querySelector('a.Link--primary, a.js-navigation-open, td.content a');
            if (!linkEl || !linkEl.href) return;

            const fileUrl = linkEl.href;
            // フォルダ（/tree/）などは除外
            if (!fileUrl.includes('/blob/')) return;

            // 本物の Raw URL (raw.githubusercontent.com) へ直接変換
            const rawFileUrl = fileUrl.replace(
                /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/(.+)$/,
                'https://raw.githubusercontent.com/$1/$2/$3'
            );
            const filename = getFilenameFromUrl(rawFileUrl);

            // ボタンコンテナの生成
            const btnContainer = document.createElement('div');
            btnContainer.style.cssText = 'display: inline-flex; gap: 8px; margin-left: 10px; align-items: center; vertical-align: middle;';

            // 成功表示ヘルパー関数
            const showSuccessState = (btn, originalSvg) => {
                btn.disabled = true; // ホバー色変更イベントを一時停止
                btn.innerHTML = CHECK_SVG;
                btn.style.color = 'var(--color-fg-success, #6bc46d)';

                setTimeout(() => {
                    btn.innerHTML = originalSvg;
                    btn.disabled = false; // イベントを再開

                    // タイマー完了時にマウスがボタン上に残っているか判定して色を設定
                    if (btn.matches(':hover')) {
                        btn.style.color = 'var(--fgColor-accent, var(--color-accent-fg, #0969da))';
                    } else {
                        btn.style.color = 'var(--color-fg-default)';
                    }
                }, 1500);
            };

            // 1. コピーボタン (navigator.clipboard)
            const copyBtn = createIconButton('Copy raw file URL', COPY_SVG, async (btn) => {
                try {
                    await navigator.clipboard.writeText(rawFileUrl);
                    showSuccessState(btn, COPY_SVG);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            });

            // 2. ダウンロードボタン (fetch API)
            const downBtn = createIconButton('Download raw file', INBOX_SVG, async (btn) => {
                // 通信中：くるくるアニメーションを表示
                btn.innerHTML = SPINNER_SVG;
                btn.disabled = true;

                const success = await downloadFile(rawFileUrl, filename);

                btn.disabled = false;
                if (success) {
                    // 完了：CHECK_SVGに切り替えて1秒後元に戻す
                    showSuccessState(btn, INBOX_SVG);
                } else {
                    // 失敗時：元に戻す
                    btn.innerHTML = INBOX_SVG;
                }
            });

            btnContainer.append(copyBtn, downBtn);

            // 更新日時コンテナを探し、無ければ従来のフォールバック
            let target =
                row.querySelector('.react-directory-commit-age') ||
                row.querySelector('td:last-child > div, div[role="gridcell"]:last-child, td:last-child');
            if (!target) target = row;

            // 更新日時（またはセル）の内部を横並び右寄せにする
            target.style.display = 'flex';
            target.style.justifyContent = 'flex-end';
            target.style.alignItems = 'center';

            target.appendChild(btnContainer);
        });
    };

    // 共通ボタン生成関数（通常時はファイル名と同色・ホバー時にアクセントカラー）
    function createIconButton(title, iconSvg, onClick) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.title = title;
        btn.innerHTML = iconSvg;

        // 通常時：ファイル名と同じ100%表示
        btn.style.cssText = `
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 2px;
            color: var(--color-fg-default);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: color 0.15s ease;
        `;

        // ホバー時：GitHubの標準アクセントカラー（青/水色）に変更
        btn.addEventListener('mouseenter', () => {
            if (!btn.disabled) {
                btn.style.color = 'var(--fgColor-accent, var(--color-accent-fg, #0969da))';
            }
        });

        // マウスが離れたら元の色に戻す
        btn.addEventListener('mouseleave', () => {
            if (!btn.disabled) {
                btn.style.color = 'var(--color-fg-default)';
            }
        });

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(btn);
        });
        return btn;
    }

    // fetch を使ったファイルダウンロード処理
    async function downloadFile(url, filename) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = objectUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();

            URL.revokeObjectURL(objectUrl);
            a.remove();
            return true;
        } catch (err) {
            console.error('Download failed:', err);
            return false;
        }
    }

    // URLから安全にファイル名を取得する関数
    function getFilenameFromUrl(urlStr) {
        try {
            const parsedUrl = new URL(urlStr);
            // パス末尾のファイル名を取得してデコード
            const filename = parsedUrl.pathname.split('/').pop();
            return decodeURIComponent(filename) || 'download';
        } catch (err) {
            return 'download';
        }
    }

    // --- 監視スタート (MutationObserver) ---
    const observer = new MutationObserver(() => {
        appendButtons();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // 初回実行
    appendButtons();
})();

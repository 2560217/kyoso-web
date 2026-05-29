'@ | Set-Content -Path "style.css" -Encoding utf8; @'
// script.js

// ページ内の重要な要素を取得します。
const heroButton = document.getElementById('hero-button');
const featureSection = document.getElementById('features');
const navLinks = document.querySelectorAll('nav a');

// 「もっと知る」ボタンを押すと、特徴のセクションへスクロールします。
if (heroButton && featureSection) {
    heroButton.addEventListener('click', () => {
        featureSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ナビゲーションリンクをクリックしたとき、滑らかにスクロールするようにします。
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
'@ | Set-Content -Path "script.js" -Encoding utf8;'
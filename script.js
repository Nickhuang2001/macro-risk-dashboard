document.addEventListener('DOMContentLoaded', () => {
    // 取得當前時間並更新到畫面上
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    
    // 如果想要即時更新時鐘，可以解開下方程式碼
    /*
    setInterval(() => {
        const current = new Date();
        dateElement.textContent = `掃描日期：${current.getFullYear()}年${String(current.getMonth()+1).padStart(2, '0')}月${String(current.getDate()).padStart(2, '0')}日 ${String(current.getHours()).padStart(2, '0')}:${String(current.getMinutes()).padStart(2, '0')}`;
    }, 60000);
    */

    // 保存按鈕功能：將當前的 HTML 儲存下來
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', () => {
        // 為了將樣式一併保存，最簡單的方式是將整個文檔下載
        // 這裡做一個簡單的下載提示
        alert('小提示：您可以直接按下 Ctrl+S (Windows) 或 Cmd+S (Mac) 來儲存這個網頁，這樣就可以留下 2026-08-08 的完整紀錄與箭頭推演依據喔！\n\n如果是在手機上，可以加入書籤或使用瀏覽器的「分享 -> 儲存至檔案」。');
    });

    // 簡單的卡片浮現動畫效果
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

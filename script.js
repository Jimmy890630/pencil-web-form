/** @schema 2.10 */

document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const privacy = document.getElementById('agree-privacy').checked;

    if (!privacy) {
        alert('請先閱讀並同意隱私權政策及使用條款');
        return;
    }

    console.log('Form Submitted:', {
        name,
        email,
        date: new Date().toISOString()
    });

    alert('感謝您的申請！我們已收到您的資訊。');
});

// Photo upload placeholder logic
document.querySelector('.btn-upload').addEventListener('click', function() {
    alert('此處將觸發檔案選擇器 (Upload functionality mock)');
});

document.addEventListener('DOMContentLoaded', () => {
    const legoNumberInput = document.getElementById('legoNumberInput');
    const sendButton = document.getElementById('sendButton');
    const searchMessage = document.getElementById('searchMessage');

    sendButton.addEventListener('click', () => {
        const pdfNumber = parseInt(legoNumberInput.value);

        if (isNaN(pdfNumber) || pdfNumber < 1) {
            searchMessage.textContent = 'Kérlek, adj meg egy érvényes Lego készletszámot (pl. 12345).';
            searchMessage.className = 'message error';
            return;
        }

        const pdfFileName = `lego-${pdfNumber}.pdf`;
        const pdfPath = `./pdfs/${pdfFileName}`;

        window.open(pdfPath, '_blank');

        searchMessage.textContent = `Megnyitás: ${pdfFileName}`;
        searchMessage.className = 'message success';
    });
});
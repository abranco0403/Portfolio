function generatePDF() {
    const element = document.querySelector('#element-to-print');
    const opt = {
        margin: 0,
        filename: 'alessandro-branco-resume.pdf',
        jsPDF: {unit: 'cm', format: 'letter', orientation:'portrait'}
    }
    html2pdf().set(opt).from(element).save();
}

function goToPortfolio() {
    window.location.href = 'index.html';
}
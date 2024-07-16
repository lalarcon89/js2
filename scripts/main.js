function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value) / 100;
    const months = parseInt(document.getElementById('months').value);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(months)) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }

    const totalInterest = principal * annualRate;
    const totalAmount = principal + totalInterest;
    const monthlyPayment = totalAmount / months;
    const monthlyInterest = totalInterest / months;

    let tableContent = '';

    for (let i = 1; i <= months; i++) {
        tableContent += `
            <tr>
                <td>${i}</td>
                <td>${monthlyInterest.toFixed(2)}</td>
                <td>${monthlyPayment.toFixed(2)}</td>
            </tr>
        `;
    }

    const amortizationTable = document.getElementById('amortizationTable').querySelector('tbody');
    amortizationTable.innerHTML = tableContent;

    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `Total a Pagar del Crédito: ${totalAmount.toFixed(2)}`;

    document.getElementById('result').style.display = 'block';
}

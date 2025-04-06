const operationSelect = document.getElementById('Operation');
const operationDesc = document.getElementById('operationDesc');

const descriptions = {
    vlookup: "Performs a VLOOKUP across uploaded Excel files to merge matching data based on keys.",
    sum: "Calculates column-wise or row-wise SUM from uploaded Excel sheet(s)."
};

operationSelect.addEventListener('change', () => {
    const selected = operationSelect.value;
    if (descriptions[selected]) {
        operationDesc.innerText = descriptions[selected];
        operationDesc.style.display = 'block';
    } else {
        operationDesc.style.display = 'none';
    }
});
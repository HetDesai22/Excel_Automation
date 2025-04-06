document.addEventListener("DOMContentLoaded", function () {
    const operationSelect = document.getElementById("Operation");

    operationSelect.addEventListener("change", function () {
        console.log("Selected:", this.value);
        // In future: Load fields dynamically or show alerts
    });
});

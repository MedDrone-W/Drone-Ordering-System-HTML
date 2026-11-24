const nhsIdForm = document.getElementById("nhs-id-form");
const nhsIdInput = document.getElementById("NHSID");
const nhsIdStatus = document.getElementById("nhs-id-status");

nhsIdInput.addEventListener("input", () => {
    nhsIdStatus.textContent = "";
});

nhsIdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!nhsIdInput.value.trim()) {
        nhsIdStatus.textContent = "Enter your NHS ID.";
        nhsIdInput.focus();
        return;
    }

    nhsIdStatus.textContent = "ID entered. This prototype does not verify or store it.";
});

document.addEventListener('DOMContentLoaded', () => {
    const uploadRequestForm = document.getElementById('uploadRequestForm');
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const consentCheckbox = document.getElementById('consentCheckbox');

    uploadRequestForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Megakadályozza az oldal újratöltését

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const consent = consentCheckbox.checked;

        if (!username || !email || !consent) {
            alert('Kérlek, töltsd ki az összes kötelező mezőt!');
            return;
        }

        // Itt jönne a szerveroldali kérés az e-mail küldésére
        // Mivel ez csak kliensoldal, szimuláljuk.
        alert(`Kérés elküldve!\nFelhasználónév: ${username}\nEmail: ${email}\n\nEzen a ponton egy valós rendszerben a szerver KÜLDENE egy e-mailt.`);

        // Az űrlap a sikeres alert után is látható marad.
    });
});
function editField(fieldId) {
    const field = document.getElementById(fieldId);
    const currentValue = field.innerText;

    const newValue = prompt(`Edit ${fieldId}:`, currentValue);
    if (newValue !== null && newValue.trim() !== "") {
        field.innerText = newValue;
    }
}

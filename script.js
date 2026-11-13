document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const sweetTypeSelect = document.getElementById('sweetType');
    const estimateDisplay = document.getElementById('estimateResult');
    const orderForm = document.getElementById('bakeryOrderForm');
    const deliveryDateInput = document.getElementById('deliveryDate');

    if (deliveryDateInput) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDateInput.min = today;
    }

    const updateEstimate = () => {
        const qty = parseInt(quantityInput.value) || 0;
        const selectedType = sweetTypeSelect.value;
        
        let pricePerUnit = 400;
        if (selectedType === 'kaju') {
            pricePerUnit = 800;
        } else if (selectedType === 'cake') {
            pricePerUnit = 550;
        }

        const totalPrice = qty * pricePerUnit;
        const prepTime = qty * 15;

        if (qty > 0) {
            estimateDisplay.innerHTML = `<strong>Estimated Cost:</strong> ₹${totalPrice} | <strong>Est. Pickup Ready:</strong> ${prepTime} mins`;
        } else {
            estimateDisplay.innerHTML = `<span class="text-danger">Please enter a valid quantity greater than 0.</span>`;
        }
    };

    const savedQty = localStorage.getItem('k10_draft_qty');
    const savedType = localStorage.getItem('k10_draft_type');

    if (savedQty && quantityInput) {
        quantityInput.value = savedQty;
    }
    if (savedType && sweetTypeSelect) {
        sweetTypeSelect.value = savedType;
    }

    updateEstimate();

    if (quantityInput) {
        quantityInput.addEventListener('input', (e) => {
            updateEstimate();
            localStorage.setItem('k10_draft_qty', e.target.value);
        });
    }

    if (sweetTypeSelect) {
        sweetTypeSelect.addEventListener('change', (e) => {
            updateEstimate();
            localStorage.setItem('k10_draft_type', e.target.value);
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!orderForm.checkValidity()) {
                e.stopPropagation();
                orderForm.classList.add('was-validated');
                return;
            }

            const custName = document.getElementById('custName').value;
            alert(`Thank you, ${custName}! Your order enquiry for K10 Sweets & Bakery has been successfully submitted.`);
            
            localStorage.removeItem('k10_draft_qty');
            localStorage.removeItem('k10_draft_type');
            
            orderForm.reset();
            orderForm.classList.remove('was-validated');
            updateEstimate();
        });
    }
});
const products = document.querySelectorAll('.product');
const filters = document.querySelectorAll('input[name="size"], input[name="color"]');

function getSelectedFilters() {
    const selectedFilters = {};
    filters.forEach(filter => {
        if (filter.checked) {
            if (!selectedFilters[filter.name]) {
                selectedFilters[filter.name] = [];
            }
            selectedFilters[filter.name].push(filter.value);
        }
    });
    return selectedFilters;
}

function filterBySize(product, selectedSizes) {
    if (!selectedSizes || selectedSizes.length === 0) {
        return true;
    }
    return selectedSizes.includes(product.dataset.size);
}

function filterByColor(product, selectedColors) {
    if (!selectedColors || selectedColors.length === 0) {
        return true;
    }
    return selectedColors.includes(product.dataset.color);
}


function filterProducts() {
    const selectedFilters = getSelectedFilters();

    products.forEach(productElement => {
        const sizeMatch = filterBySize(productElement, selectedFilters.size);
        const colorMatch = filterByColor(productElement, selectedFilters.color);

        productElement.style.display = sizeMatch && colorMatch ? 'block' : 'none';
    });
}

filters.forEach(filter => filter.addEventListener('change', filterProducts));
filterProducts();
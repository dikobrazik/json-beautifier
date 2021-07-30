function createJSONDOM(container: HTMLElement, json: Object) {
    for(const [key, value] of Object.entries(json)) {
        // if (value != undefined) {
            const details = document.createElement('details');
            details.open = true;
            details.style.marginLeft = '8px';
            const summary = document.createElement('summary');
            summary.textContent = key;
            details.appendChild(summary);
            
            if (typeof value === 'object') {
                createJSONDOM(details, value);
            } else {
                const valueContainer = document.createElement('div');
                valueContainer.innerText = JSON.stringify(value);
                details.appendChild(valueContainer);
            }
            container.appendChild(details);
        // }
    }
}

export default createJSONDOM;
import { domElements } from './domElements';

const filterActive = (e) => {
    domElements().filterBtn.classList.toggle('filter-arrow__active');
    domElements().filterOptions.classList.toggle('filter-options__active');
};

export { filterActive };

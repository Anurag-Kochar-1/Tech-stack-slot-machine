let techStackSelection: { [category: string]: string } = {};

document.addEventListener('DOMContentLoaded', () => {
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const category = item.getAttribute('data-category');
      const techName = item.textContent;
      if (category && techName) {
        techStackSelection[category] = techName;
        console.log(techStackSelection);
        // display the selected tech stacks above
        const selectedTechStacksElement = document.getElementById('selected-tech-stacks');
        if (selectedTechStacksElement) {
          selectedTechStacksElement.innerHTML = '';
          Object.keys(techStackSelection).forEach((category) => {
            const techName = techStackSelection[category];
            const techStackElement = document.createElement('div');
            techStackElement.textContent = `${category}: ${techName}`;
            selectedTechStacksElement.appendChild(techStackElement);
          });
        }
      }
    });
  });
});

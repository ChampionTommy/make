export function createTabs(tabsContainer: HTMLElement) {
  const tabs = Array.from(tabsContainer.querySelectorAll('.tabs__header-item')) as HTMLElement[];
  const tabContents = Array.from(tabsContainer.querySelectorAll('.tabs__content-item')) as HTMLElement[];

  function activateTab(tab: HTMLElement) {
    const targetTab = tab.dataset.tab;
    const targetContent = tabsContainer.querySelector<HTMLElement>(`.tabs__content-item[data-content="${targetTab}"]`);

    tabs.forEach((t) => t.classList.remove('tabs__header-item--active'));
    tabContents.forEach((c) => c.classList.remove('tabs__content-item--active'));

    tab.classList.add('tabs__header-item--active');
    targetContent?.classList.add('tabs__content-item--active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.querySelector<HTMLElement>('.tabs');
  if (tabsContainer) {
    createTabs(tabsContainer);
  }
});



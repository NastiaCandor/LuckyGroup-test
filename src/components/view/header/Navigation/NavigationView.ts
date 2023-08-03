import { ElementParams, NAVIGATION_LINKS } from '../../../../types';
import ElementCreator from '../../../utils/ElementCreator';
import View from '../../View';

const menuParams: ElementParams = {
  tag: 'div',
  classes: ['menu__bg'],
};

const navigationNavParams: ElementParams = {
  tag: 'nav',
  classes: ['header__navigation'],
};

export default class NavigationView extends View {
  constructor() {
    super(menuParams);
    this.makeNavigation();
  }

  private makeNavigation(): void {
    const navigationNav = new ElementCreator(navigationNavParams).getElement();
    const navigationParams: ElementParams = {
      tag: 'ul',
      classes: ['navigation'],
    };
    const navigation = new ElementCreator(navigationParams).getElement();
    NAVIGATION_LINKS.forEach((item, ind) => {
      const navigationItemParams: ElementParams = {
        tag: 'li',
        classes: ['navigation__item'],
      };
      const navigationItem = new ElementCreator(navigationItemParams).getElement();
      if (ind === 0) navigationItem.classList.add('_active');
      const navigantionLinkParams: ElementParams = {
        tag: 'a',
        classes: ['navigation__link'],
        textContent: item,
      };
      const navigationLink = new ElementCreator(navigantionLinkParams).getElement();
      navigationLink.setAttribute('href', '#');
      navigationItem.append(navigationLink);
      navigation.append(navigationItem);
    });

    navigationNav.append(navigation);

    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(navigationNav);
      this.hamburgerFunctionality(this.viewElementCreator.getElement());
    }
  }

  public iconHamburgerFunctionality(icon: Element): void {
    icon.addEventListener('click', () => {
      this.toogleActiveClass();
    });
  }

  private hamburgerFunctionality(bg: HTMLElement): void {
    bg.addEventListener('click', (event: Event) => {
      if (event === null) return;
      if (event.target === null) return;
      const target = <HTMLElement>event.target;
      if (target.closest('.header__navigation') == null || target.closest('.navigation')) {
        this.toogleActiveClass();
      }
    });
  }

  private toogleActiveClass(): void {
    const iconHamburger = document.querySelector('.hamburger');
    if (iconHamburger === null) return;
    const menuHeader = document.querySelector('.header__navigation');
    if (menuHeader === null) return;
    const bg = document.querySelector('.menu__bg');
    if (bg === null) return;
    menuHeader.classList.toggle('_active');
    iconHamburger.classList.toggle('_active');
    bg.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
}

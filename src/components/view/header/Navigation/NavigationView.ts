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
    }
  }
}

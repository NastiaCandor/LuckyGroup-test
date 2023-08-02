import { ElementParams, wrapperParams } from '../../../types';
import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import NavigationView from './Navigation/NavigationView';

const headerParams: ElementParams = {
  tag: 'header',
  classes: ['header'],
};

const headerLogoParams: ElementParams = {
  tag: 'div',
  classes: ['header__logo'],
};

const headerLinkParams: ElementParams = {
  tag: 'a',
  classes: ['header__logo-link'],
};

const headerTitleParams: ElementParams = {
  tag: 'h1',
  classes: ['header__title'],
  textContent: 'Global',
};

const signUpBtnParams: ElementParams = {
  tag: 'button',
  classes: ['header__signUp-btn'],
  textContent: 'Sign Up',
};

export default class HeaderView extends View {
  constructor() {
    super(headerParams);
    this.makeHeaderTitle();
  }

  private makeHeaderTitle(): void {
    const wrapper = new ElementCreator(wrapperParams).getElement();
    wrapper.classList.add('header__wrapper');

    const headerLogo = new ElementCreator(headerLogoParams).getElement();
    const headerLink = new ElementCreator(headerLinkParams).getElement();
    headerLink.setAttribute('href', '#');
    const headerTitle = new ElementCreator(headerTitleParams).getElement();
    headerLink.append(headerTitle);
    headerLogo.append(headerLink);

    const navigation = new NavigationView().getHtmlElement();

    const signUpBtn = new ElementCreator(signUpBtnParams).getElement();

    wrapper.append(headerLogo, navigation, signUpBtn);
    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(wrapper);
    }
  }
}

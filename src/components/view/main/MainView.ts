import { ElementParams, wrapperParams } from '../../../types';
import ElementCreator from '../../utils/ElementCreator';
import View from '../View';

const mainParams: ElementParams = {
  tag: 'main',
  classes: ['main'],
};

export default class MainView extends View {
  constructor() {
    super(mainParams);
    this.makeMain();
  }

  private makeMain(): void {
    const wrapper = new ElementCreator(wrapperParams).getElement();
    wrapper.classList.add('header__wrapper');

    wrapper.append();
    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(wrapper);
    }
  }
}

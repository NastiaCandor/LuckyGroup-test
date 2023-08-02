import { ElementParams, wrapperParams } from '../../../types';
import ElementCreator from '../../utils/ElementCreator';
import View from '../View';
import GetStartedView from './getStarted/GetStartedView';

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
    wrapper.classList.add('main__wrapper');

    const getStarted = new GetStartedView().getHtmlElement();

    wrapper.append(getStarted);
    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(wrapper);
    }
  }
}

import { ElementParams } from '../../types';
import ElementCreator from '../utils/ElementCreator';

export default class View {
  viewElementCreator: ElementCreator;

  constructor(params: ElementParams) {
    this.viewElementCreator = this.createView(params);
  }

  public getHtmlElement(): HTMLElement {
    return this.viewElementCreator.getElement();
  }

  private createView(params: ElementParams): ElementCreator {
    const elementParams: ElementParams = {
      tag: params.tag,
      classes: params.classes,
      textContent: params.textContent,
      callback: params.callback,
    };
    this.viewElementCreator = new ElementCreator(elementParams);

    return this.viewElementCreator;
  }
}

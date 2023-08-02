import { ElementParams } from '../../types';

export default class ElementCreator {
  private element: HTMLElement | null;
  constructor(param: ElementParams) {
    this.element = null;
    this.createElement(param);
  }

  public getElement(): HTMLElement {
    return <HTMLElement>this.element;
  }

  public addInnerElement(element: string | Node): void {
    if (element instanceof ElementCreator) {
      this.element?.append(element.getElement());
    } else {
      this.element?.append(element);
    }
  }

  private createElement(param: ElementParams): void {
    this.element = document.createElement(param.tag);
    if (param.classes) this.setClasses(param.classes);
    this.setTextContent(param.textContent);
    if (param.callback) this.setCallback(param.callback);
  }

  private setClasses(classes: string[]): void {
    if (this.element) this.element.classList.add(...classes);
  }

  private setTextContent(text?: string): void {
    if (text && this.element) this.element.textContent = text;
  }

  private setCallback(callback: (arg0: Event) => void): void {
    if (typeof callback === 'function' && this.element) {
      this.element.addEventListener('click', (event: Event) => callback(event));
    }
  }
}

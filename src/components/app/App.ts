import HeaderView from '../view/header/HeaderView';

export default class App {
  public start(): void {
    const header = new HeaderView().getHtmlElement();

    document.body.append(header);
  }
}

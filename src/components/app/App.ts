import HeaderView from '../view/header/HeaderView';
import MainView from '../view/main/MainView';

export default class App {
  public start(): void {
    const header = new HeaderView().getHtmlElement();
    const main = new MainView().getHtmlElement();
    document.body.append(header, main);
  }
}

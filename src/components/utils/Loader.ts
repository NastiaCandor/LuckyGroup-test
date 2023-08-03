export default class Loader {
  private baseLink: string;

  constructor() {
    this.baseLink = 'https://baconipsum.com/api/?type=lucky';
  }

  public sendRequest(methodType: string, url: string): Promise<Response> {
    const initOptions: RequestInit = {
      method: methodType,
      mode: 'cors',
    };
    const fetchURL = `${this.baseLink}${url}`;
    return fetch(fetchURL, initOptions).then((response) => response);
  }
}

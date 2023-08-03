import { ElementParams, VISUAL_FLAGS, VISUAL_FLAG_DELAY } from '../../../../types';
import ElementCreator from '../../../utils/ElementCreator';
import Loader from '../../../utils/Loader';
import View from '../../View';
import userImageSRC_1 from '../../../../icons/user_1.png';
import userImageSRC_2 from '../../../../icons/user_2.png';
import userImageSRC_3 from '../../../../icons/user_3.png';
const usersSRC = [userImageSRC_1, userImageSRC_2, userImageSRC_3];
import flagVisualSRC from '../../../../icons/main-image.png';

const getStartedParams: ElementParams = {
  tag: 'section',
  classes: ['get-started'],
};

export default class GetStartedView extends View {
  loader: Loader;
  constructor() {
    super(getStartedParams);
    this.loader = new Loader();
    this.makeGetStarted();
  }

  private makeGetStarted(): void {
    this.makeSearchPanel();
    // this.makeVisualPanel();
  }

  private async makeSearchPanel(): Promise<void> {
    const searchPanelParams: ElementParams = {
      tag: 'div',
      classes: ['search-panel'],
    };
    const searchPanel = new ElementCreator(searchPanelParams).getElement();

    const searchTitleParams: ElementParams = {
      tag: 'h2',
      classes: ['search-panel__title'],
    };
    const searchTitle = new ElementCreator(searchTitleParams).getElement();
    searchTitle.innerHTML = 'Now Buy Your<br>PIN or <span>Top Up</span><br>With Bank Transfer';

    const response = await this.loader.sendRequest('GET', '');
    const body = await response.json();
    const searchTextParams: ElementParams = {
      tag: 'p',
      classes: ['search-panel__text'],
      textContent: body[0],
    };
    const searchText = new ElementCreator(searchTextParams).getElement();
    const getStartedBtnParams: ElementParams = {
      tag: 'button',
      classes: ['search-panel__get-started-btn', 'button_round'],
      textContent: 'Get Started',
    };
    const getStartedBtn = new ElementCreator(getStartedBtnParams).getElement();
    const form = this.getSearchForm();
    const regularUsers = this.getRegularUsersPanel();

    searchPanel.append(searchTitle, searchText, getStartedBtn, form, regularUsers);
    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(searchPanel);
    }
    this.makeVisualPanel();
  }

  private makeVisualPanel(): void {
    const visualPanelParams: ElementParams = {
      tag: 'div',
      classes: ['flag-visual'],
    };
    const visualPanel = new ElementCreator(visualPanelParams).getElement();
    const visualComponentsParams: ElementParams = {
      tag: 'div',
      classes: ['flag-visual__main-panel'],
    };
    const visualComponents = new ElementCreator(visualComponentsParams).getElement();

    const mainImageParams: ElementParams = {
      tag: 'img',
      classes: ['flag-visual__main-img'],
    };
    const mainImage = new ElementCreator(mainImageParams).getElement();
    mainImage.setAttribute('alt', 'excited girl with a phone');
    (<HTMLImageElement>mainImage).src = flagVisualSRC;
    const circleColoredParams: ElementParams = {
      tag: 'div',
      classes: ['flag-visual__colored-circle'],
    };
    const circleColored = new ElementCreator(circleColoredParams).getElement();
    const circleBorderParams: ElementParams = {
      tag: 'div',
      classes: ['flag-visual__border-circle'],
    };
    const circleBorder = new ElementCreator(circleBorderParams).getElement();

    const movingFlagsParams: ElementParams = {
      tag: 'div',
      classes: ['flag-visual__moving-flags'],
    };
    const movingFlags = new ElementCreator(movingFlagsParams).getElement();
    VISUAL_FLAGS.forEach((flag, ind) => {
      const flagItemParams: ElementParams = {
        tag: 'div',
        classes: ['flag-visual__flag'],
      };
      const flagItem = new ElementCreator(flagItemParams).getElement();
      flagItem.style.setProperty('--i', `${ind}`);
      const flagImgParams: ElementParams = {
        tag: 'img',
        classes: ['flag-visual__flag-img'],
      };
      const flagImg = new ElementCreator(flagImgParams).getElement();
      (<HTMLImageElement>flagImg).src = flag;
      flagImg.style.setProperty('--i', `${ind}`);
      flagItem.append(flagImg);
      movingFlags.append(flagItem);
    });

    setTimeout(() => {
      movingFlags.classList.add('flags-out');
    }, VISUAL_FLAG_DELAY);
    setTimeout(
      () => {
        movingFlags.classList.add('flags-rotate');
      },
      VISUAL_FLAG_DELAY + 400 * VISUAL_FLAGS.length,
    );

    visualComponents.append(mainImage, circleColored, circleBorder, movingFlags);
    visualPanel.append(visualComponents);
    if (this.viewElementCreator) {
      this.viewElementCreator.addInnerElement(visualPanel);
    }
  }

  private getSearchForm(): HTMLElement {
    const formParams: ElementParams = {
      tag: 'form',
      classes: ['search-panel__form'],
    };
    const form = new ElementCreator(formParams).getElement();
    const inputTextParams: ElementParams = {
      tag: 'input',
      classes: ['search-panel__input-text'],
    };
    const inputText = new ElementCreator(inputTextParams).getElement();
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Where do you want to call?');
    const inputBtnParams: ElementParams = {
      tag: 'input',
      classes: ['search-panel__input-btn', 'button_round'],
    };
    const inputBtn = new ElementCreator(inputBtnParams).getElement();
    inputBtn.setAttribute('type', 'button');

    form.append(inputText, inputBtn);
    return form;
  }

  private getRegularUsersPanel(): HTMLElement {
    const regulatUsersParams: ElementParams = {
      tag: 'div',
      classes: ['search-panel__regular-users'],
    };
    const regularUsers = new ElementCreator(regulatUsersParams).getElement();
    const usersIconsParams: ElementParams = {
      tag: 'div',
      classes: ['search-panel__users-icons'],
    };
    const usersIcons = new ElementCreator(usersIconsParams).getElement();
    for (let i = 0; i < 3; i++) {
      const userIconParams: ElementParams = {
        tag: 'img',
        classes: ['search-panel__user-icon'],
      };
      const userIcon = new ElementCreator(userIconParams).getElement();
      (<HTMLImageElement>userIcon).src = usersSRC[i];
      userIcon.style.zIndex = `${usersSRC.length - i + 1}`;
      usersIcons.append(userIcon);
    }
    const userIconParams: ElementParams = {
      tag: 'img',
      classes: ['search-panel__user-icon_plus'],
    };
    const userIcon = new ElementCreator(userIconParams).getElement();
    userIcon.style.zIndex = '1';
    usersIcons.append(userIcon);

    const usersTextParams: ElementParams = {
      tag: 'p',
      classes: ['search-panel__user-text'],
      textContent: '45k+ Regular User. ',
    };
    const usersText = new ElementCreator(usersTextParams).getElement();
    const usersViewPriceParams: ElementParams = {
      tag: 'a',
      classes: ['search-panel__user-link'],
      textContent: 'View Price Plan',
    };
    const usersViewPrice = new ElementCreator(usersViewPriceParams).getElement();
    usersViewPrice.setAttribute('href', '');
    usersText.append(usersViewPrice);

    regularUsers.append(usersIcons, usersText);
    return regularUsers;
  }
}

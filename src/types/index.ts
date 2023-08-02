// INTERFACES

export interface ViewParams {
  tag: string;
}

export interface ElementParams extends ViewParams {
  classes?: string[];
  textContent?: string;
  callback?: (arg0: Event) => void;
}

// CONSTANTS

export const wrapperParams: ElementParams = {
  tag: 'div',
  classes: ['wrapper'],
};

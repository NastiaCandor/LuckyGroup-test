import indianFlagSRC from '../icons/indian_flag.png';
import britishFlagSRC from '../icons/british_flag.png';
import italianFlagSRC from '../icons/italian_flag.png';

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

export const NAVIGATION_LINKS = ['Mobile Top Up', 'About', 'Rate', 'Help'];

export const VISUAL_FLAGS = [
  indianFlagSRC,
  britishFlagSRC,
  italianFlagSRC,
  indianFlagSRC,
  indianFlagSRC,
  britishFlagSRC,
  italianFlagSRC,
];

export const VISUAL_FLAG_DELAY = 3000;

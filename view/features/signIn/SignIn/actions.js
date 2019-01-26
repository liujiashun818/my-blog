import {SIGINACTION,REGIRSTACTION} from './actionTypes.js';
export const siginAction = (value) =>{
  return {
    'type': SIGINACTION,
    'info': value
  }
}
export const regirstAction = (value) =>{
  return {
    'type': REGIRSTACTION,
    'info': value
  }
}

export default {siginAction, regirstAction};
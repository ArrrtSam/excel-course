import { defaultStyles, defaultTitle } from '../constants'
import { clone } from '../core/utils'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const nomalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function nomalizeInitialState(state) {
  return state ? nomalize(state) : clone(defaultState)
}

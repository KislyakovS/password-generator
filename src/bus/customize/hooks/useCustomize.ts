// Core
import { useEffect, useCallback, useReducer } from 'react';

// Instruments
import { OptionsType, defaultOptions } from '../../../utils/password';

// Types
import { SetupType, GenerateType } from '../../password/hooks/usePassword';

type UseCustomizeType = {
  options: OptionsType,
  setLength: (value: number) => void,
  setIsUppercase: (value: boolean) => void,
  setIsLowercase: (value: boolean) => void,
  setIsSymbol: (value: boolean) => void,
  setIsNumber: (value: boolean) => void
}

const SET_LENGTH = 'SET_LENGTH';
type setLength = {
  type: typeof SET_LENGTH,
  payload: number,
}

const SET_IS_UPPERCASE = 'SET_IS_UPPERCASE';
type setIsUppercase = {
  type: typeof SET_IS_UPPERCASE,
  payload: boolean,
}

const SET_IS_LOWERCASE = 'SET_IS_LOWERCASE';
type setIsLowercase = {
  type: typeof SET_IS_LOWERCASE,
  payload: boolean,
}

const SET_IS_NUMBER = 'SET_IS_NUMBER';
type setIsNumber = {
  type: typeof SET_IS_NUMBER,
  payload: boolean,
}

const SET_IS_SYMBOL = 'SET_IS_SYMBOL';
type setIsSymbol = {
  type: typeof SET_IS_SYMBOL,
  payload: boolean,
}

type ReducerType = setLength
  | setIsUppercase
  | setIsLowercase
  | setIsNumber
  | setIsSymbol;


const reducer = (state: OptionsType, action: ReducerType): OptionsType => {
  switch (action.type) {
    case SET_LENGTH:
      return { ...state, length: action.payload }
    case SET_IS_UPPERCASE:
      return { ...state, isUppercase: action.payload }
    case SET_IS_LOWERCASE:
      return { ...state, isLowercase: action.payload }
    case SET_IS_NUMBER:
      return { ...state, isNumber: action.payload }
    case SET_IS_SYMBOL:
      return { ...state, isSymbol: action.payload }
    default:
      return state
  }
}

const useCustomize = (
  setupPassword: SetupType,
  generatePassword: GenerateType
): UseCustomizeType => {
  const [state, dispatch] = useReducer(reducer, defaultOptions);

  const setLength = useCallback((value: number) => {
    dispatch({ type: SET_LENGTH, payload: value });
  }, []);

  const setIsUppercase = useCallback((value: boolean) => {
    dispatch({ type: SET_IS_UPPERCASE, payload: value })
  }, []);

  const setIsLowercase = useCallback((value: boolean) => {
    dispatch({ type: SET_IS_LOWERCASE, payload: value })
  }, []);

  const setIsSymbol = useCallback((value: boolean) => {
    dispatch({ type: SET_IS_SYMBOL, payload: value })
  }, []);

  const setIsNumber = useCallback((value: boolean) => {
    dispatch({ type: SET_IS_NUMBER, payload: value })
  }, []);

  useEffect(() => {
    setupPassword(state)
    generatePassword();
  }, [state])

  return { options: state, setLength, setIsUppercase, setIsLowercase, setIsSymbol, setIsNumber };
}

export { useCustomize }
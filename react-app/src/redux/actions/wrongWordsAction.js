import {createAction} from '@reduxjs/toolkit'
import {HAS_WRONG_WORDS_ERROR} from "../types/wrongWordsTypes";

export const hasWrongWordsError = createAction(HAS_WRONG_WORDS_ERROR);

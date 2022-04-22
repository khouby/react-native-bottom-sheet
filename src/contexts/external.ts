import { createContext } from 'react';
import Animated from 'react-native-reanimated';
import { SHEET_STATE } from '../constants';
import type { BottomSheetMethods, BottomSheetVariables } from '../types';

export const BottomSheetContext = createContext<
  | (BottomSheetMethods &
      BottomSheetVariables & {
        animatedSheetState: Animated.SharedValue<SHEET_STATE>;
      })
  | null
>(null);

export const BottomSheetProvider = BottomSheetContext.Provider;

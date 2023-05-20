import { configureStore } from "@reduxjs/toolkit";
import { FeelingUtilsSlice } from "./features/feelings/feelingUtilsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import feelingSlice from "./features/feelings/feelingSlice";
import colorSchemeSlice from "./features/colors-scheme/colorSchemeSlice";

export const store = configureStore({
    reducer: {
        feelingUtils: FeelingUtilsSlice.reducer,
        fetchfeelings: feelingSlice,
        fetchColors: colorSchemeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
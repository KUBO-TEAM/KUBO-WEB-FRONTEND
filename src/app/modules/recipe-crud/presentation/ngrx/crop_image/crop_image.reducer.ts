import { createReducer, on, createAction, props } from "@ngrx/store";


export type CropImageState = Event | string | null | undefined;

let CROP_IMAGE_INITIAL_STATE : CropImageState;

export const cropImageReset = createAction(
  '[Crop Image] Reset'
)

export const cropImage = createAction(
  '[Crop Image]',
  props<{event : Event }>(),
)

export const cropImageSuccess = createAction(
  '[Crop Image] Success',
  props<{ imagePath : string }>(),
)


const CROP_IMAGE_REDUCER = createReducer(
  CROP_IMAGE_INITIAL_STATE,
  on(cropImage, (state,{event}) => event ),
  on(cropImageSuccess, (state,{imagePath}) => imagePath ),
  on(cropImageReset, (state) => null),
);


export function cropImageReducer(state: any, action: any) {
  return CROP_IMAGE_REDUCER(state, action);
}

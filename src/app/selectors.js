import { createSelector } from 'reselect'

const getAppReducers = state => state.appReducers

export const getInitialListFromGithub = createSelector(
  [getAppReducers],
  appReducer => appReducer.initialListFromGithub
)

export const getCurrentCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.currentCloudcast
)

export const getIsFeaturedCloudcast = createSelector(
  [getAppReducers],
  appReducer => appReducer.isFeaturedCloudcast
)

export const getIsPlaying = createSelector(
  [getAppReducers],
  appReducer => appReducer.isPlaying
)

export const getCloudcastDetails = createSelector(
  [getAppReducers],
  appReducer => appReducer.cloudcastDetails
)

export const getListCloudcastKeys = createSelector(
  [getAppReducers],
  appReducer => appReducer.listCloudcastKeys
)

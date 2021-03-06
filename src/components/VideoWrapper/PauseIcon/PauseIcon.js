import React from 'react'
import PropTypes from 'prop-types'

import './PauseIcon.css'

export const PauseIcon = ({ reversed }) => (
  <svg className={reversed ? 'pause-icon pause-icon--reversed' : 'pause-icon'} viewBox='0 0 510 510'>
    <path d='M178.5 357h51V153h-51v204zM255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204zm25.5-102h51V153h-51v204z' />
  </svg>
)

PauseIcon.propTypes = {
  reversed: PropTypes.bool
}

export default PauseIcon

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlayIcon from 'components/PlayIcon'
import PauseIcon from 'components/PauseIcon'

import './CloudcastBig.css'

class CloudcastBig extends Component {
  constructor(props) {
    super()

    this.playPauseTrigger = this.playPauseTrigger.bind(this)
  }

  playPauseTrigger() {
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      // the current player playing is this one. so we pause.
      this.props.setIsPlaying(false)
    } else if (!this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      // the current player not playing. so we play.
      this.props.setIsPlaying(true)
    } else {
      // another cloudcast is being played. we load this one and play
      this.props.setCurrentCloudcast(this.props.cloudcast.url)
      this.props.setIsPlaying(true)
    }
  }

  render() {
    // src={this.props.cloudcast.pictures && this.props.cloudcast.pictures.large}\
    // const smallPicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['320wx320h']
    //   ? this.props.cloudcast.pictures.large
    //   : ''
    //
    // const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.extra_large
    //   ? this.props.cloudcast.pictures.large
    //   : ''

    let PlayPauseButton = <PlayIcon />
    let classCloudcastImgSmall = 'CloudcastBigImgSmall'
    let classCloudcastImgBig = 'CloudcastBigImgBig'
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      classCloudcastImgSmall = classCloudcastImgSmall + ' CloudcastBigImgPlaying'
      classCloudcastImgBig = classCloudcastImgBig + ' CloudcastBigImgPlaying'
      PlayPauseButton = <PauseIcon />
    }

    return (
      <div onClick={this.playPauseTrigger}>
        <div
          style={{
            backgroundImage: 'url(https://thumbnailer.mixcloud.com/unsafe/320x320/profile/8/f/8/c/fd5a-c4d5-45aa-8424-b5c40719cdd5)',// eslint-disable-line
          }}
          className={classCloudcastImgSmall}
        >
          <div className='CloudcastBigPlayButton'>
            {PlayPauseButton}
          </div>
          <div className='CloudcastBigImgTitle font--medium'>{this.props.cloudcast.name}</div>
        </div>
        <div
          style={{
            backgroundImage: 'url(https://thumbnailer.mixcloud.com/unsafe/600x600/profile/8/f/8/c/fd5a-c4d5-45aa-8424-b5c40719cdd5)',// eslint-disable-line
          }}
          className={classCloudcastImgBig}
        >
          <div className='CloudcastBigPlayButton'>
            {PlayPauseButton}
          </div>
          <div className='CloudcastBigImgTitle font--medium'>{this.props.cloudcast.name}</div>
        </div>
      </div>
    )
  }
}

CloudcastBig.propTypes = {
  setCurrentCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  currentCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastBig

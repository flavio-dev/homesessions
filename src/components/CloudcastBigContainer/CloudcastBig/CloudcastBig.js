import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    const smallPicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['320wx320h']
      ? this.props.cloudcast.pictures['320wx320h']
      : ''

    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures['640wx640h']
      ? this.props.cloudcast.pictures['640wx640h']
      : ''

    let PlayPauseButton = <PlayIcon />
    let classCloudcastImgSmall = 'CloudcastBigImgSmall'
    let classCloudcastImgBig = 'CloudcastBigImgBig'
    if (this.props.isPlaying && this.props.currentCloudcast === this.props.cloudcast.url) {
      classCloudcastImgSmall = classCloudcastImgSmall + ' CloudcastBigImgPlaying'
      classCloudcastImgBig = classCloudcastImgBig + ' CloudcastBigImgPlaying'
      PlayPauseButton = <PauseIcon />
    }

    return (
      <div>
        <div
          style={{
            backgroundImage: 'url(' + smallPicUrl + ')'
          }}
          className={classCloudcastImgSmall}
          onClick={this.playPauseTrigger}
        >
          <div className='CloudcastBigPlayButton'>
            {PlayPauseButton}
          </div>
          <div className='CloudcastBigImgTitle font--medium'>{this.props.cloudcast.name}</div>
        </div>
        <div
          style={{
            backgroundImage: 'url(' + largePicUrl + ')'
          }}
          className={classCloudcastImgBig}
          onClick={this.playPauseTrigger}
        >
          <div className='CloudcastBigPlayButton'>
            {PlayPauseButton}
          </div>
          <div className='CloudcastBigImgTitle font--medium'>{this.props.cloudcast.name}</div>
        </div>
        {this.props.cloudcast.description && this.props.cloudcast.description.length &&
          <Link to={this.props.cloudcast.slug} className='CloudcastBigText'>{this.props.cloudcast.description}</Link>
        }
        {(!this.props.cloudcast.description || !this.props.cloudcast.description.length) &&
          <div className='CloudcastBigTextPlaceholder' />
        }
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

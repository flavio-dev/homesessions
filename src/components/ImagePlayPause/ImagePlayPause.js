import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlayPauseIconContainer from 'components/PlayPauseIconContainer'

import './ImagePlayPause.css'

class ImagePlayPause extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasLoaded: false
    }

    this.timeout = null
  }

  showImageWithDelay = () => {
    // delaying the showing of the image
    this.timeout = setTimeout(() => {
      this.setState({ hasLoaded: true })
    }, 500)
  }

  componentWillUnmount() {
    // in case we unmount and the setState still happening
    clearTimeout(this.timeout)
  }

  render() {
    const { isPlaying, pictureUrl, panoDisplay, playPauseTrigger, children, cloudcastKey } = this.props
    let classCloudcastImg = panoDisplay ? 'ipp__img ipp__img--pano' : 'ipp__img'
    if (isPlaying) {
      classCloudcastImg = classCloudcastImg + ' ipp__img--playing'
    }

    let classIpp = 'ipp'
    if (this.state.hasLoaded) {
      classIpp = classIpp + ' ipp--has-loaded'
    } else if (pictureUrl && pictureUrl.length) {
      this.showImageWithDelay()
    }

    return (
      <div className={classIpp}>
        <div
          style={{
            backgroundImage: 'url(' + pictureUrl + ')',
            backgroundSize: 'cover'
          }}
          className={classCloudcastImg}
          onClick={playPauseTrigger}
        >
          <div className='ipp__play-button'>
            <PlayPauseIconContainer isPlaying={isPlaying} cloudcastKey={cloudcastKey} />
          </div>

          {children}
        </div>
      </div>
    )
  }
}

ImagePlayPause.propTypes = {
  playPauseTrigger: PropTypes.func,
  pictureUrl: PropTypes.string,
  isPlaying: PropTypes.bool,
  panoDisplay: PropTypes.bool,
  children: PropTypes.node
}

export default ImagePlayPause

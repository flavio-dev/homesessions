import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagePlayPause from 'components/ImagePlayPause'
import Tag from 'components/Tag'

import './CloudcastHome.css'

class CloudcastHome extends Component {
  playPauseTrigger = () => {
    if (this.props.cloudcast.url) {
      if (this.props.isPlaying && this.props.playingCloudcast === this.props.cloudcast.url) {
        // the current player playing is this one. so we pause.
        this.props.setIsPlaying(false)
      } else if (!this.props.isPlaying && this.props.playingCloudcast === this.props.cloudcast.url) {
        // the current player not playing. so we play.
        this.props.setIsPlaying(true)
      } else {
        // another cloudcast is being played. we load this one and play
        this.props.setPlayingCloudcast(this.props.cloudcast.url)
        this.props.setIsPlaying(true)
      }
    }
  }

  render() {
    const largePicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.large
      ? this.props.cloudcast.pictures.large
      : ''
    const smallPicUrl = this.props.cloudcast.pictures && this.props.cloudcast.pictures.medium_mobile
      ? this.props.cloudcast.pictures.medium_mobile
      : ''

    const isPlaying = this.props.isPlaying && this.props.playingCloudcast === this.props.cloudcast.url

    return (
      <div className='ch'>
        <div className='ch__img ch__img--small'>
          <ImagePlayPause
            isPlaying={isPlaying}
            pictureUrl={smallPicUrl}
            playPauseTrigger={this.playPauseTrigger}
          />
        </div>
        <div className='ch__img ch__img--large'>
          <ImagePlayPause
            isPlaying={isPlaying}
            pictureUrl={largePicUrl}
            playPauseTrigger={this.playPauseTrigger}
          />
        </div>
        <div className='ch__details'>
          {this.props.cloudcast.tags && this.props.cloudcast.tags.length &&
            <div className='ch__tags'>
              {this.props.cloudcast.tags.map((tag) => (
                <Fragment key={tag.key}><Tag name={tag.name} /></Fragment>
              ))}
            </div>
          }
          {(!this.props.cloudcast.tags || !this.props.cloudcast.tags.length) &&
            <div className='ch__tags'>
              <Tag style={{width: 75}} name='&nbsp;' />
              <Tag style={{width: 50}} name='&nbsp;' />
            </div>
          }
          {this.props.cloudcast.name && this.props.cloudcast.name.length &&
            <Link to={this.props.cloudcast.slug} className='ch__text'>{this.props.cloudcast.name}</Link>
          }
          {(!this.props.cloudcast.name || !this.props.cloudcast.name.length) &&
            <div className='ch__text-placeholder' />
          }
        </div>
      </div>
    )
  }
}

CloudcastHome.defaultProps = {
  cloudcast: {
    pictures: {
      large: ''
    },
    name: ''
  }
}

CloudcastHome.propTypes = {
  setPlayingCloudcast: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  cloudcast: PropTypes.object,
  playingCloudcast: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default CloudcastHome

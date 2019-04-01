import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import MoreTagIcon from './MoreTagIcon'
import TagContainer from 'components/TagContainer'

import './TagAll.css'

class TagAll extends Component {
  showMoreTags = () => {
    const Msg = () => (<div>
      <div>all the tags for <strong>"{this.props.cloudcastName}"</strong>:</div>
      <div className='tags-wrapper'>
        {this.props.tags.map((tag) => (
          <Fragment key={tag.key}><TagContainer name={tag.name} /></Fragment>
        ))}
      </div>
    </div>)
    toast.success(<Msg />)
  }

  render() {
    const classTa = this.props.placeholder ? 'ta ta__tag--placeholder' : 'ta'
    return <div className={classTa}>
      <span
        className='ta__tag button-style'
        onClick={this.showMoreTags}
      >
        <MoreTagIcon />
      </span>
    </div>
  }
}

TagAll.propTypes = {
  tags: PropTypes.array,
  cloudcastName: PropTypes.string,
  placeholder: PropTypes.bool
}

export default TagAll

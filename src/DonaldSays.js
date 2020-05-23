import React, { useState } from 'react'
import Moment from 'react-moment'

const DonaldSays = () => {
  const [text, setText] = useState('')
  const [tweet, setTweet] = useState(false)
  const [img, setImg] = useState({})

  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg({
        image: URL.createObjectURL(e.target.files[0]),
      })
    }
  }

  const handleTweet = () => {
    setTweet(!tweet)
    console.log(tweet)
  }

  if (!tweet) {
    return (
      <div className='main'>
        <h1 className='main__heading'>Hack Donny's twitter below</h1>
        <div className='tweet'>
          <div className='tweet__input'>
            <img
              className='tweet__input-img'
              src='./img/donny.jpg'
              alt='donny'
            />
            <textarea
              placeholder='He said...'
              maxLength='140'
              required
              onChange={handleChange}
              className='tweet__input-input'
            />
          </div>
          <div className='tweet__actions'>
            <label className='tweet__input-label' for='file'>
              <img className='tweet__icon-img' src='./img/img.jpg' />
            </label>
            <input
              id='file'
              type='file'
              accept='image/*'
              multiple={false}
              className='tweet__input-fileinput'
              onChange={handleImageUpload}
            />
            <button className='tweet__button' onClick={handleTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='main'>
        <h1 className='main__heading'>
          Oh wow! Screenshot it before he deletes it!
        </h1>
        <div className='tweet'>
          <div className='tweet__group'>
            <img
              className='tweet__input-img'
              src='./img/donny.jpg'
              alt='donny'
            />
            <div className='tweet__group-subgroup'>
              <h2 className='tweet__group-name'>
                Donald J. Trump{' '}
                <img
                  src='./img/tick.jpg'
                  className='tweet__group-img'
                  alt='tick'
                />
              </h2>
              <p className='tweet__group-handle'>@realDonaldTrump</p>
            </div>
          </div>
          <p className='tweet__body tweet__input-input'>{text}</p>

          {img.image && (
            <img src={img.image} className='tweet__upload' alt='upload' />
          )}

          <div className='tweet__info'>
            <Moment className='tweet__info-date' format='h:mm A'>
              {Date.now()}
            </Moment>
            <span className='tweet__info-dot'>·</span>
            <Moment className='tweet__info-date' format='MMM D, YYYY'>
              {Date.now()}
            </Moment>
            <span className='tweet__info-dot'>·</span>
            <a className='tweet__info-link' href='#'>
              Twitter for iPhone
            </a>
          </div>
          <hr className='tweet__line' />
          <div className='tweet__data'>
            <p className='tweet__data-info'>
              <span className='tweet__data-bold'>84.5K</span> Retweets
            </p>
            <p className='tweet__data-info'>
              <span className='tweet__data-bold'>338.1K</span> Likes
            </p>
          </div>
          <hr className='tweet__line' />
          <button className='tweet__button' onClick={handleTweet}>
            Go Back
          </button>
        </div>
      </div>
    )
  }
}

export default DonaldSays

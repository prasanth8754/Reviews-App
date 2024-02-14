import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  onClickLeftArrow = () => {
    const {position} = this.state
    if (position > 0) {
      this.setState(prevState => ({position: prevState.position - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const length = reviewsList.length - 1
    const {position} = this.state
    if (position < length) {
      this.setState(prevState => ({position: prevState.position + 1}))
    }
  }

  render() {
    const {position} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[position]
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Reviews</h1>
          <div className="profile-cont">
            <img className="profile-pic" src={imgUrl} alt={username} />
          </div>
          <div className="carousel-cont">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                className="arrow-logo"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                className="arrow-logo"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

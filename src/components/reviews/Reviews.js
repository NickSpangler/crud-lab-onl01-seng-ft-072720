import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
// import React, { Component } from 'react';
// import Review from './Review';

// class Reviews extends Component {

//   render() {
//     console.log('REVIEWS', this.props.reviews, 'RID', this.props.restaurantId)

//     return (
//       <ul>
//         {this.props.reviews.filter(review => review.restuarantId === this.props.restaurantId).map( review => <Review review={review} deleteReview={this.props.deleteReview}/>)}
//       </ul>
//     );
//   }
// };

// export default Reviews;
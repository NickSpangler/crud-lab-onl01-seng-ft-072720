import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
// import React, { Component } from 'react';
// import Reviews from './Reviews';

// class ReviewInput extends Component {
//   state = {
//     text: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       text: e.target.value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     this.props.addReview(this.state.text, this.props.restaurantId)
//     this.setState({
//       text: ''
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' onChange={this.handleChange} value={this.state.text}></input>
//           <input type='submit' value='Add Review'></input>
//         </form>
//       </div>
//     );
//   }
// };

// export default ReviewInput;

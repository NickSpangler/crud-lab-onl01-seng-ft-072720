import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

// import React, { Component } from 'react';
// import RestaurantInput from '../components/restaurants/RestaurantInput';
// import Restaurants from '../components/restaurants/Restaurants';
// import { connect } from 'react-redux'

// class RestaurantsContainer extends Component {

//   render() {
//     console.log()
//     return (
//       <div>
//         <RestaurantInput addRestaurant={this.props.addRestaurant} />
//         <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ restaurants }) => ({ restaurants })

// // const mapStateToProps = state => {
// //   return (
// //     {
// //       restaurants: state.restaurants.restaurants
// //     }
// //   )
// // }

// const mapDispatchToProps = dispatch => {
//   return (
//     {
//       addRestaurant: name => dispatch({type: 'ADD_RESTAURANT', name: name }),
//       deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id})
//     }
//   )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      image_width: 200,
      ratio: 1.75
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
  }

  render(){
    return (
      <div>
        <Header />
        <div className ="container">
          <Menu dishes = {this.state.dishes}
          onClick={(dishId)=> this.onDishSelect(dishId)}
          image_width = {this.state.image_width}
          ratio = {this.state.ratio} />
          <DishDetail
          dish ={this.state.dishes.filter(
            (dish) => dish.id === this.state.selectedDish)[0]}
          image_width = {this.state.image_width}
          ratio = {this.state.ratio} />
        </div>
        <Footer/>
    </div>

    );
  }
}

export default Main;

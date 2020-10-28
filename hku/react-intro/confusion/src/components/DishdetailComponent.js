import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{

  constructor(props){
    super(props);
    this.state ={
      ratio: 1.75,
      image_width: 200

    };
  }

  organizeComments(comments){
    if (comments != null){
      const commentBlock = comments.map((comment) => {
        let date_new = new Date(comment.date).toDateString().slice(4,);
        date_new = date_new.slice(0,6) +','+ date_new.slice(6,);
        return(
          <div key= {comment.id}>
            <ul className="list-unstyled">
                    <li className ="mb-3">{comment.comment}</li>
                    <li>-- {comment.author}, {date_new} </li>
            </ul>
          </div>
        );
      });
      return commentBlock;
      }
    else{
      return (<div></div>);
    }
  }
  renderDish(dish){
    if(dish != null){
      return(
        <div className ="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
               src={dish.image}
               alt={dish.name}
               width = {this.state.image_width}
               height = {this.state.image_width*this.state.ratio}
               />
              <CardBody>
                <CardTitle ><h5>{dish.name}</h5></CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card className = "border-0">
              <CardBody>
                <CardTitle ><h4 >Comments </h4> </CardTitle>
                <CardText>{this.organizeComments(dish.comments)}</CardText>
              </CardBody>
            </Card>

          </div>
        </div>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }

  render(){
    return(
        this.renderDish(this.props.selectedDish)
    );
  }

}


export default DishDetail;

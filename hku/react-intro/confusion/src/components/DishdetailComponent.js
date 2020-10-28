import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


  function OrganizeComments({comments}){
    if (comments != null){
      const commentBlock = comments.map((comment) => {
        let date_new = new Date(Date.parse(comment.date));
        date_new = new Intl.DateTimeFormat('en-US',
              {year: 'numeric', month:'short', day:'2-digit'}).format(date_new);

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
  function RenderDish({dish, image_width, ratio}){
    if(dish != null){
      return(
        <div className ="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
               src={dish.image}
               alt={dish.name}
               width = {image_width}
               height = {image_width*ratio}
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
                <CardText> <OrganizeComments comments = {dish.comments} /> </CardText>
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

  const DishDetail = (props) => {
      return(
          <RenderDish
        dish = {props.dish}
        image_width = {props.image_width}
        ratio = {props.ratio} />
      );
    }



export default DishDetail;

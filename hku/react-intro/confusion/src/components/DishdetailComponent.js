import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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
  function RenderDish({dish, comments, image_width, ratio}){
    console.log(comments);
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
                <CardText> <OrganizeComments comments = {comments} /> </CardText>
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
        <React.Fragment>
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/menu'>Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
            </div>
          </div>
            <RenderDish
          dish = {props.dish}
          comments = {props.comments}
          image_width = {props.image_width}
          ratio = {props.ratio} />
          </React.Fragment>
      );
    }



export default DishDetail;

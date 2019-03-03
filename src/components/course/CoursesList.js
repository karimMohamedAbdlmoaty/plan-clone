import React from "react";
//import a-image from './a-image.jpg';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { fa-arrow-alt-circle-up, fa-star } from '@fortawesome/fontawesome-free-solid';
import { browserHistory } from 'react-router';


class CoursesList extends React.Component{
    constructor(props){
        super(props);

        this.courseHandle=this.courseHandle.bind(this);
    }

    courseHandle(){
        console.log('okkkkkk');
        browserHistory.push('/course');
    }

    render(){
        return(
            <div className="col-md-4" onClick={this.courseHandle}> 
                <div className="mr-auto bg-info h-50 cards" onClick={this.courseHandle}> 
                    <img src={'https://www.curtincollege.edu.au/wp-content/uploads/2015/04/Courses.png'}/>
                    <h1>Course title</h1>
                    {/* <i className="fas fa-star"></i> */}
                    {/* <FontAwesomeIcon className="far fa-arrow-alt-circle-up"/>
                    <FontAwesomeIcon className="fas fa-star"/> */}
                    <p className="likes">2 likes</p>
                    <p className="rate">20 rate</p>
                    <div className="to-clear"></div>
                </div>
            </div>
        );
    }
}

export default CoursesList;
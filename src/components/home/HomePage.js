import React from "react";
import CoursesList from '../course/CoursesList';


class HomePage extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.courseHandle=this.courseHandle.bind(this);
    // }

    // courseHandle(){
    //     console.log('okkkkkk');

    // }

    render(){
        const list =[0,1,2,3,4,5];
        return(
            <div className="container-fluid">
                {list.map((item,key)=><CoursesList key={key}/>)}
            </div>
        );
    }
}

export default HomePage;
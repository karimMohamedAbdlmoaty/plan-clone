import React from "react";

class SeletedCourse extends React.Component{
    render(){
        return(
            <div>
                <div className="course-content">
                    <h1 className="text-primary course-content">COURSE-TITLE</h1>
                    {/* <p className="text-info detail students">No of students: ...</p>
                    <p className="text-info detail">What i will learn: ...</p> */}
                    <button className="btn btn-warning" id="content-enroll">ENROLL</button>
                    <p className="text-info detail" id="content-rate">20 rate</p>
                    <p className="text-info detail" id="content-likes">2 likes</p>
                    <div className="to-clear"></div>
                    <p><img id="courseImage" src={'https://www.curtincollege.edu.au/wp-content/uploads/2015/04/Courses.png'}/></p>

                </div>
                <div className="aa">
                    <p className="text-info detail students">No of students: ...</p>
                    <p className="text-info detail">What i will learn: ...</p>
                </div>
            </div>

            
        );
    }
}

export default SeletedCourse;
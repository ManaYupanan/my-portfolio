import React ,  { Component } from "react";

class Skill extends Component{

    constructor(prop){
        super(prop);

        this.state={
            'myskills': ['HTML' ,'CSS' , 'JS' ,  'ReactJS' ,'Bootstrap' , 'NodeJS', 'Java' ,'SQL' , 'MySql' ]
        }
    }

    render(){
        return (
            <div className="my-4 skill container ">
                <h1>My Skill</h1>
                <ul>
                    {this.state.myskills.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skill;
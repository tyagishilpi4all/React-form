import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"shilpi ",
            email:"",
            password:"",
            phone:""
        }
    }

    handleChange=(event)=>{
        console.log( event.target.name, "hbjnkm",event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        const { name, email, password, phone} =this.state
        const someData=[
            {type:"text" ,placeholder:"Enter Name", name:"name", value:name},
            {type:"text" ,placeholder:"Enter Email", name:"email" ,value:email},
            {type:"password" ,placeholder:"Enter password", name:"password", value:password},
            {type:"text" ,placeholder:"Enter Phone", name:"phone", value:phone},
        ]
        return(
            <React.Fragment>
                <div className="col-md-6 mx-auto">
                        {
                            someData.map((obj,index)=>(
                                <div className="form-group" key={index}>
                                    <input 
                                    {...obj}
                                    // type={obj.type}
                                    className="form-control" 
                                    // value={obj.value}
                                    // name={obj.name}
                                    // placeholder={obj.placeholder}
                                    onChange={this.handleChange}/>
                                </div>
                            ))
                        }
                </div>
            </React.Fragment>
        )
    }
};
export default Form;
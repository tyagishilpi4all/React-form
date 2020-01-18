import React,{Component} from 'react';

class FormRef extends Component{
    constructor(props){
        super(props);

        this.state={
            value:''
        }

        this.textInput = React.createRef();
        this.text1Input = React.createRef();
    }

    componentDidMount=()=>{
        // console.log(this.textInput.current)
        this.textInput.current.focus();
    }

    handleForm=(event)=>{
        console.log("ghjk",this.text1Input.current.value);
        this.setState({
            value:this.text1Input.current.value
        })
        event.preventDefault();
    }

    render(){
        const inputData=[
            {type:"text" , placeholder:"Enter Name" ,name:"name", ref:this.textInput,},
            {type:"password" , placeholder:"Enter password",name:"password" ,ref:this.text1Input},
        ]
        return(
            <React.Fragment>
                <div className="col-md-6 mx-auto">
                    <h4 className="refForm">Form with Ref</h4>
                    <form onSubmit={this.handleForm}>
                    {
                        inputData.map((obj , index)=>(
                            <div className="form-group" key={index}>
                                <input {...obj}
                                className="form-control"/>
                            </div>
                        ))
                    }
                    <input type="submit" value="submit" className="btn btn-success"/>

                    <p className="refForm">Typed Password:{this.state.value}</p>
                    </form>
                </div>
            
                <style jsx="true">
                    {
                        `.refForm{
                            text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};
export default FormRef;
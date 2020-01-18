import React,{Component} from 'react';
import Form from '../component/form';
import FormRef from '../component/formRef';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <h1 className="formHead">Form</h1>
                <Form />
                <FormRef />
                <style jsx="true">
                    {
                        `.formHead{
                            text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default App;
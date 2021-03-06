import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {

   constructor(props){
       super(props);
       this.onChangePersonName = this.onChangePersonName.bind(this);
       this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
       this.onChangeNICNo = this.onChangeNICNo.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
      

       this.state = {
           person_name: '',
           business_name: '',
           nic_no: ''
       }
   }
   onChangePersonName(e){
       this.setState({
           person_name: e.target.value
       },
        );
   }

   onChangeBusinessName(e){
    this.setState({
        business_name: e.target.value
    }
     );
   }

   onChangeNICNo(e){
    this.setState({
        nic_no: e.target.value
    }
     );
   }
   onSubmit(e){
      e.preventDefault();
    //   console.log(`The values are ${this.state.person_name},${this.state.business_name}, and ${this.state.nic_no}`);
    //   this.setState(this.state,{
    //     person_name: '',
    //     business_name: '',
    //     nic_no: ''
    //   })
    const obj ={
        person_name : this.state.person_name,
        business_name : this.state.business_name,
        nic_no : this.state.nic_no
    };
    axios.post('http://localhost:4000/business/add',obj).then(res=>console.log(res.data));

    this.setState({
        person_name:'',
        business_name:'',
        nic_no:''
    })
    }

   




    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Add New Bussiness</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name: </label>
                        <input type="text"className="form-control" value={this.state.person_name} onChange={this.onChangePersonName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Bussiness Name: </label>
                        <input type="text"className="form-control" value={this.state.business_name} onChange={this.onChangeBusinessName}/>
                    </div>
                    <div className="form-group">
                        <label>Add NIC Number: </label>
                        <input type="text"className="form-control" value={this.state.nic_no} onChange={this.onChangeNICNo}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Bussiness" className="btn btn-danger"/>
                    </div>
                </form>
                
            </div>
        )
    }
}
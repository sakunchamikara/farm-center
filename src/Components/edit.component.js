import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNICNo = this.onChangeNICNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name :'',
            business_name : '',
            nic_no : ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/business/edit'+ this.props.match.params.id)
         .then(response=>{
             this.setState({
                 person_name:response.data.person_name,
                 business_name:response.data.business_name,
                 nic_no:response.data.nic_no
             })
         }) 
         .catch(function(error){
             console.log(error);
         })
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
      
      const obj ={
          person_name : this.state.person_name,
          business_name : this.state.business_name,
          nic_no : this.state.nic_no
      };
      axios.post('http://localhost:4000/business/update'+ this.props.match.params.id,obj).then(res=>console.log(res.data));
  
      this.props.history.push('/index');
      }

      render(){
          return(
            <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
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
                        <input type="submit" value="Update Bussiness" className="btn btn-danger"/>
                    </div>
                </form>
        </div>
          )
      }
}
import React from "react";
import axios from 'axios';
import Redirect from 'react-router-dom'
export default class updateDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            shopName:'',
            textArea:'',
            record_id:''
        }
        this.handleChangeId=this.handleChangeId.bind(this);
        this.handleChangeName=this.handleChangeName.bind(this);
         this.handleChangeShopName=this.handleChangeShopName.bind(this);
         this.handleChangeTextArea=this.handleChangeTextArea.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
         this.handleChangeRecord_Id=this.handleChangeRecord_Id.bind(this);
         this.handleDelete=this.handleDelete.bind(this)
        }
    handleChangeRecord_Id(event){
        this.setState({record_id:event.target.value});
    }
    handleChangeId(event){
         this.setState({id:event.target.value});
        }
    handleChangeName(event){
         this.setState({name:event.target.value});
     }
     handleChangeShopName(event){
        this.setState({shopName:event.target.value});
    }
    handleChangeName(event){
        this.setState({name:event.target.value});
    }
    handleChangeTextArea(event){
        this.setState({textArea:event.target.value});
    }
    handleSubmit(){
        var id=this.state.id;
        var data= {
            'name':this.state.name,
            'shop_name':this.state.shopName,
            'status':this.state.textArea
        }
        const conf={
                method: "put",
                url: 'web/API/'+id+'/',
                data: data,
              };
              console.log("lllll",conf);
              axios(conf).then((response)=>{console.log(response)})
            }
            handleDelete(){
                var id=this.state.record_id;
                const conf={
                        method: "delete",
                        url: 'web/API/'+id+'/',
                      };
                      console.log("lllll",conf);
                      axios(conf).then((response)=>{console.log(response)})
                    }
    render(){
        return(
            <div className="container-fluid">
               <form action="#" onSubmit={this.handleSubmit}>
               <div className="form-group">
                       <label for="no">Id:</label>
                       <input type='text'id="no" className="form-control form-control-lg" placeholder="Enter Name" value={this.state.id} onChange={this.handleChangeId}/>
                   </div>
                   <div className="form-group">
                       <label for="name">Name:</label>
                       <input type='text'id="name" className="form-control form-control-lg" placeholder="Enter Name" value={this.state.name} onChange={this.handleChangeName}/>
                   </div>
                   <div className="form-group">
                       <label for="shopName">Shop Name:</label>
                       <input type='text'id="shopName" className="form-control form-control-lg" placeholder="Enter Shop Name" value={this.state.shopName} onChange={this.handleChangeShopName}/>
                   </div>
                   <div className="form-group">
                       <label for="status">Status:</label>
                       <textarea id="status" className="form-control form-control-lg" value={this.state.textArea} onChange={this.handleChangeTextArea}></textarea>
                   </div>
                   <div className="form-group">
                      <input type="submit" className="btnSubmit" value="submit" />
                    </div>
               </form>
               <div class="jumbotron">
                   <form action="#" onSubmit={this.handleDelete}>
               <div className="form-group">
                       <label for="No">Id:</label>
                       <input type='text'id="No" className="form-control form-control-lg" placeholder="Enter Name" value={this.state.record_id} onChange={this.handleChangeRecord_Id}/>
                   </div>
                   <div className="form-group">
                       <input type='submit' className="form-control form-control-lg" value="Delete" />
                   </div>
                   </form>
                   </div>
            </div>

        )
    }
}
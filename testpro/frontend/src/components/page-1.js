import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
 export default class HomePage extends React.Component{
     constructor(props){
         super(props)
         this.state={
             name:'',
             shopName:'',
             textArea:'',
             responseData:[],
             redirect:false
         }
         this.handleChangeName=this.handleChangeName.bind(this);
         this.handleChangeShopName=this.handleChangeShopName.bind(this);
         this.handleChangeTextArea=this.handleChangeTextArea.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
         this.listAll=this.listAll.bind(this);
         this.setRedirect=this.setRedirect.bind(this);
         this.renderRedirect=this.renderRedirect.bind(this);
        }
         componentDidMount(){
            const conf = {
                method: "get",
                url: 'web/API/',
              };
              axios(conf).then((response)=>{console.log(response);
           console.log(response.data);
           this.setState({responseData:response.data});})
            
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
    listAll(){
        var list=[];
        for(var i=0;i<this.state.responseData.length;i++)
        {
            var Index=this.state.responseData[i];
            list.push(<tr id={i}>
                    <td>{Index['id']}</td>
                    <td>{Index['name']}</td>
                    <td>{Index['shop_name']}</td>
                    <td>{Index['status']}</td></tr>)
        }
    return(
        <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">shop name</th>
                    <th scope="col">status</th>
                    </tr>
                 </thead>
                 {list}
                    <tbody>
                     </tbody>
                </table>
    )
    }
      
    handleSubmit(){
        var data = {
                  'name': this.state.name,
                  'shop_name':this.state.shopName,
                  'status':this.state.textArea,
                }

    
        const conf = {
          method: "post",
          url: 'web/API/',
          data: data,
        };
        axios(conf).then((response)=>{console.log(response)})
    }
    setRedirect(){
        this.setState({
          redirect: true
        })
      }
    renderRedirect(){
        if (this.state.redirect) {
          return <Redirect to='/updateDelete' />
        }
      }
     render(){
         return(
             <div>
                 {this.renderRedirect()}
                 <nav>
            <button type="button" class="btn btn-default navbar-btn" onClick={this.setRedirect}>Update and delete</button>
            </nav>
            {this.listAll()}
            <div className="container-fluid">
               <form action="#" onSubmit={this.handleSubmit}>
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
            </div>
         </div>)
     }
 }
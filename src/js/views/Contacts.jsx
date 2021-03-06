import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

export default class Contacts extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            modalId:''
        };
    }
    render() {
        return (
            
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            <Context.Consumer>
                                
                                {({ store }) => {
							return( store.contacts.map((item, index)=> 
    <ContactCard onDelete={() => this.setState({  showModal: true, modalId:item.id})} id={index} item={item} key={index}/>
							));
                                }}
						
							
                            </Context.Consumer>
                            
                        </ul>
                    </div>
                </div>
                <Modal id= {this.state.modalId} show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
            </div>
        );
    }
}
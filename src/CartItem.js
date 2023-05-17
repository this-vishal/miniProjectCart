import React, { Component } from "react";
import { ReactDOM } from "react";
import './index.css';



class CartItem extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Mobile Phone',
            price: '999',
            qty: 1,
            img: '',
        }
        //  this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {

        // this.state.qty+=1;

        this.setState({
            qty: this.state.qty + 1,
        }, () => { })
        console.log(this.state)


    }
    decreaseQuantity = () => {


        this.setState((prevState) => {

            return {
                qty: prevState.qty - 1,
            }
        })



    }



    render() {
        const { title, price, qty } = this.state;
        return (

            <div className="cart-item">
                <div className="left-block">

                    <img style={styles.image} src="" alt="" />

                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={styles.color}>Rs {price}</div>
                    <div style={styles.color}>Qty {qty}</div>
                    <div className="cart-item-actions">

                        {/* Buttons */}

                        <img onClick={this.increaseQuantity} className="action-icons" alt="Increase" src="https://img.icons8.com/?size=512&id=1501&format=png" />
                        <img  onClick={this.decreaseQuantity} className="action-icons" alt="Decrease" src="https://img.icons8.com/?size=512&id=1504&format=png" />
                        <img   onClick={this.deleteQuantity} className="action-icons" alt="Delete" src="https://img.icons8.com/?size=512&id=99961&format=png" />
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {

    image: {
        height: 115,
        width: 115,
        borderRadius: 4,
        backgroundColor: '#ccc',

    },
    bgColor: {
        backgroundColor: '#777',
    },
    color: {
        color: '#777',
    }



}

export default CartItem;
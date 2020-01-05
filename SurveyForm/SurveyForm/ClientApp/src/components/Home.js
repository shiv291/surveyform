import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
    state = {
    productId: 0,
    productstatus: "",
    comment:"",
        products: [{ "ProductId": 1, "ProductName": "Test" }, { "ProductId":2, "ProductName": "Test2" }]
};
    constructor(props) {
        super(props);        
               
    }

    saveFeedback() {
        axios.post('api/Survey/Save', {
            productId: this.state.productId,
            productstatus: this.state.productstatus,
            comment: this.state.comment
        })
            .then(function (response) {
                alert("thank you , your feedback .");
                this.setState({
                    productId: 0,
                    productstatus: "",
                    comment: ""});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div class="container">
                    <h3>Survey</h3><hr />
                    <div class="form-group">
                        <label for="email">Select Product :</label>
                        <select onChange={(event) => this.setState({ productId: event.target.value })}>
                            <option value={0}>
                                Select Product
                            </option>
                            {this.state.products && this.state.products.length > 0 && this.state.products.map((val, key) => (
                                <option value={val.ProductId}>
                                    {val.ProductName}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Rating:</label>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-default">
                                <input type="radio" autocomplete="off" value="Very Satisfied" onChange={(event) => this.setState({ productstatus: event.target.value })} />Very Satisfied
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" autocomplete="off" value="Satisfied" onChange={(event) => this.setState({ productstatus: event.target.value })} />Satisfied
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" autocomplete="off" value="Unsatisfied" onChange={(event) => this.setState({ productstatus: event.target.value })} />Unsatisfied
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" autocomplete="off" value="NA" onChange={(event) => this.setState({ productstatus: event.target.value })} />NA
                            </label>
                        </div>
                    </div>
                    <div class="form-group">

                        <label>Comment</label>
                        <div>
                            <textarea cols={40} rows={3} onChange={(event) => this.setState({ comment: event.target.value })} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => this.saveFeedback()}>Submit</button>
                </div>
            </div>
        );
    }
}

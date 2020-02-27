import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap"

const QUANTITY_TO_BUY = 1

class ProductsPage extends React.Component {
  static defaultProps = {
    available: 10,
    oncard: 0,
    status: "POSSIBLE"
  }
  
  constructor(props) {
    super(props)
    this.state = {...props}
    this.onBuyProduct = this.onBuyProduct.bind(this)
  }
  
  onBuyProduct() {
    if (this.state.available > 0) {
      let newState = {
        oncard: this.state.oncard + QUANTITY_TO_BUY,
        available: this.state.available - QUANTITY_TO_BUY
      }
      if (newState.available === 0)
        newState.status = "NO PRODUCTS"
  
      this.setState(newState)
    }
  }
  
  render() {
    return (
      <div className="page page-products">
        <h2>Products Store | <small>Available: {this.state.available}</small></h2>
        <hr/>
        <Button onClick={this.onBuyProduct}>Buy product</Button>
        <div><small>Added: {this.state.oncard}</small></div>
        <hr/>
        <h6>Status: {this.state.status}</h6>
      </div>
    )
  }
}

ProductsPage.propTypes = {
  oncard: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired,
  status: PropTypes.string,
}

const App = () => {
  return (
    <div className="content">
      <div className="container">
        <ProductsPage available={5}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

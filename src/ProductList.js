import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';

export default class ProductList extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>

        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Product Name
              </th>
              <th>
                Quantity
              </th>
              <th>
                Unit Price
              </th>
              <th>
                Units in Stock
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map (product => (
              <tr key={product.id}>
                <th scope="row">
                  {product.id}
                </th>
                <td>
                  {product.productName}
                </td>
                <td>
                  {product.quantityPerUnit}
                </td>
                <td>
                  {product.unitPrice}
                </td>
                <td>
                  {product.unitsInStock}
                </td>
                <td>
                  <Button
                    color="warning"
                    onClick={() => this.props.addToCart (product)}
                  >
                    Sepete Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

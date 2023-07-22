import CategoryList from './CategoryList';
import Navi from './Navi';
import {Container, Row, Col} from 'reactstrap';
import ProductList from './ProductList';
import {Component} from 'react';
import alertify from 'alertifyjs';
import {Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

// function App() {
//   let productInfo = {title:"Product List Encapsulated", baskaBirProp: "Başka Bir Prop"}
//   let categoryInfo = {title: "Category List Encapsulated"};
//   let naviInfo = {title: "Navi Component Encapsulated"};
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Navi info={naviInfo}/>
//         </Row>
//         <Row>
//           <Col xs="3">
//             <CategoryList info={categoryInfo}/>
//           </Col>
//           <Col xs="9">
//             <ProductList info={productInfo}/>
//           </Col>
//         </Row>
//       </Container>

//     </div>
//   );
// }

// export default App;
export default class App extends Component {
  state = {
    currentCategory: '',
    products: [],
    cart: [],
  };

  changeCategory = category => {
    this.setState ({currentCategory: category.categoryName});
    this.getProducts (category.id);
  };

  componentDidMount () {
    this.getProducts ();
  }

  getProducts = categoryId => {
    let url = 'http://localhost:3000/products';
    if (categoryId) {
      url += '?categoryId=' + categoryId;
    }
    fetch (url)
      .then (response => response.json ())
      .then (data => this.setState ({products: data}));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find (c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push ({product: product, quantity: 1});
    }
    this.setState ({cart: newCart});
    alertify.success (product.productName + ' sepete eklendi.', 3);
  };

  removeFromCart = product => {
    let newCart = this.state.cart;
    var existingItem = this.state.cart.find (c => c.product.id === product.id);
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      newCart = this.state.cart.filter (c => c.product.id !== product.id);
    }

    this.setState ({cart: newCart});
    alertify.error (product.productName + ' sepetten çıkarıldı.', 3);
  };

  render () {
    let productInfo = {
      title: 'Product List Encapsulated',
      baskaBirProp: 'Başka Bir Prop',
    };
    let categoryInfo = {title: 'Category List Encapsulated'};
    let naviInfo = {title: 'Navi Component Encapsulated'};
    return (
      <div>
        <Container>
          <Navi
            info={naviInfo}
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
          />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                />
                <Route path="/form1" element={<FormDemo1 />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

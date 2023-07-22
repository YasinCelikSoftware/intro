import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
  state = {email: '', password: '', city: '', description: ''};

  onChangeHandle = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState ({[name]: value});
  };

  onSubmitHandle = e => {
    e.preventDefault ();
    alertify.success (this.state.email + ' veri tabanına kaydedildi.', 5);
  };

  render () {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandle}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Giriniz"
              onChange={this.onChangeHandle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Şifre</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Şifre Giriniz"
              onChange={this.onChangeHandle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Açıklama</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Açıklama Giriniz"
              onChange={this.onChangeHandle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Şehir</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandle}
            >
              <option>Ankara</option>
              <option>Istanbul</option>
              <option>İzmir</option>
              <option>Adana</option>
              <option>Konya</option>
            </Input>
          </FormGroup>

          <Button type="submit">Gönder</Button>

        </Form>
      </div>
    );
  }
}

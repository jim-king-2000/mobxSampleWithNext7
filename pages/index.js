import { action, observable, computed } from 'mobx';
import { Provider, inject, observer } from 'mobx-react';
import React, { Component } from 'react';

class Store {
  @observable show = true;

  @action toggleShow = () => this.show = !this.show;
  @computed get getShow() {
    return this.show;
  }
}

const store = new Store();

@inject('store')
@observer
class TestMobX extends Component {
  constructor() {
    super();
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    console.log('onclick');
    this.props.store.toggleShow();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onclick}>Click Me!</button>
        <p>{this.props.store.getShow && 'Hello Next.js@8+ with MobX.'}</p>
      </div>
    )
  }
}

const Index = () => (
  <Provider store={store}>
    <TestMobX />
  </Provider>
);

export default Index;
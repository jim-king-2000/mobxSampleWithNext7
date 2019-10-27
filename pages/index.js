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
  onclick = () => {
    console.log('onclick');
    this.props.store.toggleShow();
  }

  render() {
    return (
      <div>
        <button onClick={this.onclick}>Click Me!</button>
        {this.props.store.getShow && <p>Hello Next.js@8+ with MobX.</p>}
      </div>
    )
  }
}

export default () => (
  <Provider store={store}>
    <TestMobX />
  </Provider>
);

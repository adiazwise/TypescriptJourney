import React, { Component } from 'react'
import { ItemInterface } from '../../../models/items/Item.interface';
type Props = {
    testid: string
    model: ItemInterface
    onItemSelect: (item : ItemInterface) => void

}

export class ItemComponent extends Component<Props> {


  constructor(props: Props) {
    super(props);
  }

  get cssClass() {
    let css = 'item';
    if(this.props.model?.selected){
        css += ' selected';
    }
    return css.trim()
}

  render(): React.ReactNode {
    const { model } = this.props;
    const testid = this.props.testid || 'not-set';
  
    

    return (
      <li data-testid={testid} className={this.cssClass} 
      onClick={() => this.props.onItemSelect(model)}>
        <div className='selected-indicator'>*</div>
        <div className='name'>{model.name}</div>
      </li>
    )
  }
}

export default ItemComponent
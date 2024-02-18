
import { ItemListComponent } from './components/items/ItemList.component'
import './App.css'
import { ItemInterface } from './models/items/Item.interface'
import { useState } from 'react'


function App() {
const [items,setItems] = useState<ItemInterface[]>([
  { id: 1, name: 'Item 1', selected: false },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: false }

])

  const onItemSelected = (item : ItemInterface) => {
    const updatedItems = [...items];
    const found = updatedItems.find(i => i.id === item.id);
    updatedItems[updatedItems.indexOf(found)].selected = !found?.selected;
    setItems(updatedItems);
   
  }



  return (
    <>
      <ItemListComponent items={items} onItemSelect={onItemSelected} />
    </>
  )
}

export default App

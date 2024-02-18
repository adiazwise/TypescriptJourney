import { ItemInterface } from "../../models/items/Item.interface";
import ItemComponent from "./children/Item.component";

type Props = {
    items : ItemInterface[],
    onItemSelect : (item : ItemInterface) => void
}
export const ItemListComponent  = (props: Props) => {

    const handleItemClick = (item : ItemInterface) => {
        props.onItemSelect(item)
    }

    return (
        <div>
            <h3>Items</h3>
            <ul>
            {
                props.items.map((item,index) => (

                    <ItemComponent 
                            testid={`item-${item.id}`}
                            key={index}
                            model={item} 
                            onItemSelect={() =>handleItemClick(item)}
                    />

                ))
            }
            </ul>
        </div>  
    );
}
import { render, fireEvent, prettyDOM } from '@testing-library/react'
// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface' // import reference to your Item component:
import { ItemComponent } from './Item.component'

describe('Item.component: behavior' , () => {

    it('click event invokes onItemSelect handler as expected', () => {
        const model : ItemInterface = {
            id: 1,
            name: 'Unit test item 1', 
            selected: false
        }

        //create a spy function with vitetst.fn()
        const onItemSelect = vitest.fn();
        
        const testid = 'unit-test-item'

        //render component
        const {container } = render(
            <ItemComponent testid={testid} model={model} onItemSelect={onItemSelect} />
        )

        const liElement = container.firstChild as HTMLElement

        //fire Click 
        fireEvent.click(liElement)

        //check results 
        expect(onItemSelect).toHaveBeenCalledTimes(1)
        

    })
})
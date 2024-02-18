import { render, screen, prettyDOM } from '@testing-library/react'
// import reference to our interface
import { ItemInterface } from '../../../models/items/Item.interface' // import reference to your Item component:
import { ItemComponent } from './Item.component'
describe('Item.component: rendering', () => {
    it('renders an Item text correctly', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1', selected: false
        }
        // render component
        render(<ItemComponent testid={testid} model={model} onItemSelect={() => { }} />)
        // get element reference by testid
        const liElement = screen.getByTestId(testid)
        // test expect(liElement).not.toBeNull()
        // get element children
        const children = liElement.children
        expect(children).toHaveLength(2) 
        expect(children.item(1)?.innerHTML).toContain('Unit test item 1')
    })
    it('renders an Item indicator correctly', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 2', selected: false
        }

        render(
            <ItemComponent testid={testid} model={model} onItemSelect={() => { }} />
        )

        // get element reference by testid
        const liElement = screen.getByTestId(testid)
        // test expect(liElement).not.toBeNull()
        // get element children
        const children = liElement.children
        expect(children).toHaveLength(2)
        expect(children.item(0)?.innerHTML).toEqual('*')
    })
// we'll add more here in a second })
    it('has expected css class when selected is true', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 3', 
            selected: true
        }

        //render component
        render(
            <ItemComponent testid={testid} model={model} onItemSelect={() => { }} />
        )

        const liElement = screen.getByTestId(testid)
      
        //test
        expect(liElement).not.toBeNull()
        expect(liElement.className).toContain('selected')
        

        
    })

    it('has expected not css class when selected is false', () => {
        const testid = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 3', 
            selected: false
        }

        //render component
        render(
            <ItemComponent testid={testid} model={model} onItemSelect={() => { }} />
        )

        const liElement = screen.getByTestId(testid)
      
        //test
        expect(liElement).not.toBeNull()
        expect(liElement.className).not.toContain('selected')
        

        
    })
})
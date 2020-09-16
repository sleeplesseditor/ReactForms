import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

let menuComponent;

beforeEach(() => {
    menuComponent = shallow(<Menu />)
})

describe('Menu', () => {
    it('renders the component', () => {
        expect(menuComponent).toHaveLength(1);
    })
});
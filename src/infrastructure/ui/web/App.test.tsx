import React from 'react';
import App from './App.web';
import Renderer from 'react-test-renderer';

it('app renders home component', () => {
    const app = Renderer.create(<App />)
    console.log(app.toJSON())
    expect(app.root.findByType('div').props.children.type.name).toBe('Home')
});
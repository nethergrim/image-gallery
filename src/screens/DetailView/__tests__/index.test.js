import React from 'react'
import DetailView from '../index'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const colorSwitchCallback = jest.fn()
const shareCallback = jest.fn()
const imageUrl = 'https://drscdn.500px.org/photo/247377659/m%3D900_k%3D1_a%3D1/v2?client_application_id=27071&webp=true&sig=b5b4070666461be985e7890d9c3b26054ae52c8c882fe9b6120bb2c627b53204'

it('renders correctly', () => {
  const tree = renderer.create(<DetailView
    imageUrl={imageUrl}
    isLoading={false}
    imageId={247377659}
    colorSwitchCallback={colorSwitchCallback}
    shareCallback={shareCallback} />).toJSON()
  expect(tree).toMatchSnapshot()
})
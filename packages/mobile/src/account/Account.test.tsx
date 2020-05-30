import * as React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import * as renderer from 'react-test-renderer'
import Account from 'src/account/Account'
import { Screens } from 'src/navigator/Screens'
import { createMockStore, getMockStackScreenProps } from 'test/utils'

describe('Account', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={createMockStore({})}>
        <Account {...getMockStackScreenProps(Screens.Account)} />
      </Provider>
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when dev mode active', () => {
    const tree = renderer.create(
      <Provider
        store={createMockStore({
          account: {
            devModeActive: true,
          },
        })}
      >
        <Account {...getMockStackScreenProps(Screens.Account)} />
      </Provider>
    )
    expect(tree).toMatchSnapshot()
  })
})

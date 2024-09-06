import { beforeEach, describe, expect, it } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import AddPlayers from '../AddPlayers.vue'

describe('Add Players', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(AddPlayers)
  })

  it('has an input field for the number of players with a default value of 8', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has "player name" input fields equal to the number of players', () => {
    const numberOfPlayersInput = wrapper.find('[data-test="number-of-players"]')
    const playerNameInputs = wrapper.findAll('[data-test="input-player-name"]')

    expect((numberOfPlayersInput.element as HTMLInputElement).value).toBe(8)
    expect(playerNameInputs.length).toBe(8)
  })

  it.todo('shows the "P{n}" for each player input', () => {})
})

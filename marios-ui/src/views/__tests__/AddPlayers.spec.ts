import { beforeEach, describe, expect, it } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import AddPlayers from '../AddPlayers.vue'
import { MAX_NUMBER_OF_PLAYERS } from '../../constants'

describe('Add Players', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(AddPlayers)
  })

  it(`has a select field for the number of players with a default value of ${MAX_NUMBER_OF_PLAYERS}`, async () => {
    const numberOfPlayers = wrapper.find('[data-test="number-of-players"]')
    expect((numberOfPlayers.element as HTMLInputElement).value).toBe(
      MAX_NUMBER_OF_PLAYERS.toString()
    )
  })

  it('has "player name" input fields equal to the number of players', () => {
    const numberOfPlayers = wrapper.find('[data-test="number-of-players"]')
    const playerNameInputs = wrapper.findAll('[data-test="input-player-name"]')

    expect((numberOfPlayers.element as HTMLInputElement).value).toBe(
      MAX_NUMBER_OF_PLAYERS.toString()
    )
    expect(playerNameInputs.length).toBe(MAX_NUMBER_OF_PLAYERS)
  })

  it.each([4, 5, 6, 7, 8])('shows the "P{n}" for each player input', async (players) => {
    const numberOfPlayers = wrapper.find('[data-test="number-of-players"]')
    await numberOfPlayers.setValue(players)

    for (let i = 1; i <= players; i++) {
      expect(wrapper.text()).toContain(`P${i}`)
    }

    expect(wrapper.text()).not.toContain(`P${players + 1}`)
  })

  it(`maximum number of players is ${MAX_NUMBER_OF_PLAYERS}`, async () => {
    const numberOfPlayers = wrapper.find('[data-test="number-of-players"]')
    await numberOfPlayers.trigger('click')
    expect(numberOfPlayers.text()).toContain(MAX_NUMBER_OF_PLAYERS)
    expect(numberOfPlayers.text()).not.toContain(MAX_NUMBER_OF_PLAYERS + 1)
  })

  it.todo('clicking the "Save" button saves the player names', async () => {})
})

import { beforeEach, describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import MainView from '../MainView.vue'

describe('Test Marios UI', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(MainView)
  })

  it('displays a score input of type text', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    expect(input.exists()).toBe(true)
    expect(input.element.getAttribute('type')).toBe('text')
  })

  it('displays a success message when scores are submitted', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    const submit = wrapper.find('[data-test="submit-scores"]')
    expect(submit.exists()).toBe(true)

    await input.setValue('123')
    await submit.trigger('click')

    expect(wrapper.text()).toContain('Scores Submitted!')
  })

  it('does not display "Scores submitted" message until the "Submit Scores" button is clicked', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    await input.setValue('123')
    expect(wrapper.text()).not.toContain('Scores Submitted!')
  })

  it('"Scores submitted" message disappears when new text is entered', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    const submit = wrapper.find('[data-test="submit-scores"]')
    await input.setValue('123')
    await submit.trigger('click')

    expect(wrapper.text()).toContain('Scores Submitted!')

    await input.setValue('456')
    expect(wrapper.text()).not.toContain('Scores Submitted!')
  })

  it('submitted scores can only be numbers', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    const submit = wrapper.find('[data-test="submit-scores"]')
    await input.setValue('abc')

    await submit.trigger('click')
    expect(wrapper.text()).not.toContain('Scores Submitted!')
    expect(wrapper.text()).toContain('Please enter only numbers')
  })

  // TODO
  it.todo('displays an error message when scores are not submitted', async () => {})

  describe('Player List', () => {
    it('renders a list of players with scores of 0 at the start', async () => {
      expect(wrapper.text()).toContain('P1: 0')
      expect(wrapper.text()).toContain('P2: 0')
      expect(wrapper.text()).toContain('P3: 0')
      expect(wrapper.text()).toContain('P4: 0')
      expect(wrapper.text()).toContain('P5: 0')
      expect(wrapper.text()).toContain('P6: 0')
      expect(wrapper.text()).toContain('P7: 0')
      expect(wrapper.text()).toContain('P8: 0')
    })

    it.todo('renders the sum of the "low number" player scores')
    it.todo('renders the sum of the "high number" player scores')
  })
})

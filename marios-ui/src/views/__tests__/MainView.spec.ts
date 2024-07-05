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

  it('does not display a success message until the "Submit Scores" button is clicked', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    await input.setValue('123')
    expect(wrapper.text()).not.toContain('Scores Submitted!')
  })

  it.todo('"Scores submitted" message disappears after 3 seconds', async () => {})

  // TODO
  it.todo('displays an error message when scores are not submitted', async () => {})
})

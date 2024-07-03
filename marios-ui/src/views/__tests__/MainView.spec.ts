import { beforeEach, describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import MainView from '../MainView.vue'
import InputText from '@/components/InputText.vue'

describe('Test Marios UI', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(MainView)
  })

  it('displays a score input of type text', async () => {
    expect(wrapper.text()).toContain('Enter scores:')
  })

  // MAYBE THIS IS A BETTER TEST?
  it('submits a list of scores', async () => {
    const input = wrapper.findComponent(InputText)
    input.setValue(1)

    // todo: trigger submit button
  })
})

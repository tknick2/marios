import { beforeEach, afterEach, describe, it, expect } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import MainView from '../MainView.vue'

describe('Test Marios UI', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(MainView)
  })

  afterEach(() => {
    window.localStorage.clear()
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

  it.each([
    ['12345678', 26],
    ['87654321', 10],
    ['81726354', 16],
    ['74652138', 16],
    ['27816345', 18]
  ])(
    'displays the sum of the "high number" scores when there are 8 players',
    async (input, expectedSum) => {
      const inputElement = wrapper.find('[data-test="input-scores"]')
      const submitButton = wrapper.find('[data-test="submit-scores"]')
      const highNumberScore = wrapper.find('[data-test="high-numbers"]')

      await inputElement.setValue(input)
      await submitButton.trigger('click')

      expect(highNumberScore.text()).toContain(expectedSum.toString())
    }
  )

  it.each([
    ['12345678', 10],
    ['87654321', 26],
    ['81726354', 20],
    ['74652138', 20],
    ['27816345', 18]
  ])(
    'displays the sum of the "low number" scores when there are 8 players',
    async (input, expectedSum) => {
      const inputElement = wrapper.find('[data-test="input-scores"]')
      const submitButton = wrapper.find('[data-test="submit-scores"]')
      const lowNumberScore = wrapper.find('[data-test="low-numbers"]')

      await inputElement.setValue(input)
      await submitButton.trigger('click')

      expect(lowNumberScore.text()).toContain(expectedSum.toString())
    }
  )

  it('clicking the "clear scores" button clears the scores', async () => {
    const input = wrapper.find('[data-test="input-scores"]')
    const submit = wrapper.find('[data-test="submit-scores"]')

    // submit scores for first race
    await input.setValue('12345678')
    await submit.trigger('click')

    expect(wrapper.text()).toContain('P1 Total: 1 Last Race: 1')

    const clearButton = wrapper.find('[data-test="clear-scores"]')
    await clearButton.trigger('click')
    expect(wrapper.text()).toContain('P1 Total: 0 Last Race: 0')
  })

  it.todo(
    'displas the sum of the "high number" scores when there are less than 8 players',
    async () => {}
  )

  it.todo(
    'scores are backed up to local storage so that the page can be refreshed and they will not be lost',
    async () => {}
  )

  it.todo('displays an error message when more than 8 scores are submitted', async () => {})

  it.todo('displays an error message when scores are not submitted', async () => {})

  describe('Player List Component', () => {
    it('renders a list of players with scores of 0 at the start', async () => {
      expect(wrapper.text()).toContain('P1 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P2 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P3 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P4 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P5 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P6 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P7 Total: 0 Last Race: 0')
      expect(wrapper.text()).toContain('P8 Total: 0 Last Race: 0')
    })

    it('renders the total score for each player when scores are submitted', async () => {
      const input = wrapper.find('[data-test="input-scores"]')
      const submit = wrapper.find('[data-test="submit-scores"]')

      // submit scores for first race
      await input.setValue('12345678')
      await submit.trigger('click')

      // submit scores for second race
      await input.setValue('87654321')
      await submit.trigger('click')

      expect(wrapper.text()).toContain('P1 Total: 9')
      expect(wrapper.text()).toContain('P2 Total: 9')
      expect(wrapper.text()).toContain('P3 Total: 9')
      expect(wrapper.text()).toContain('P4 Total: 9')
      expect(wrapper.text()).toContain('P5 Total: 9')
      expect(wrapper.text()).toContain('P6 Total: 9')
      expect(wrapper.text()).toContain('P7 Total: 9')
      expect(wrapper.text()).toContain('P8 Total: 9')
    })

    it('renders last race scores for each player when scores are submitted', async () => {
      const input = wrapper.find('[data-test="input-scores"]')
      const submit = wrapper.find('[data-test="submit-scores"]')

      // submit scores for first race
      await input.setValue('12345678')
      await submit.trigger('click')

      await input.setValue('81726354')
      await submit.trigger('click')

      expect(wrapper.text()).toContain('Last Race: 8')
      expect(wrapper.text()).toContain('Last Race: 1')
      expect(wrapper.text()).toContain('Last Race: 7')
      expect(wrapper.text()).toContain('Last Race: 2')
      expect(wrapper.text()).toContain('Last Race: 6')
      expect(wrapper.text()).toContain('Last Race: 3')
      expect(wrapper.text()).toContain('Last Race: 5')
      expect(wrapper.text()).toContain('Last Race: 4')
    })

    it.todo(
      'renders the sum of the scores for the entire round when the scores are submitted',
      async () => {}
    )

    // #V2
    it.todo(
      'renders the player list in ascending order of total score when scores are submitted',
      async () => {}
    )

    it.todo('displays the correct number of players based on the "number of players" input')
  })
})

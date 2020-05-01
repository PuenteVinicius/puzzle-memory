import { shallowMount } from '@vue/test-utils';
import Board from '../board.vue';
import CardFactory from '../../components/card/card.factory';
import CardsJSON from '../../../public/cards.json';
import Constant from '../../constants';

const $router = {
  currentRoute: {
    params: {
      userName: ''
    }
  }
}

const wrapper = shallowMount(Board, {
  mocks: {
    $router,
    Constant
  }
})
CardFactory.compareCards = jest.fn()

describe('Board', () => {
  it('renders the correct message', () => {
    expect(wrapper.text()).toBe('PuzzleMemory')
  })

  it('verify if is a vue Component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
import { shallowMount } from '@vue/test-utils';
import Board from '../board.vue';
import CardFactory from '../../components/card/card.factory';
import { Constants } from '../../constants';
import Cards from '../../../public/cards.json';

const $router = {
  currentRoute: {
    params: {
      userName: ''
    }
  }
}

const wrapper: any = shallowMount(Board, {
  mocks: {
    $router,
    Constants
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

  describe('[updateBoard] - tests when the correct function is called', () => {
    it('when selectedcards.lenght === Constants.CARDS_PEER_TRIE', () => {
      const spy = jest.spyOn(wrapper.vm, "makeAtrie");
      wrapper.vm.updateBoard(Cards[0]);
      expect(spy).toHaveBeenCalledTimes(0);

    })

    it('when selectedcards.lenght !== Constants.CARDS_PEER_TRIE', () => {
      const spy = jest.spyOn(wrapper.vm, "makeAtrie");
      wrapper.vm.updateBoard(Cards[0]);
      wrapper.vm.updateBoard(Cards[1]);
      expect(spy).toHaveBeenCalled();
    })
  });
})
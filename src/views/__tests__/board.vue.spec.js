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

const selectedCard = {
  id: 3,
  code: "HTML",
  name: "HTML",
  svgPath: "https://svgshare.com/i/J3G.svg",
  selected: false
}

const selectedCards = [
  {
    id: 3,
    code: "HTML",
    name: "HTML",
    svgPath: "https://svgshare.com/i/J3G.svg",
    selected: false
  }, 
  {
    id: 4,
    code: "CSS",
    name: "CSS",
    svgPath: "https://svgshare.com/i/J2P.svg",
    selected: false
  }
]

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

  describe('created', () => {
  
  })

  describe('updateBoard', () => {

  })

  describe('makeAtrie', () => {

  })

  describe('endGame', () => {
  
  })


  describe('saveUser', () => {
  
  })

  describe('startGame', () => {
  
  })

  describe('setCards', () => {
  
  })

  describe('showCards', () => {
  
  })

  describe('setRankingList', () => {
  
  })
})
import { shallowMount, mount } from '@vue/test-utils';
import Card from '../card.vue';
import Cards from '../../../../public/cards.json'

const wrapper: any = shallowMount(Card, {
  propsData: {
    card: Cards[0]
  }
})

describe('Card', () => {

it('verify if is a vue Component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('[onCardClick] - Should call sendCards method', () => {
    it('should call sendCards Method ', () => {
      const spy = jest.spyOn(wrapper.vm, 'sendCards')
      wrapper.vm.onCardClick();
      expect(spy).toHaveBeenCalled()
    });

    describe('should deny selected state', async () => {
      it('when card selected state is true', () => {
        
        wrapper.vm.onCardClick();

      });
      it('when card selected state is false', () => {
        wrapper.vm.onCardClick();

      });
    });

    
  });

  describe('[sendCards] - Should call sendCards method', () => {
    
  });

  describe('[cardClass] - Should call sendCards method', () => {
    
  });

  describe('Should return correct HTML text ', () => {
    
  });
})
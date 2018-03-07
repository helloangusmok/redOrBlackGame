import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    deck: [
      {
        card: 'ace-of-clubs',
        picture: "../src/assets/card-images/ace_of_clubs.svg",
        id: 0,
        color: 'black',
        rank: 1
      },
      {
        card: '2-of-clubs',
        picture: "../src/assets/card-images/2_of_clubs.svg",
        id: 1,
        color: 'black',
        rank: 2
      },
      {
        card: '3-of-clubs',
        picture: "../src/assets/card-images/3_of_clubs.svg",
        id: 2,
        color: 'black',
        rank: 3
      },
      {
        card: '4-of-clubs',
        picture: "../src/assets/card-images/4_of_clubs.svg",
        id: 3,
        color: 'black',
        rank: 4
      },
      {
        card: '5-of-clubs',
        picture: "../src/assets/card-images/5_of_clubs.svg",
        id: 4,
        color: 'black',
        rank: 5
      },
      {
        card: '6-of-clubs',
        picture: "../src/assets/card-images/6_of_clubs.svg",
        id: 5,
        color: 'black',
        rank: 6
      },
      {
        card: '7-of-clubs',
        picture: "../src/assets/card-images/7_of_clubs.svg",
        id: 6,
        color: 'black',
        rank: 7
      },
      {
        card: '8-of-clubs',
        picture: "../src/assets/card-images/8_of_clubs.svg",
        id: 7,
        color: 'black',
        rank: 8
      },
      {
        card: '9-of-clubs',
        picture: "../src/assets/card-images/9_of_clubs.svg",
        id: 8,
        color: 'black',
        rank: 9
      },
      {
        card: '10-of-clubs',
        picture: "../src/assets/card-images/10_of_clubs.svg",
        id: 9,
        color: 'black',
        rank: 10
      },
      {
        card: 'jack-of-clubs',
        picture: "../src/assets/card-images/jack_of_clubs2.svg",
        id: 10,
        color: 'black',
        rank: 11
      },
      {
        card: 'queen-of-clubs',
        picture: "../src/assets/card-images/queen_of_clubs2.svg",
        id: 11,
        color: 'black',
        rank: 12
      },
      {
        card: 'king-of-clubs',
        picture: "../src/assets/card-images/king_of_clubs2.svg",
        id: 12,
        color: 'black',
        rank: 13
      },
      {
        card: 'ace-of-spades',
        picture: "../src/assets/card-images/ace_of_spades.svg",
        id: 13,
        color: 'black',
        rank: 1
      },
      {
        card: '2-of-spades',
        picture: "../src/assets/card-images/2_of_spades.svg",
        id: 14,
        color: 'black',
        rank: 2
      },
      {
        card: '3-of-spades',
        picture: "../src/assets/card-images/3_of_spades.svg",
        id: 15,
        color: 'black',
        rank: 3
      },
      {
        card: '4-of-spades',
        picture: "../src/assets/card-images/4_of_spades.svg",
        id: 16,
        color: 'black',
        rank: 4
      },
      {
        card: '5-of-spades',
        picture: "../src/assets/card-images/5_of_spades.svg",
        id: 17,
        color: 'black',
        rank: 5
      },
      {
        card: '6-of-spades',
        picture: "../src/assets/card-images/6_of_spades.svg",
        id: 18,
        color: 'black',
        rank: 6
      },
      {
        card: '7-of-spades',
        picture: "../src/assets/card-images/7_of_spades.svg",
        id: 19,
        color: 'black',
        rank: 7
      },
      {
        card: '8-of-spades',
        picture: "../src/assets/card-images/8_of_spades.svg",
        id: 20,
        color: 'black',
        rank: 8
      },
      {
        card: '9-of-spades',
        picture: "../src/assets/card-images/9_of_spades.svg",
        id: 21,
        color: 'black',
        rank: 9
      },
      {
        card: '10-of-spades',
        picture: "../src/assets/card-images/10_of_spades.svg",
        id: 22,
        color: 'black',
        rank: 10
      },
      {
        card: 'jack-of-spades',
        picture: "../src/assets/card-images/jack_of_spades2.svg",
        id: 23,
        color: 'black',
        rank: 11
      },
      {
        card: 'queen-of-spades',
        picture: "../src/assets/card-images/queen_of_spades2.svg",
        id: 24,
        color: 'black',
        rank: 12
      },
      {
        card: 'king-of-spades',
        picture: "../src/assets/card-images/king_of_spades2.svg",
        id: 25,
        color: 'black',
        rank: 13
      },
      {
        card: 'ace-of-hearts',
        picture: "../src/assets/card-images/ace_of_hearts.svg",
        id: 26,
        color: 'red',
        rank: 1
      },
      {
        card: '2-of-hearts',
        picture: "../src/assets/card-images/2_of_hearts.svg",
        id: 27,
        color: 'red',
        rank: 2
      },
      {
        card: '3-of-hearts',
        picture: "../src/assets/card-images/3_of_hearts.svg",
        id: 28,
        color: 'red',
        rank: 3
      },
      {
        card: '4-of-hearts',
        picture: "../src/assets/card-images/4_of_hearts.svg",
        id: 29,
        color: 'red',
        rank: 4
      },
      {
        card: '5-of-hearts',
        picture: "../src/assets/card-images/5_of_hearts.svg",
        id: 30,
        color: 'red',
        rank: 5
      },
      {
        card: '6-of-hearts',
        picture: "../src/assets/card-images/6_of_hearts.svg",
        id: 31,
        color: 'red',
        rank: 6
      },
      {
        card: '7-of-hearts',
        picture: "../src/assets/card-images/7_of_hearts.svg",
        id: 32,
        color: 'red',
        rank: 7
      },
      {
        card: '8-of-hearts',
        picture: "../src/assets/card-images/8_of_hearts.svg",
        id: 33,
        color: 'red',
        rank: 8
      },
      {
        card: '9-of-hearts',
        picture: "../src/assets/card-images/9_of_hearts.svg",
        id: 34,
        color: 'red',
        rank: 9
      },
      {
        card: '10-of-hearts',
        picture: "../src/assets/card-images/10_of_hearts.svg",
        id: 35,
        color: 'red',
        rank: 10
      },
      {
        card: 'jack-of-hearts',
        picture: "../src/assets/card-images/jack_of_hearts2.svg",
        id: 36,
        color: 'red',
        rank: 11
      },
      {
        card: 'queen-of-hearts',
        picture: "../src/assets/card-images/queen_of_hearts2.svg",
        id: 37,
        color: 'red',
        rank: 12
      },
      {
        card: 'king-of-hearts',
        picture: "../src/assets/card-images/king_of_hearts2.svg",
        id: 38,
        color: 'red',
        rank: 13
      },
      {
        card: 'ace-of-diamonds',
        picture: "../src/assets/card-images/ace_of_diamonds.svg",
        id: 39,
        color: 'red',
        rank: 1
      },
      {
        card: '2-of-diamonds',
        picture: "../src/assets/card-images/2_of_diamonds.svg",
        id: 40,
        color: 'red',
        rank: 2
      },
      {
        card: '3-of-diamonds',
        picture: "../src/assets/card-images/3_of_diamonds.svg",
        id: 41,
        color: 'red',
        rank: 3
      },
      {
        card: '4-of-diamonds',
        picture: "../src/assets/card-images/4_of_diamonds.svg",
        id: 42,
        color: 'red',
        rank: 4
      },
      {
        card: '5-of-diamonds',
        picture: "../src/assets/card-images/5_of_diamonds.svg",
        id: 43,
        color: 'red',
        rank: 5
      },
      {
        card: '6-of-diamonds',
        picture: "../src/assets/card-images/6_of_diamonds.svg",
        id: 44,
        color: 'red',
        rank: 6
      },
      {
        card: '7-of-diamonds',
        picture: "../src/assets/card-images/7_of_diamonds.svg",
        id: 45,
        color: 'red',
        rank: 7
      },
      {
        card: '8-of-diamonds',
        picture: "../src/assets/card-images/8_of_diamonds.svg",
        id: 46,
        color: 'red',
        rank: 8
      },
      {
        card: '9-of-diamonds',
        picture: "../src/assets/card-images/9_of_diamonds.svg",
        id: 47,
        color: 'red',
        rank: 9
      },
      {
        card: '10-of-diamonds',
        picture: "../src/assets/card-images/10_of_diamonds.svg",
        id: 48,
        color: 'red',
        rank: 10
      },
      {
        card: 'jack-of-diamonds',
        picture: "../src/assets/card-images/jack_of_diamonds2.svg",
        id: 49,
        color: 'red',
        rank: 11
      },
      {
        card: 'queen-of-diamonds',
        picture: "../src/assets/card-images/queen_of_diamonds2.svg",
        id: 50,
        color: 'red',
        rank: 12
      },
      {
        card: 'king-of-diamonds',
        picture: "../src/assets/card-images/king_of_diamonds2.svg",
        id: 51,
        color: 'red',
        rank: 13
      }
    ],
    shuffledDeck: [],
    triedNumbers: []
  },
  methods: {
    shuffleDeck(){
      this.shuffledDeck = [];
      this.triedNumbers = [];
      while(this.triedNumbers.length < 52){
        let number = Math.floor(Math.random() * Math.floor(52));
        if(!(this.triedNumbers.includes(number))){
          this.triedNumbers.push(number);
        }
      }
      for(let i = 0; i < this.triedNumbers.length; i++){
        this.shuffledDeck.push(this.deck[this.triedNumbers[i]]);
      }
      this.$emit('deckWasShuffled', this.shuffledDeck);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

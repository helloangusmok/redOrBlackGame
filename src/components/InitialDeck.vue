<template>
  <div class="">
    <h1>Solitaire</h1>
    <button @click="shuffleDeck">Shuffle</button>
    <template v-for="item in shuffledDeck">
      <img :src="item.picture">
    </template>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        deck: [
          {
            card: 'ace-of-clubs',
            picture: "../src/assets/card-images/ace_of_clubs.svg",
            id: 0
          },
          {
            card: '2-of-clubs',
            picture: "../src/assets/card-images/2_of_clubs.svg",
            id: 1
          },
          {
            card: '3-of-clubs',
            picture: "../src/assets/card-images/3_of_clubs.svg",
            id: 2
          },
          {
            card: '4-of-clubs',
            picture: "../src/assets/card-images/4_of_clubs.svg",
            id: 3
          },
          {
            card: '5-of-clubs',
            picture: "../src/assets/card-images/5_of_clubs.svg",
            id: 4
          },
          {
            card: '6-of-clubs',
            picture: "../src/assets/card-images/6_of_clubs.svg",
            id: 5
          },
          {
            card: '7-of-clubs',
            picture: "../src/assets/card-images/7_of_clubs.svg",
            id: 6
          },
          {
            card: '8-of-clubs',
            picture: "../src/assets/card-images/8_of_clubs.svg",
            id: 7
          },
          {
            card: '9-of-clubs',
            picture: "../src/assets/card-images/9_of_clubs.svg",
            id: 8
          },
          {
            card: '10-of-clubs',
            picture: "../src/assets/card-images/10_of_clubs.svg",
            id: 9
          },
          {
            card: 'jack-of-clubs',
            picture: "../src/assets/card-images/jack_of_clubs2.svg",
            id: 10
          },
          {
            card: 'queen-of-clubs',
            picture: "../src/assets/card-images/queen_of_clubs2.svg",
            id: 11
          },
          {
            card: 'king-of-clubs',
            picture: "../src/assets/card-images/king_of_clubs2.svg",
            id: 12
          },
          {
            card: 'ace-of-spades',
            picture: "../src/assets/card-images/ace_of_spades.svg",
            id: 13
          },
          {
            card: '2-of-spades',
            picture: "../src/assets/card-images/2_of_spades.svg",
            id: 14
          },
          {
            card: '3-of-spades',
            picture: "../src/assets/card-images/3_of_spades.svg",
            id: 15
          },
          {
            card: '4-of-spades',
            picture: "../src/assets/card-images/4_of_spades.svg",
            id: 16
          },
          {
            card: '5-of-spades',
            picture: "../src/assets/card-images/5_of_spades.svg",
            id: 17
          },
          {
            card: '6-of-spades',
            picture: "../src/assets/card-images/6_of_spades.svg",
            id: 18
          },
          {
            card: '7-of-spades',
            picture: "../src/assets/card-images/7_of_spades.svg",
            id: 19
          },
          {
            card: '8-of-spades',
            picture: "../src/assets/card-images/8_of_spades.svg",
            id: 20
          },
          {
            card: '9-of-spades',
            picture: "../src/assets/card-images/9_of_spades.svg",
            id: 21
          },
          {
            card: '10-of-spades',
            picture: "../src/assets/card-images/10_of_spades.svg",
            id: 22
          },
          {
            card: 'jack-of-spades',
            picture: "../src/assets/card-images/jack_of_spades2.svg",
            id: 23
          },
          {
            card: 'queen-of-spades',
            picture: "../src/assets/card-images/queen_of_spades2.svg",
            id: 24
          },
          {
            card: 'king-of-spades',
            picture: "../src/assets/card-images/king_of_spades2.svg",
            id: 25
          },
          {
            card: 'ace-of-hearts',
            picture: "../src/assets/card-images/ace_of_hearts.svg",
            id: 26
          },
          {
            card: '2-of-hearts',
            picture: "../src/assets/card-images/2_of_hearts.svg",
            id: 27
          },
          {
            card: '3-of-hearts',
            picture: "../src/assets/card-images/3_of_hearts.svg",
            id: 28
          },
          {
            card: '4-of-hearts',
            picture: "../src/assets/card-images/4_of_hearts.svg",
            id: 29
          },
          {
            card: '5-of-hearts',
            picture: "../src/assets/card-images/5_of_hearts.svg",
            id: 30
          },
          {
            card: '6-of-hearts',
            picture: "../src/assets/card-images/6_of_hearts.svg",
            id: 31
          },
          {
            card: '7-of-hearts',
            picture: "../src/assets/card-images/7_of_hearts.svg",
            id: 32
          },
          {
            card: '8-of-hearts',
            picture: "../src/assets/card-images/8_of_hearts.svg",
            id: 33
          },
          {
            card: '9-of-hearts',
            picture: "../src/assets/card-images/9_of_hearts.svg",
            id: 34
          },
          {
            card: '10-of-hearts',
            picture: "../src/assets/card-images/10_of_hearts.svg",
            id: 35
          },
          {
            card: 'jack-of-hearts',
            picture: "../src/assets/card-images/jack_of_hearts2.svg",
            id: 36
          },
          {
            card: 'queen-of-hearts',
            picture: "../src/assets/card-images/queen_of_hearts2.svg",
            id: 37
          },
          {
            card: 'king-of-hearts',
            picture: "../src/assets/card-images/king_of_hearts2.svg",
            id: 38
          },
          {
            card: 'ace-of-diamonds',
            picture: "../src/assets/card-images/ace_of_diamonds.svg",
            id: 39
          },
          {
            card: '2-of-diamonds',
            picture: "../src/assets/card-images/2_of_diamonds.svg",
            id: 40
          },
          {
            card: '3-of-diamonds',
            picture: "../src/assets/card-images/3_of_diamonds.svg",
            id: 41
          },
          {
            card: '4-of-diamonds',
            picture: "../src/assets/card-images/4_of_diamonds.svg",
            id: 42
          },
          {
            card: '5-of-diamonds',
            picture: "../src/assets/card-images/5_of_diamonds.svg",
            id: 43
          },
          {
            card: '6-of-diamonds',
            picture: "../src/assets/card-images/6_of_diamonds.svg",
            id: 44
          },
          {
            card: '7-of-diamonds',
            picture: "../src/assets/card-images/7_of_diamonds.svg",
            id: 45
          },
          {
            card: '8-of-diamonds',
            picture: "../src/assets/card-images/8_of_diamonds.svg",
            id: 46
          },
          {
            card: '9-of-diamonds',
            picture: "../src/assets/card-images/9_of_diamonds.svg",
            id: 47
          },
          {
            card: '10-of-diamonds',
            picture: "../src/assets/card-images/10_of_diamonds.svg",
            id: 48
          },
          {
            card: 'jack-of-diamonds',
            picture: "../src/assets/card-images/jack_of_diamonds2.svg",
            id: 49
          },
          {
            card: 'queen-of-diamonds',
            picture: "../src/assets/card-images/queen_of_diamonds2.svg",
            id: 50
          },
          {
            card: 'king-of-diamonds',
            picture: "../src/assets/card-images/king_of_diamonds2.svg",
            id: 51
          }
        ],
        shuffledDeck: [],
        triedNumbers: []
      };
    },
    methods: {
      shuffleDeck(){
        while(this.triedNumbers.length < 52){
          let number = Math.floor(Math.random() * Math.floor(52));
          if(!(this.triedNumbers.includes(number))){
            this.triedNumbers.push(number);
          }
        }
        for(let i = 0; i < this.triedNumbers.length; i++){
          this.shuffledDeck.push(this.deck[this.triedNumbers[i]]);
        }
      }
    }
  }
</script>

<style scoped>
  img {
    height: auto;
    width: 6rem;
  }

  button {
    display: block;
    margin-bottom: 20px;
  }
</style>

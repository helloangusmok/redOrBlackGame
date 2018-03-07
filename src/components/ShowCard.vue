<template>
  <div class="container">
    <!-- BEGIN LANDING PAGE -->
    <div class="full-page" v-if="!isShown">
        <h1>RED</h1>
        <h2>OR</h2>
        <h1>BLACK</h1>
        <button @click="startGame" class="btn btn-danger big-button">START GAME</button>
    </div>
    <!-- END LANDING PAGE -->
    <!-- BEGIN GAME -->
    <div class="main-game" :class="{show: !isShown}">
      <!-- MENU -->
      <div class="menu-icon" @click="width = 100 + '%'">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <div class="menu" :style="{width: width}">
        <div class="close-menu" @click="width = 0">
          <i class="fas fa-plus fa-2x" data-fa-transform="rotate-45"></i>
        </div>
        <div class="rules">
          <h1 class="text-center">- RULES -</h1>
          <p class="text-center">This game is best played with newly opened or recently topped drinks.</p>
          <p class="text-center">Begin by choosing an initial Card Master and a first Player. The Card Master asks the questions (i.e. "Red or black? Higher or Lower? In between or outside?") and inputs the answers. The Player answers the questions and drinks copiously. If the Player makes 3 correct guesses in a row, they become the new Card Master and may choose another person to be the Player.</p>
          <h3 class="text-center">- RED OR BLACK -</h3>
          <p class="text-center">The Player begins by guessing the colour of the first card. If the Player is unsuccessful, they must take a drink and guess again. If the Players guess is successful, they move on to the next round. </p>
          <h3 class="text-center">- HIGHER OR LOWER -</h3>
          <p>This round consists of guessing whether the next card will be higher, lower or the same as the previous card. For this game, Ace is the lowest card and King is the highest. If the Player is unsuccessful, they must take a drink and begin from the first round again. If the Player guesses higher or lower but the card is the same as the previous card, they must finish their drink and begin from the first round again. If the Player guesses correctly, they move on to the final round.</p>
          <h3 class="text-center">- IN BETWEEN OR OUTSIDE -</h3>
          <p class="text-center">In this round, the Player must guess whether the next cards number will be in between or outside the numbers of the previous 2 cards. As before, if the Player is unsuccessful they must take a drink and begin from the first round again. If the Player guesses in between or outside but the card is of the same number as one of the previous cards, they must finish their drink and begin from the first round again. If the Player is successful, they become the new Card Master and may choose another person to be the Player.</p>
          <h3 class="text-center">- ADDITIONAL INFO -</h3>
          <p class="text-center">If the player manages to go through all the cards in a deck before making it through the 3 rounds successfully, the deck counter increase and the deck will automatically be shuffled. The player must finish their drink and continue on until they make their 3 correct guesses.</p>
          <p class="text-center">Happy drinking!</p>
        </div>
      </div>
      <!-- END MENU -->
      <!-- BEGIN CARD ROW FOR BIG SCREENS -->
      <div class="row card-row big-screens">
        <div class="col-md-4 card-one" :class="{correct: stage === 4, wrong: stage === 0}">
          <div class="card-slot" :class="{correct: stage >= 2, wrong: stage === 0}">
            <img :class="{show: !revealOne}" :src="cardsInPlay[0].picture">
          </div>
        </div>
        <div class="col-md-4" :class="{correct: stage === 4, wrong: stage === 0}">
          <div class="card-slot" :class="{correct: stage >= 3, wrong: stage === 0}">
            <img :class="{show: !revealTwo}" :src="cardsInPlay[1].picture" alt="">
          </div>
        </div>
        <div class="col-md-4 card-three" :class="{correct: stage === 4, wrong: stage === 0}">
          <div class="card-slot" :class="{correct: stage === 4, wrong: stage === 0}">
            <img :class="{show: !revealThree}" :src="cardsInPlay[2].picture" alt="">
          </div>
        </div>
      </div>
      <!-- END CARD ROW FOR BIG SCREENS -->
      <!-- BEGIN STATS ROW FOR BIG SCREENS -->
      <div class="row centered-div big-screens">
        <div class="col-sm-2 centered-div text-center">
        </div>
        <div class="col-sm-2 centered-div text-center text-align-vertical">
          <p><strong>DRINKS: {{ drinks }}</strong></p>
        </div>
        <div class="col-sm-4 centered-div text-center text-align-vertical">
          <h3 class="answer-text" :class="{rightanswer: message === 'correct', wronganswer: message === 'wrong', show: stage === 1}">{{ message }}!</h3>
        </div>
        <div class="col-sm-2 centered-div text-center text-align-vertical">
          <p><strong>CARDS LEFT: {{ cardsLeft }}</strong></p>
          <p><strong>DECK: {{ deck }}</strong></p>
        </div>
        <div class="col-sm-2 centered-div text-center">
        </div>
      </div>
      <!-- END STATS ROW FOR BIG SCREENS -->
      <!-- BEGIN CARD ROW FOR SMALL SCREENS -->
      <div class="card-row centered-div small-screens" :class="{correctbackground: stage === 4, wrongbackground: stage === 0}">
        <div class="card-display">
          <img class="" :class="{show: !revealOne, correct: stage >= 2, wrong: stage === 0}" :src="cardsInPlay[0].picture">
          <img class="" :class="{show: !revealTwo, correct: stage >= 3, wrong: stage === 0}" :src="cardsInPlay[1].picture">
          <img :class="{show: !revealThree, correct: stage === 4, wrong: stage === 0}" :src="cardsInPlay[2].picture">
        </div>
        <div class="centered-div text-center">
          <h3 class="answer-text" :class="{show: stage === 1}">{{ message }}!</h3>
        </div>
      </div>
      <!-- END CARD ROW FOR SMALL SCREENS   -->
      <!-- BEGIN STATS ROW FOR SMALL SCREENS -->
      <div class="text-center centered-div row stat-row">
          <div class="col">
            <h1>{{ drinks }}</h1>
            <p>SIPS</p>
          </div>
          <div class="col">
            <h1>{{ sculls }}</h1>
            <p>SCULLS</p>
          </div>
          <div class="col">
            <h1>{{ cardsLeft }}</h1>
            <p>CARDS</p>
          </div>
          <div class="col">
            <h1>{{ deck }}</h1>
            <p>DECK</p>
          </div>
      </div>
      <!-- END STATS ROW FOR SMALL SCREENS -->
      <!-- BEGIN BUTTONS ROW -->
      <div class="row text-center">
        <div class="col-sm-12 my-3">
          <template>
            <button v-show="stage <= 1" @click="choseRed();" class="btn btn-danger btn-circle" :disabled="disabled">RED</button>
            <button v-show="stage <= 1" @click="choseBlack();" class="btn btn-dark btn-circle" :disabled="disabled">BLACK</button>
          </template>
          <template>
            <button v-show="stage === 2" @click="choseHigher();" class="btn btn-danger btn-circle"><i class="fas fa-long-arrow-alt-up fa-2x"></i></button>
            <button v-show="stage === 2" @click="choseSame();" class="btn btn-primary btn-circle"><i class="fas fa-pause fa-lg" data-fa-transform="rotate-90" style="transform: scale(1, 0.5)"></i></button>
            <button v-show="stage === 2" @click="choseLower();" class="btn btn-dark btn-circle"><i class="fas fa-long-arrow-alt-down fa-2x"></i></button>
          </template>
          <template>
            <button v-show="stage === 3" @click="choseInside();" class="btn btn-danger btn-circle"><i class="fas fa-long-arrow-alt-right fa-2x" style="transform: scaleX(0.8)"></i> <i class="fas fa-long-arrow-alt-left fa-2x" style="transform: scaleX(0.8)"></i></button>
            <button v-show="stage === 3" @click="choseSame();" class="btn btn-primary btn-circle"><i class="fas fa-pause fa-lg" data-fa-transform="rotate-90" style="transform: scale(1, 0.5)"></i></button>
            <button v-show="stage === 3" @click="choseOutside();" class="btn btn-dark btn-circle"><i class="fas fa-long-arrow-alt-left fa-2x" style="transform: scaleX(0.8)"></i><i class="fas fa-long-arrow-alt-right fa-2x" style="transform: scaleX(0.8)"></i></button>
          </template>
            <button v-show="stage === 4" @click="startGame" class="btn btn-success btn-circle play-button">PLAY AGAIN</button>
        </div>
      </div>
      <!-- END BUTTONS ROW -->
    </div>
      <!-- END GAME -->
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    data: function(){
      return {
        revealOne: false,
        revealTwo: false,
        revealThree: false,
        isShown: false,
        shuffledDeck: [],
        cardsInPlay: [],
        counter: 0,
        cardsLeft: 52,
        reveal: false,
        stage: 1,
        message: "noshow",
        drinks: 0,
        sculls: 0,
        deck: 1,
        disabled: true,
        width: '0'
      };
    },
    methods: {
      startGame(){
        this.disabled = true;
        this.counter = 0;
        this.stage = 1;
        this.revealOne = false;
        this.revealTwo = false;
        this.revealThree = false;
        this.isShown = true;
        eventBus.shuffleDeck();
        var vm = this;
        setTimeout(function(){
          vm.cardsInPlay = [];
          vm.cardsInPlay.push(vm.shuffledDeck[0], vm.shuffledDeck[1], vm.shuffledDeck[2])
          vm.disabled = false;
        }, 200);
      },
      newCards(){
          this.cardsInPlay = [];
          this.cardsInPlay.push(this.shuffledDeck[this.counter], this.shuffledDeck[this.counter+1], this.shuffledDeck[this.counter+2]);
      },
      wrongAnswer(){
        this.stage = 0;
        this.message = "wrong";
        this.drinks++;
        this.disabled = true;
        var vm = this;
        setTimeout(function(){
          vm.stage = 1
          vm.revealOne = false;
          vm.revealTwo = false;
          vm.revealThree = false;
          vm.message = "";
          var vm1 = vm;
          setTimeout(function(){
            vm1.newCards();
            vm1.disabled = false
          }, 200);
        }, 1800);
      },
      choseRed(){
        this.counter++;
        this.cardsLeft--;
        this.revealOne = true;
        if(this.cardsInPlay[0].color === "red"){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseBlack(){
        this.counter++;
        this.cardsLeft--;
        this.revealOne = true;
        if(this.cardsInPlay[0].color === "black"){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseHigher(){
        this.counter++;
        this.cardsLeft--;
        this.revealTwo = true;
        if(this.cardsInPlay[1].rank > this.cardsInPlay[0].rank){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseLower(){
        this.counter++;
        this.cardsLeft--;
        this.revealTwo = true;
        if(this.cardsInPlay[1].rank < this.cardsInPlay[0].rank){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseInside(){
        this.counter++;
        this.cardsLeft--;
        this.revealThree = true;
        var highCard = Math.max(this.cardsInPlay[0].rank, this.cardsInPlay[1].rank);
        var lowCard = Math.min(this.cardsInPlay[0].rank, this.cardsInPlay[1].rank);
        if(this.cardsInPlay[2].rank > lowCard && this.cardsInPlay[2].rank < highCard){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseOutside(){
        this.counter++;
        this.cardsLeft--;
        this.revealThree = true;
        var highCard = Math.max(this.cardsInPlay[0].rank, this.cardsInPlay[1].rank);
        var lowCard = Math.min(this.cardsInPlay[0].rank, this.cardsInPlay[1].rank);
        if(this.cardsInPlay[2].rank < lowCard || this.cardsInPlay[2].rank > highCard){
          this.stage++;
          this.message = "correct";
        } else {
          this.wrongAnswer();
        }
      },
      choseSame(){
        this.counter++;
        this.cardsLeft--;
        if(this.stage === 2){
          this.revealTwo = true;
          if(this.cardsInPlay[1].rank === this.cardsInPlay[0].rank){
            this.stage++;
            this.message = "correct";
          } else {
            this.wrongAnswer();
            this.sculls++;
          }
        } else if(this.stage === 3){
          this.revealThree = true;
          if(this.cardsInPlay[2].rank === this.cardsInPlay[1].rank){
            this.stage++;
            this.message = "correct";
          } else {
            this.wrongAnswer();
            this.sculls++;
          }
        }
      }
    },
    created(){
      eventBus.$on('deckWasShuffled', (shuffledDeck) => {
        this.shuffledDeck = shuffledDeck;
      });
      eventBus.shuffleDeck();
      this.cardsInPlay.push(this.shuffledDeck[0], this.shuffledDeck[1], this.shuffledDeck[2])
    }
  }
</script>

<style scoped>
  .menu-icon {
    position: absolute;
    top: 1.3rem;
    left: 1.3rem;
    color: #343a40
  }

  .close-menu {
    position: absolute;
    top: 1.3rem;
    right: 1.3rem;
    z-index: 99;
  }

  .rules {
    margin: 3rem auto;
    width: 80%;
    text-transform: uppercase;
  }

  .main-game {
    transition: 0.4s;
  }

  .show {
    visibility: hidden;
    opacity: 0;
  }

  button {
    border-radius: 6px;
    box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.30);
    border: none;
    font-weight: 600;
  }

  .btn-circle {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  .btn-danger {
    background: rgb(175,0,0);
    border: none;
  }

  .play-button {
    font-size: 1rem;
    width: 7rem;
    height: 7rem;
  }

  img {
    width: 90%;
    padding: 0.8rem 0rem 0.8rem 0rem;
    display: block;
    margin: 0 auto;
  }

  .card-slot {
    background-color: #3d3d3d;
    border-radius: 11px;
  }

  .centered-div {
    margin: 0 auto;
  }

  .vertical-centered-div {
    margin: auto 5px;
  }

  .full-page {
    height: 20vh;
    position: absolute;
    margin: 22vh auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  .big-button {
    font-size: 2rem;
    background: rgb(175,0,0); /* Old browsers */
    background: -moz-linear-gradient(left, rgba(175,0,0,1) 0%, rgba(119,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(175,0,0,1) 0%,rgba(119,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(175,0,0,1) 0%,rgba(119,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#af0000', endColorstr='#770000',GradientType=1 ); /* IE6-9 */
    border: none;
  }

  .correct {
    background-color: #008c1d;
  }

  .wrong {
    background-color: #d9534f;
  }

  .card-one {
    border-radius: 11px 0px 0px 11px;
  }

  .card-three {
    border-radius: 0px 11px 11px 0px;
  }

  .card-row {
    width: 75%;
    margin: 0 auto;
  }

  .showMenu {
    width: 100%;
    overflow: hidden;
  }

  .menu {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.94);
    color: white;
    left: 0;
    top: 0;
    height: 100%;
    transition: 0.1s;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .menu-items {
    margin: 1rem;
  }

  .rightanswer {
    color: #009b20;
  }

  .wronganswer {
    color: #dc3545;
  }

  .answer-text {
    font-size: 3rem;
    text-transform: uppercase;
    padding-bottom: 1rem;
    color: white;
  }

  .text-align-vertical {
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
  }

  .btn-success {
    background-color: rgb(0, 155, 32);
  }

  @media (max-width: 992px) {
    button {
      font-size: 0.8rem;
      margin: 0.2rem;
    }

    .big-screens {
      display: none;
    }

    .card-row img {
      display: inline;
      width: 54%;
      margin-right: -33%;
      padding: 0;
      border-radius: 11px;
      transition: 0.2s;
    }

    .card-row {
      background-color: rgba(52, 58, 64, 0.6);
      width: 100%;
      border-radius: 11px;
      margin: 4.7rem 0 1rem 0;
    }

    .card-display {
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0rem 1rem 0rem;
    }

    .correct {
      box-shadow: 4px 4px 0px 0px #007718;
    }

    .wrong {
      box-shadow: 4px 4px 0px 0px #7a0300;
    }

    .correctbackground {
      background-color: rgb(0, 155, 32);
    }

    .wrongbackground {
      background-color: rgb(175,0,0);
    }

    .small-screens p {
      margin: 0.4rem;
    }

    .stat-row {
      background-color: rgba(52, 58, 64, 0.6);
      border-radius: 11px;
      padding-top: 0.5rem;
      color: white;
    }

    .stat-box {
      width: 20%;
      height: auto;
    }
  }

  @media (min-width: 992px) {
    .small-screens {
      display: none;
    }

    .main-game {
      margin-top: 2rem;
    }
  }
</style>

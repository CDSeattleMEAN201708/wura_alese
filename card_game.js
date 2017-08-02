function Card(suit, rank, value) {
  this.suit = suit
  this.rank = rank
  this.value = value
}

function Deck() {
  var cards = []
  this.length = cards.length
  var create_deck = (cards) => {
    var ranks = [2,3,4,5,6,7,8,9,10,'Ace', 'Jack', 'Queen', 'King']
    var suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
    var count = 1
    for (var j = 0; j < suits.length; j++) {
      for (var i = 0; i < ranks.length; i++) {
        if (ranks[i] == 'A') {
          count = 11
          cards.push(new Card(suits[j], ranks[i], count))
        } else{
          if (ranks[i] < 10) {
            count += 1
            cards.push(new Card(suits[j], ranks[i], count))
          } else{
            count = 10
            cards.push(new Card(suits[j], ranks[i], count))
          }
        }
      }
      count = 1
    }
    this.size = cards.length
  }
  create_deck(cards)

  // this.showCards = () => {
  //   for (var i = 0; i < cards.length; i++) {
  //     console.log(`You have ${cards[i].rank} of ${cards[i].suit} which is worth ${cards[i].value}`);
  //   }
  //   return this
  // }
  this.shuffle = () => {
    for (var i = 0; i < cards.length; i++) {
      var ind = Math.trunc(Math.random()* cards.length)
      var temp = cards[i]
      cards[i] = cards[ind]
      cards[ind] = temp
    }
    return this
  }
  this.deal_card = () => {
    this.size -= 1
    return cards.pop()
  }
  this.reset_deck = () => {
      cards = []
      create_deck(cards)
      console.log(cards);
  }
}



class Player {
  constructor(name, hand) {
    this.name = name
    this.hand = []
    this.size = 0
  }
  get_card(card){
    this.hand.push(card)
    this.size += 1
    return this
  }
  play_one(){
    var first = this.hand[0]
    for (var i = 0; i < this.hand.length - 1; i++) {
      this.hand[i] = this.hand[i + 1]
    }
    this.hand.pop()
    this.size -= 1
    return first
  }
  show_cards(){
    for (var i = 0; i < this.hand.length; i++) {
      console.log(`You have ${this.hand[i].rank} of ${this.hand[i].suit} which is worth ${this.hand[i].value}`);
    }
    return this
  }

}
deck1 = new Deck()
deck1.shuffle()

// deck1.reset_deck()

ply1 = new Player('Ashid')
ply1.get_card(deck1.deal_card()).get_card(deck1.deal_card())
ply1.show_cards()
console.log(ply1.play_one());
console.log(deck1.size);

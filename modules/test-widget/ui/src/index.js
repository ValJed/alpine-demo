import Alpine from 'alpinejs';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
  Alpine.data('test', () => ({
    input: '',
    pokemon: null,
    async search () {
      console.log('this.pokemonName ===> ', this.pokemonName);
      this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`);
    }
  }));
});

Alpine.start();

export default () => {

  apos.util.widgetPlayers.test = {
    selector: '[data-test]',
    player: function (el) {

    }
  };
};

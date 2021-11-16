import Alpine from 'alpinejs';

export default () => {
  window.Alpine = Alpine;

  document.addEventListener('alpine:init', () => {
    Alpine.data('pokedex', () => ({
      name: '',
      failed: false,
      loading: false,
      pokemon: {},
      async search() {
        try {
          this.loading = true
          this.failed = false;

          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`);

          if (res.ok) {
            const data = await res.json();

            this.pokemon = {
              name: data.name,
              img: data.sprites.front_default,
              height: data.height,
              weight: data.weight,
              types: data.types.map((t) => t.type.name),
              items: data.held_items.map((i) => i.name)
            };
          } else {
            this.pokemon = {};
            this.failed = this.name;
          }
        } catch (err) {
          this.pokemon = {};
          this.failed = this.name;
        } finally {
          this.loading = false
        }
      }
    }));

    Alpine.store('darkMode', {
      on: false,

      toggle() {
          this.on = !this.on
      }
  })
  });

  Alpine.start();

  apos.util.widgetPlayers.pokedex = {
    selector: '[data-pokedex]',
    player: function (el) {

    }
  };
};

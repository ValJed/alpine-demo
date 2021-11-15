module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    name: 'pokedex',
    label: 'Pokedex',
    icon: 'text-subject'
  },
  fields: {
    add: {
      name: {
        type: 'string',
        label: 'Name'
      },
      limit: {
        type: 'integer',
        label: 'Limit',
        def: 5
      }
    }
  },
  icons: {
    'text-subject': 'TextSubject'
  }
};

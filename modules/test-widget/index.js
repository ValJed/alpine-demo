module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    name: 'test',
    label: 'Test',
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

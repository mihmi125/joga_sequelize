'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p><p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p><p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquet, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>',
        published: '2020-01-08 15:02:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>',
        published: '2020-04-14 15:02:41',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>',
        published: '2060-05-28 15:02:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
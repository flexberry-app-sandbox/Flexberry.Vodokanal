import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vodokanal-работа', 'Unit | Model | i-i-s-vodokanal-работа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vodokanal-вид-работы',
    'model:i-i-s-vodokanal-задание',
    'model:i-i-s-vodokanal-заявка',
    'model:i-i-s-vodokanal-пункт',
    'model:i-i-s-vodokanal-работа',
    'model:i-i-s-vodokanal-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

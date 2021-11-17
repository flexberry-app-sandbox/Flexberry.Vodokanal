import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vodokanal-вид-работы', 'Unit | Serializer | i-i-s-vodokanal-вид-работы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vodokanal-вид-работы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

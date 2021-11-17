import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  готово: DS.attr('boolean'),
  работа: DS.belongsTo('i-i-s-vodokanal-работа', { inverse: null, async: false }),
  задание: DS.belongsTo('i-i-s-vodokanal-задание', { inverse: 'пункт', async: false })
});

export let ValidationRules = {
  готово: {
    descriptionKey: 'models.i-i-s-vodokanal-пункт.validations.готово.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  работа: {
    descriptionKey: 'models.i-i-s-vodokanal-пункт.validations.работа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  задание: {
    descriptionKey: 'models.i-i-s-vodokanal-пункт.validations.задание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктE', 'i-i-s-vodokanal-пункт', {
    готово: attr('Готово', { index: 0 }),
    работа: belongsTo('i-i-s-vodokanal-работа', 'Работа', {
      план: attr('План', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'план' })
  });
};

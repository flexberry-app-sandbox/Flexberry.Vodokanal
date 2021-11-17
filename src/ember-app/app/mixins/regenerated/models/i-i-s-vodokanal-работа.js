import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  план: DS.attr('number'),
  факт: DS.attr('number'),
  заявка: DS.belongsTo('i-i-s-vodokanal-заявка', { inverse: null, async: false }),
  видРаботы: DS.belongsTo('i-i-s-vodokanal-вид-работы', { inverse: null, async: false })
});

export let ValidationRules = {
  план: {
    descriptionKey: 'models.i-i-s-vodokanal-работа.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  факт: {
    descriptionKey: 'models.i-i-s-vodokanal-работа.validations.факт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-vodokanal-работа.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  видРаботы: {
    descriptionKey: 'models.i-i-s-vodokanal-работа.validations.видРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РаботаE', 'i-i-s-vodokanal-работа', {
    план: attr('План', { index: 0 }),
    факт: attr('Факт', { index: 1 }),
    заявка: belongsTo('i-i-s-vodokanal-заявка', 'Заявка', {
      адрес: attr('Адрес', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'адрес' }),
    видРаботы: belongsTo('i-i-s-vodokanal-вид-работы', 'Вид работы', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('РаботаL', 'i-i-s-vodokanal-работа', {
    план: attr('План', { index: 0 }),
    факт: attr('Факт', { index: 1 }),
    заявка: belongsTo('i-i-s-vodokanal-заявка', 'Адрес', {
      адрес: attr('Адрес', { index: 2 })
    }, { index: -1, hidden: true }),
    видРаботы: belongsTo('i-i-s-vodokanal-вид-работы', 'Название', {
      название: attr('Название', { index: 3 })
    }, { index: -1, hidden: true })
  });
};

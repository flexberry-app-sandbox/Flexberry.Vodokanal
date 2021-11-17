import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  адрес: DS.attr('string')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-vodokanal-заявка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-vodokanal-заявка.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-vodokanal-заявка', {
    дата: attr('Дата', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-vodokanal-заявка', {
    дата: attr('Дата', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};

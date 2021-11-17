import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фамилия: DS.attr('string'),
  имя: DS.attr('string'),
  отчество: DS.attr('string')
});

export let ValidationRules = {
  фамилия: {
    descriptionKey: 'models.i-i-s-vodokanal-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-vodokanal-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-vodokanal-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-vodokanal-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-vodokanal-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 })
  });
};

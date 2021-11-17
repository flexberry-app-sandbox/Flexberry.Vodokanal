import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  сотрудник: DS.belongsTo('i-i-s-vodokanal-сотрудник', { inverse: null, async: false }),
  пункт: DS.hasMany('i-i-s-vodokanal-пункт', { inverse: 'задание', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-vodokanal-задание.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-vodokanal-задание.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пункт: {
    descriptionKey: 'models.i-i-s-vodokanal-задание.validations.пункт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаданиеE', 'i-i-s-vodokanal-задание', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-vodokanal-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фамилия' }),
    пункт: hasMany('i-i-s-vodokanal-пункт', 'Пункт', {
      готово: attr('Готово', { index: 0 }),
      работа: belongsTo('i-i-s-vodokanal-работа', 'Работа', {
        план: attr('План', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'план' })
    })
  });

  modelClass.defineProjection('ЗаданиеL', 'i-i-s-vodokanal-задание', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-vodokanal-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

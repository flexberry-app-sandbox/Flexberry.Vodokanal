import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISVodokanalВидРаботыLForm from './forms/i-i-s-vodokanal-вид-работы-l';
import IISVodokanalЗаданиеLForm from './forms/i-i-s-vodokanal-задание-l';
import IISVodokanalЗаявкаLForm from './forms/i-i-s-vodokanal-заявка-l';
import IISVodokanalРаботаLForm from './forms/i-i-s-vodokanal-работа-l';
import IISVodokanalСотрудникLForm from './forms/i-i-s-vodokanal-сотрудник-l';
import IISVodokanalВидРаботыEForm from './forms/i-i-s-vodokanal-вид-работы-e';
import IISVodokanalЗаданиеEForm from './forms/i-i-s-vodokanal-задание-e';
import IISVodokanalЗаявкаEForm from './forms/i-i-s-vodokanal-заявка-e';
import IISVodokanalРаботаEForm from './forms/i-i-s-vodokanal-работа-e';
import IISVodokanalСотрудникEForm from './forms/i-i-s-vodokanal-сотрудник-e';
import IISVodokanalВидРаботыModel from './models/i-i-s-vodokanal-вид-работы';
import IISVodokanalЗаданиеModel from './models/i-i-s-vodokanal-задание';
import IISVodokanalЗаявкаModel from './models/i-i-s-vodokanal-заявка';
import IISVodokanalПунктModel from './models/i-i-s-vodokanal-пункт';
import IISVodokanalРаботаModel from './models/i-i-s-vodokanal-работа';
import IISVodokanalСотрудникModel from './models/i-i-s-vodokanal-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vodokanal-вид-работы': IISVodokanalВидРаботыModel,
    'i-i-s-vodokanal-задание': IISVodokanalЗаданиеModel,
    'i-i-s-vodokanal-заявка': IISVodokanalЗаявкаModel,
    'i-i-s-vodokanal-пункт': IISVodokanalПунктModel,
    'i-i-s-vodokanal-работа': IISVodokanalРаботаModel,
    'i-i-s-vodokanal-сотрудник': IISVodokanalСотрудникModel
  },

  'application-name': 'Vodokanal',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vodokanal',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vodokanal',
          title: 'Vodokanal'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        водоканал: {
          caption: 'Водоканал',
          title: 'Водоканал',
          'i-i-s-vodokanal-работа-l': {
            caption: 'Работа',
            title: ''
          },
          'i-i-s-vodokanal-задание-l': {
            caption: 'Задание',
            title: ''
          },
          'i-i-s-vodokanal-заявка-l': {
            caption: 'Заявка',
            title: ''
          }
        },
        справоники: {
          caption: 'Справоники',
          title: 'Справоники',
          'i-i-s-vodokanal-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-vodokanal-вид-работы-l': {
            caption: 'Вид работы',
            title: 'Вид работы'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vodokanal-вид-работы-l': IISVodokanalВидРаботыLForm,
    'i-i-s-vodokanal-задание-l': IISVodokanalЗаданиеLForm,
    'i-i-s-vodokanal-заявка-l': IISVodokanalЗаявкаLForm,
    'i-i-s-vodokanal-работа-l': IISVodokanalРаботаLForm,
    'i-i-s-vodokanal-сотрудник-l': IISVodokanalСотрудникLForm,
    'i-i-s-vodokanal-вид-работы-e': IISVodokanalВидРаботыEForm,
    'i-i-s-vodokanal-задание-e': IISVodokanalЗаданиеEForm,
    'i-i-s-vodokanal-заявка-e': IISVodokanalЗаявкаEForm,
    'i-i-s-vodokanal-работа-e': IISVodokanalРаботаEForm,
    'i-i-s-vodokanal-сотрудник-e': IISVodokanalСотрудникEForm
  },

});

export default translations;

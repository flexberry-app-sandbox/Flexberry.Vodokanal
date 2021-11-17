import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vodokanal',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vodokanal',
          title: 'Vodokanal'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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

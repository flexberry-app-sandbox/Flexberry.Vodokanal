import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.водоканал.caption'),
          title: i18n.t('forms.application.sitemap.водоканал.title'),
          children: [{
            link: 'i-i-s-vodokanal-работа-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-работа-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-работа-l.title'),
            children: null
          }, {
            link: 'i-i-s-vodokanal-задание-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-задание-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-задание-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-vodokanal-заявка-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-vodokanal-заявка-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справоники.caption'),
          title: i18n.t('forms.application.sitemap.справоники.title'),
          children: [{
            link: 'i-i-s-vodokanal-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справоники.i-i-s-vodokanal-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справоники.i-i-s-vodokanal-сотрудник-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-vodokanal-вид-работы-l',
            caption: i18n.t('forms.application.sitemap.справоники.i-i-s-vodokanal-вид-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.справоники.i-i-s-vodokanal-вид-работы-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})
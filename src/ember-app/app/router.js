import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vodokanal-вид-работы-l');
  this.route('i-i-s-vodokanal-вид-работы-e',
  { path: 'i-i-s-vodokanal-вид-работы-e/:id' });
  this.route('i-i-s-vodokanal-вид-работы-e.new',
  { path: 'i-i-s-vodokanal-вид-работы-e/new' });
  this.route('i-i-s-vodokanal-задание-l');
  this.route('i-i-s-vodokanal-задание-e',
  { path: 'i-i-s-vodokanal-задание-e/:id' });
  this.route('i-i-s-vodokanal-задание-e.new',
  { path: 'i-i-s-vodokanal-задание-e/new' });
  this.route('i-i-s-vodokanal-заявка-l');
  this.route('i-i-s-vodokanal-заявка-e',
  { path: 'i-i-s-vodokanal-заявка-e/:id' });
  this.route('i-i-s-vodokanal-заявка-e.new',
  { path: 'i-i-s-vodokanal-заявка-e/new' });
  this.route('i-i-s-vodokanal-работа-l');
  this.route('i-i-s-vodokanal-работа-e',
  { path: 'i-i-s-vodokanal-работа-e/:id' });
  this.route('i-i-s-vodokanal-работа-e.new',
  { path: 'i-i-s-vodokanal-работа-e/new' });
  this.route('i-i-s-vodokanal-сотрудник-l');
  this.route('i-i-s-vodokanal-сотрудник-e',
  { path: 'i-i-s-vodokanal-сотрудник-e/:id' });
  this.route('i-i-s-vodokanal-сотрудник-e.new',
  { path: 'i-i-s-vodokanal-сотрудник-e/new' });
});

export default Router;

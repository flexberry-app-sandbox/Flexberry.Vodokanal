import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-vodokanal-задание-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-vodokanal-пункт+работа':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'план',
            required: true,
            relationName: 'работа',
            projection: 'РаботаL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

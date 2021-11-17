import { Serializer as РаботаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vodokanal-работа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РаботаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

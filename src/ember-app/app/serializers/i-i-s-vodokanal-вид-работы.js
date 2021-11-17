import { Serializer as ВидРаботыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vodokanal-вид-работы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидРаботыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

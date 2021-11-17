import { Serializer as ПунктSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vodokanal-пункт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПунктSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

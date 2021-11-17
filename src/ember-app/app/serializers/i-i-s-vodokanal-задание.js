import { Serializer as ЗаданиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vodokanal-задание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаданиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

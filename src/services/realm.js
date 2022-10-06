import Realm from 'realm';
import BookSchema from '../schemas/BookSchema';

export default function getRealm() {
    return Realm.open({
        schema: [BookSchema]
    });
};
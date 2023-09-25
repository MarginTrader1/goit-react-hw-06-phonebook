import { Li, Button, Ul, P } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const ContactsList = () => {
  /* получаем массив котактов и фильтр. Фильтруем контакты*/
  const list = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const dispatch = useDispatch()

  /* функция удаления контакта */
  const handleDeleteContact = id => {
    // фильтруем массив объектов по id -> возвращаем массив без объекта с таким id
    const newList = list.filter(item => item.id !== id);
    dispatch(deleteContact(newList));
  }

  return (
    <Ul>
      {filteredList.map(item => (
        <Li key={item.id}>
          <P>
            {item.name}: {item.number}
          </P>
          {/* в событие onClick передаем ссылку на анонимную функцию дял аргумента id */}
          <Button type="button" onClick={() => handleDeleteContact(item.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

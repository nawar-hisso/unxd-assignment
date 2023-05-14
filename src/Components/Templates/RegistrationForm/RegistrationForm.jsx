import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';
import CollectionDetails from '../../Atoms/CollectionDetails/CollectionDetails';
import Form from '../../Molecules/Form/Form';
import ROUTES_NAMES from '../../../Configs/RoutesNames';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTES_NAMES.REQUEST_SENT);
  };

  return (
    <div className="registration-form">
      <div className="registration-form-content">
        <h1>DGFamily Event Form</h1>

        <CollectionDetails message="Welcome DGFamily Member." />

        <Form handleForm={handleSubmit} />
      </div>
    </div>
  );
};

export default RegistrationForm;

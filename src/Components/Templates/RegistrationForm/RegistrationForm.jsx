import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CollectionDetails from '../../Atoms/CollectionDetails/CollectionDetails';
import Form from '../../Molecules/Form/Form';
import ROUTES_NAMES from '../../../Configs/RoutesNames';
import { setFormSubmitted } from '../../../Actions/App/App';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setFormSubmitted(dispatch, false);
  }, [dispatch]);

  const handleSubmit = () => {
    setFormSubmitted(dispatch, true);
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

import './RegistrationForm.css';
import CollectionDetails from '../../Atoms/CollectionDetails/CollectionDetails';
import Form from '../../Molecules/Form/Form';

const RegistrationForm = () => {
  const handleSubmit = () => {};

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

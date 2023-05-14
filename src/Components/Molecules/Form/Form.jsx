import './Form.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import FormInput from '../../Atoms/FormInput/FormInput';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import HELPERS from '../../../Utils/Helpers';
import Prompt from '../Prompt/Prompt';
import COMMON from '../../../Configs/Common';

const Form = ({ handleForm }) => {
  const { app } = useSelector(state => state);

  const [formStatus, setFormStatus] = useState(
    COMMON.FORM_STATUSES.FORM_SUCCESS,
  );
  const [promptOpen, setPromptOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [walletAddress, setWalletAddress] = useState(app?.wallet);

  const handlePrompt = () => {
    setPromptOpen(!promptOpen);
  };

  const downloadData = () => {
    const formData = { email, firstName, lastName, walletAddress };
    app?.collections?.forEach(collection => {
      formData[collection?.class] = collection?.count;
    });

    const json = JSON.stringify(formData);
    const blob = new Blob([json], { type: 'octet/stream' });

    saveAs(blob, `${COMMON.DOWNLOADED_FILE_NAME}.txt`);
    handlePrompt();
  };

  const renderModalContent = () => {
    switch (formStatus) {
      case COMMON.FORM_STATUSES.INPUT_REQUIRED:
        return <p>Please fill out all inputs</p>;
      case COMMON.FORM_STATUSES.INVALID_EMAIL:
        return <p>Please enter a valid email</p>;
      default:
        return null;
    }
  };

  const handleInputChange = event => {
    const { id, value } = event.target;

    switch (id) {
      case 'email':
        setEmail(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'walletAddress':
        setWalletAddress(value);
        break;
      default:
        break;
    }
  };

  const submitForm = () => {
    handlePrompt();
    if (email && firstName && lastName && walletAddress) {
      if (!HELPERS.checkValidEmail(email)) {
        setFormStatus(COMMON.FORM_STATUSES.INVALID_EMAIL);
      } else {
        downloadData();
        handleForm();
      }
    } else {
      setFormStatus(COMMON.FORM_STATUSES.INPUT_REQUIRED);
    }
  };

  return (
    <form>
      <FormInput
        label="EMAIL"
        type="email"
        id="email"
        value={email}
        handleChange={handleInputChange}
        isDisabled={false}
        isRequired
      />
      <FormInput
        label="First Name"
        type="text"
        id="firstName"
        value={firstName}
        handleChange={handleInputChange}
        isDisabled={false}
        isRequired
      />
      <FormInput
        label="Last Name"
        type="text"
        id="lastName"
        value={lastName}
        handleChange={handleInputChange}
        isDisabled={false}
        isRequired
      />
      <FormInput
        label="Wallet Address"
        type="text"
        id="walletAddress"
        value={walletAddress}
        handleChange={handleInputChange}
        isDisabled
        isRequired
      />

      <div className="submit">
        <CustomButton title="Submit" handler={submitForm} />
      </div>

      <Prompt title="Prompt" show={promptOpen} onClose={handlePrompt}>
        {renderModalContent()}
      </Prompt>
    </form>
  );
};

export default Form;

import './Form.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import FormInput from '../../Atoms/FormInput/FormInput';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import HELPERS from '../../../Utils/Helpers';
import Prompt from '../Prompt/Prompt';
import COMMON from '../../../Configs/Common';
/**
 * Form component that renders a form for user input and data submission.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.handleForm - The callback function to handle form submission.
 * @returns {JSX.Element} The rendered Form component.
 */
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

  /**
   * Toggles the prompt modal open or closed.
   */
  const handlePrompt = () => {
    setPromptOpen(!promptOpen);
  };

  /**
   * Downloads the form data as a text file.
   */
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

  /**
   * Renders the content of the prompt modal based on the current form status.
   * @returns {JSX.Element} The rendered content of the prompt modal.
   */
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

  /**
   * Handles input change events and updates the corresponding form state.
   * @param {Object} event - The input change event.
   */
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

  /**
   * Submits the form data and triggers the necessary actions based on the input values.
   */
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

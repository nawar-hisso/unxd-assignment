import './Form.css';
import FormInput from '../../Atoms/FormInput/FormInput';
import CustomButton from '../../Atoms/CustomButton/CustomButton';

const Form = ({ handleForm }) => {
  return (
    <form>
      <FormInput label="EMAIL" type="email" id="email" isRequired />
      <FormInput label="First Name" type="text" id="firstName" isRequired />
      <FormInput label="Last Name" type="text" id="lastName" isRequired />
      <FormInput
        label="Wallet Address"
        type="text"
        id="walletAddress"
        isRequired
      />

      <div className="submit">
        <CustomButton title="Submit" handler={handleForm} />
      </div>
    </form>
  );
};

export default Form;

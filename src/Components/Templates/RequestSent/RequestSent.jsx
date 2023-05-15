import './RequestSent.css';

/**
 * Component for the page displayed after the form submission.
 * Indicates that the request to attend the DGFamily event has been made.
 */
const RequestSent = () => {
  return (
    <div className="request-sent">
      <div className="request-sent-content">
        <h1>DGFamily Event Form</h1>
        <p>
          Your request to attend has been made. Confirmed invitations will
          receive notifications via email or Discord as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default RequestSent;

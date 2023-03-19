import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BodyCard({ children }) {
  return (
    <div
      style={{
        margin: '30px 10px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        flex: 1,
      }}
    >
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="title"
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
          }}
        >
          Star Students
        </span>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="icon"
          style={{
            padding: '8px',
            backgroundColor: '#F4F4F4',
            borderRadius: '4px',
          }}
        />
      </div>
      {children}
    </div>
  );
}

export default BodyCard;

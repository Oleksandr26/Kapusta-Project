import 'modern-normalize/modern-normalize.css';
import UserForm from './UserForm/UserForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserForm />
      React homework template
    </div>
  );
};

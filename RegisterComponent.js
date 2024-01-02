import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserStart } from './userSlice';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [userData, setUserData] = useState({
    // your user registration form data
  });

  const handleRegister = () => {
    dispatch(registerUserStart());
    // Perform your registration logic here and dispatch the appropriate actions based on success or failure
  };

  return (
    <View>
      {/* Your registration form */}
      <Button title="Register" onPress={handleRegister} disabled={loading} />
      {loading && <Text>Registering...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default RegisterComponent;
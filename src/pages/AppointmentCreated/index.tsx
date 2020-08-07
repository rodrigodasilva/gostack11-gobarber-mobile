import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Appoitment" onPress={signOut} />
    </View>
  );
};

export default AppointmentCreated;

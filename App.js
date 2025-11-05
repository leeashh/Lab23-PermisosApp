import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

export default function App() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [locationPermission, setLocationPermission] = useState(null);

  const checkPermissions = async () => {
    const { status: camStatus } = await Camera.requestCameraPermissionsAsync();
    const { status: locStatus } = await Location.requestForegroundPermissionsAsync();
    setCameraPermission(camStatus);
    setLocationPermission(locStatus);

    if (camStatus === 'denied') {
      Alert.alert(
        'Permiso de cámara denegado',
        'Activa el permiso desde Configuración.',
        [{ text: 'OK' }]
      );
    }

    if (locStatus === 'denied') {
      Alert.alert(
        'Permiso de ubicación denegado',
        'Activa el permiso desde Configuración.',
        [{ text: 'OK' }]
      );
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  const getColor = (status) => {
    return status === 'granted' ? 'green' : 'red';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Permisos</Text>

      <Text style={[styles.label, { color: getColor(cameraPermission) }]}>
        Cámara: {cameraPermission === 'granted' ? 'Permitido' : 'Denegado'}
      </Text>

      <Text style={[styles.label, { color: getColor(locationPermission) }]}>
        Ubicación: {locationPermission === 'granted' ? 'Permitido' : 'Denegado'}
      </Text>

      <Button title="Verificar nuevamente permisos" onPress={checkPermissions} />

      <Text style={styles.help}>
        Esta app necesita acceso a la cámara para tomar fotos y a la ubicación para mostrar contenido local.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F6F6', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginVertical: 5 },
  help: { fontSize: 14, marginTop: 20, textAlign: 'center' },
});

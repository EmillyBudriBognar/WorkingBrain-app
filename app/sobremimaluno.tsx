import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { goToLogin } from '../app/navigation';

const { width } = Dimensions.get('window');

type Step = 1 | 2 | 3;

export default function Cadastro() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(null);
  const [preference, setPreference] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleContinue = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      if (currentStep < 3) {
        setCurrentStep((prevStep) => (prevStep + 1) as Step);
      } else {
        router.push('/login');
      }
    }
  };

  const handleStepPress = (step: Step) => {
    setCurrentStep(step);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => (prevStep - 1) as Step);
    } else {
      router.back();
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const renderCheckbox = (text: string, value: string, onPress: () => void) => (
    <TouchableOpacity
      style={[
        styles.checkbox,
        (selectedOccupation === value || preference === value) ? styles.selectedCheckbox : {},
      ]}
      onPress={onPress}
    >
      <Text style={(selectedOccupation === value || preference === value) ? styles.selectedText : {}}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={require('../assets/images/wallpaper-cadastro-aluno.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.progressBar}>
            {[1, 2, 3].map((step) => (
              <TouchableOpacity
                key={step}
                style={styles.step}
                onPress={() => handleStepPress(step as Step)}
              >
                <View style={[styles.stepCircle, currentStep === step ? styles.activeStepCircle : styles.inactiveStepCircle]}>
                  <Text style={styles.stepNumber}>{step}</Text>
                </View>
                <Text style={[styles.stepLabel, currentStep === step ? styles.activeStepLabel : styles.inactiveStepLabel]}>
                  {step === 1 ? 'Sobre mim' : step === 2 ? 'Informações' : 'Preferências'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.form}>
            {currentStep === 1 && (
              <>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" />
                <Text style={styles.label}>Sobrenome:</Text>
                <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
                <Text style={styles.label}>Data de nascimento:</Text>
                <TouchableOpacity
                  style={styles.input}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
                <Text style={styles.label}>Ocupação:</Text>
                <View style={styles.checkboxContainer}>
                  {renderCheckbox('Estudante Fund. 2', 'estudanteFund', () => setSelectedOccupation('estudanteFund'))}
                  {renderCheckbox('Estudante Ensino Médio', 'ensinoMedio', () => setSelectedOccupation('ensinoMedio'))}
                  {renderCheckbox('Vestibulando', 'vestibulando', () => setSelectedOccupation('vestibulando'))}
                </View>
              </>
            )}
            {currentStep === 2 && (
              <>
                <Text style={styles.label}>Celular:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="(11) 99999-9999"
                  keyboardType="phone-pad"
                />
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <Text style={styles.label}>Confirme a senha:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirme sua senha"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
              </>
            )}
            {currentStep === 3 && (
              <>
                <Text style={styles.label}>Tenho preferência por:</Text>
                <View style={styles.checkboxContainer}>
                  {renderCheckbox('Seguir um cronograma de estudos convencional', 'convencional', () => setPreference('convencional'))}
                  {renderCheckbox('Seguir um cronograma de estudos adaptado para mim', 'adaptado', () => setPreference('adaptado'))}
                </View>
                <Image
                  source={require('../assets/images/cronograma.png')}
                  style={styles.finalImage}
                />
              </>
            )}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>{currentStep === 3 ? 'Finalizar cadastro' : 'Continuar'}</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity onPress={goToLogin} activeOpacity={0.8}>
              <Text style={styles.footerText}>
                Já tem uma conta? <Text style={styles.loginLink}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    width: width - 40,
    alignSelf: 'center',
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#407BFF',
  },
  inactiveStepCircle: {
    backgroundColor: '#ddd',
  },
  stepNumber: {
    color: '#fff',
  },
  stepLabel: {
    marginTop: 5,
  },
  activeStepLabel: {
    color: '#407BFF',
  },
  inactiveStepLabel: {
    color: '#999',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    borderColor: '#ccc',
  },
  selectedCheckbox: {
    borderColor: '#407BFF',
    backgroundColor: '#E8F0FE',
  },
  selectedText: {
    color: '#407BFF',
  },
  button: {
    backgroundColor: '#407BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
  },
  loginLink: {
    color: '#407BFF',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  finalImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

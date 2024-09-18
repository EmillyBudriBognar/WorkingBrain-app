import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import para ícones
import DateTimePicker from '@react-native-community/datetimepicker';
import { goToPreCadastro } from './navigation';

const { width } = Dimensions.get('window');

type Step = 1 | 2;

export default function Cadastro() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [cvFile, setCvFile] = useState<any>(null);
  const [cvUploadSuccess, setCvUploadSuccess] = useState<string | null>(null);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

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
  
    if (currentStep < 2) {
      setCurrentStep((prevStep) => (prevStep + 1) as Step);
    } else if (currentStep === 2) {
      if (isEmailValid && isPasswordValid) {
        handleFinalize(); // Finaliza o processo
      } else {
        alert("Por favor, insira um email e senha válidos."); 
      }
    }
  };
  
  const handleFinalize = () => {
    router.push('/login');
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleCvUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result) {
      setCvFile(result);
      setCvUploadSuccess('Currículo enviado com sucesso!');
    } else {
      setCvUploadSuccess(null);
    }
  };

  const handleSubjectSelection = (subject: string) => {
    setSelectedSubjects((prevSubjects) =>
      prevSubjects.includes(subject)
        ? prevSubjects.filter((item) => item !== subject)
        : [...prevSubjects, subject]
    );
  };

  const renderCheckbox = (subject: string) => (
    <TouchableOpacity
      key={subject}
      style={[styles.checkbox, selectedSubjects.includes(subject) ? styles.selectedCheckbox : {}]}
      onPress={() => handleSubjectSelection(subject)}
    >
      <Text style={selectedSubjects.includes(subject) ? styles.selectedText : styles.checkboxText}>
        {subject}
      </Text>
    </TouchableOpacity>
  );

  const Subjects = [
    'Matemática',
    'Geometria',
    'Língua Portuguesa',
    'Literatura',
    'Redação',
    'Inglês',
    'Espanhol',
    'História',
    'Geografia',
    'Filosofia',
    'Sociologia',
    'Física',
    'Química',
    'Biologia',
    'Artes',
    'Educação Física',
  ];

  const handleStepPress = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <ImageBackground source={require('../assets/images/wallpaper-cadastro-professor.png')} style={styles.background}>
      {/* Botão circular de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={(goToPreCadastro)}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.progressBar}>
            {[1, 2].map((step) => (
              <TouchableOpacity key={step} style={styles.step} onPress={() => handleStepPress(step as Step)}>
                <View style={[styles.stepCircle, currentStep === step ? styles.activeStepCircle : styles.inactiveStepCircle]}>
                  <Text style={styles.stepNumber}>{step}</Text>
                </View>
                <Text style={[styles.stepLabel, currentStep === step ? styles.activeStepLabel : styles.inactiveStepLabel]}>
                  {step === 1 ? 'Sobre mim' : 'Informações'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.form}>
            {currentStep === 1 && (
              <>
                <Text style={styles.label}>Nome completo:</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome completo" />

                <Text style={styles.label}>Data de nascimento:</Text>
                <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
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

                <Text style={styles.label}>Selecione as matérias que você leciona:</Text>
                <View style={styles.checkboxContainer}>
                  {Subjects.map((subject) => renderCheckbox(subject))}
                </View>

                <Text style={styles.label}>Currículo (PDF):</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={handleCvUpload}>
                  <Text style={styles.uploadButtonText}>Anexar Currículo</Text>
                </TouchableOpacity>
                {cvFile && <Text style={styles.cvFileName}>{cvFile.name}</Text>}
                {cvUploadSuccess && <Text style={styles.successMessage}>{cvUploadSuccess}</Text>}
              </>
            )}

            {currentStep === 2 && (
              <>
                <Text style={styles.label}>Celular:</Text>
                <TextInput style={styles.input} placeholder="(11) 99999-9999" keyboardType="phone-pad" />
                
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu e-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  onBlur={validateEmail}
                />
                {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

                <Text style={styles.label}>Senha:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  onBlur={validatePassword}
                />

                <Text style={styles.label}>Confirme a senha:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirme sua senha"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onBlur={validatePassword}
                />
                {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
              </>
            )}
          </View>

          {/* Footer dentro do card */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>
                {currentStep === 2 ? 'Finalizar cadastro' : 'Continuar'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/login')} activeOpacity={0.8}>
              <Text style={styles.footerText}>
                Já tem uma conta? <Text style={styles.activeStepLabel}>Login</Text>
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    backgroundColor: '#E85B81',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    width: width - 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 100,
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
    backgroundColor: '#E85B81',
  },
  inactiveStepCircle: {
    backgroundColor: '#e0e0e0',
  },
  stepNumber: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stepLabel: {
    marginTop: 5,
    fontSize: 14,
  },
  activeStepLabel: {
    color: '#E85B81',
  },
  inactiveStepLabel: {
    color: '#888',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginVertical: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  checkbox: {
    width: '48%',
    padding: 10,
    margin: '1%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCheckbox: {
    backgroundColor: '#E85B81',
  },
  checkboxText: {
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  uploadButton: {
    backgroundColor: '#E85B81',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  uploadButtonText: {
    color: '#fff',
  },
  cvFileName: {
    marginVertical: 5,
  },
  successMessage: {
    color: 'green',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#E85B81',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#000',
  },
});

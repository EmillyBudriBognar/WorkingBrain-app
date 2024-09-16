import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
    } else {
      setPasswordError('');
    }
  };

  const handleContinue = () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError && currentStep < 2) {
      setCurrentStep((prevStep) => (prevStep + 1) as Step);
    } else if (!emailError && !passwordError) {
      router.push('/login');
    }
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

  const handleCvUpload = async () => {
    let result = await DocumentPicker.getDocumentAsync({
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

                <TouchableOpacity style={styles.checkemail}>
                  <Text>Eu gostaria de receber informações por e-mail</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          {/* Footer dentro do card */}
          <View style={[styles.footerText, styles.footer]}>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: width * 0.9,
    elevation: 5,
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
    marginBottom: 5,
  },
  activeStepCircle: {
    backgroundColor: '#E85B81',
  },
  inactiveStepCircle: {
    backgroundColor: '#D3D3D3',
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepLabel: {
    fontSize: 12,
  },
  activeStepLabel: {
    color: '#E85B81',
    fontWeight: 'bold',
  },
  inactiveStepLabel: {
    color: '#A9A9A9',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '45%',
  },
  checkemail: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  selectedCheckbox: {
    backgroundColor: '#E85B81',
  },
  checkboxText: {
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
  uploadButton: {
    backgroundColor: '#F5A7B8', // Cor de fundo mais clara
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio de desfoque da sombra
    elevation: 5, // Para Android
  },
  
  uploadButtonText: {
    color: '#550319',
    fontWeight: 'bold',
  },
  cvFileName: {
    marginTop: 5,
    color: '#555',
  },
  successMessage: {
    color: 'green',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#E85B81',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    marginTop: 20,
  },
  loginLink: {
    fontWeight: 'bold',
  },
});

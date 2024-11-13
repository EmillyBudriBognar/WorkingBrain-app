import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
import SimpleHeader from '@/components/SimpleHeader';
import { goToHome } from './navigation';

type Event = {
  title: string;
  time: string;
};

type Events = {
  [date: string]: Event[];
};

const CronogramaScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const events: Events = {
    '2024-11-21': [{ title: 'Matemática', time: '14:00 pm - 15:00 pm' }],
    '2024-11-22': [{ title: 'Português', time: '14:00 pm - 15:00 pm' }],
    '2024-11-25': [{ title: 'História', time: '14:00 pm - 15:00 pm' }],
    '2024-11-26': [{ title: 'Física', time: '14:00 pm - 15:00 pm' }],
    '2024-11-27': [{ title: 'Matemática', time: '14:00 pm - 15:00 pm' }],
    '2024-11-28': [{ title: 'Português', time: '14:00 pm - 15:00 pm' }],
    '2024-11-29': [{ title: 'História', time: '14:00 pm - 15:00 pm' }],
  };

  const handleDateSelect = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title='cronograma' onBackPress={goToHome} />
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#00A8E8' },
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#ed3b8b' };
            return acc;
          }, {} as Record<string, { marked: boolean; dotColor: string }>),
        }}
        theme={{
          selectedDayBackgroundColor: '#00A8E8',
          todayTextColor: '#00A8E8',
          arrowColor: '#00A8E8',
        }}
      />
      <Text style={styles.sectionHeader}>Dia {selectedDate || 'Selecione uma data'}</Text>
      <ScrollView>
        {(events[selectedDate] || []).map((event: Event, index: number) => (
          <View key={index} style={styles.eventItem}>
            <View style={styles.eventCircle} />
            <View>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  sectionHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 10,
  },
  eventCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ed3b8b',
    marginRight: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  eventTime: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 200,
    backgroundColor: '#00A8E8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: -8,
  },
});

export default CronogramaScreen;

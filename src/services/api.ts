import { Appointment, newAppointment } from "@/types";

export async function getUserAppointments(user_id: string): Promise<Appointment[]> {
  const response = await fetch(import.meta.env.VITE_API_URL + '/user/' + user_id + '/appointments' , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const userAppointments = await response.json();
    return userAppointments;
  } else {
    console.error('Failed to get user appointments');
  }
  return [];
}

export async function updateAppointmentsToPaid(appointmentIds: string[]): Promise<void> {
  const response = await fetch(import.meta.env.VITE_API_URL + '/appointment/to-paid', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ appointments_ids: appointmentIds }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}

export async function createAppointment(newAppointment: newAppointment): Promise<Appointment> {
  const response = await fetch(import.meta.env.VITE_API_URL + '/appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAppointment),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export async function getAppointmentById(id: string | undefined): Promise<Appointment> {
  const response = await fetch(import.meta.env.VITE_API_URL + '/appointment/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  return data[0];
}
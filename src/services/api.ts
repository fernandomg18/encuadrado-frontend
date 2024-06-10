import { Appointment, newAppointment } from "@/types";

const baseUrl = import.meta.env.VITE_API_URL;

export async function loginUser(username: string, password: string) {
  const response = await fetch(baseUrl + '/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      user: username, 
      password: password 
    })
  });
  if (response.ok) {
    const userData = await response.json();
    return userData;
  } else {
    throw new Error('Failed to login');
  }
}

export async function getUserAppointments(user_id: string): Promise<Appointment[]> {
  const response = await fetch(baseUrl + '/user/' + user_id + '/appointments' , {
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
  const response = await fetch(baseUrl + '/appointment/to-paid', {
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
  const response = await fetch(baseUrl + '/appointment', {
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
  const response = await fetch(baseUrl + '/appointment/' + id, {
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
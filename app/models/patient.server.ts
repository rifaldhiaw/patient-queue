// In-memory database
let patients: Array<{
  id: string;
  name: string;
  age: number;
  complaint: string;
  queueNumber: number;
  status: 'waiting' | 'in-progress' | 'completed';
  createdAt: Date;
}> = [
  {
    id: '1',
    name: 'John Doe',
    age: 35,
    complaint: 'Fever and headache',
    queueNumber: 1,
    status: 'waiting',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 28,
    complaint: 'Sore throat',
    queueNumber: 2,
    status: 'in-progress',
    createdAt: new Date(),
  },
];

export async function getPatients() {
  return patients;
}

export async function addPatient(name: string, age: number, complaint: string) {
  const newPatient = {
    id: String(patients.length + 1),
    name,
    age,
    complaint,
    queueNumber: patients.length + 1,
    status: 'waiting' as const,
    createdAt: new Date(),
  };
  
  patients.push(newPatient);
  return newPatient;
}

export async function updatePatientStatus(id: string, status: 'waiting' | 'in-progress' | 'completed') {
  const patient = patients.find(p => p.id === id);
  if (patient) {
    patient.status = status;
    return patient;
  }
  return null;
}
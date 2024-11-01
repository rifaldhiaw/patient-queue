import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Activity, Users, PlayCircle, CheckCircle } from "lucide-react";
import { getPatients, updatePatientStatus } from "../models/patient.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const patients = await getPatients();
  const waitingPatients = patients.filter(p => p.status === 'waiting');
  const lastCalledPatient = patients.find(p => p.status === 'in-progress');

  return json({ 
    patients,
    waitingCount: waitingPatients.length,
    lastCalledNumber: lastCalledPatient?.queueNumber || '-'
  });
}

export async function action({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "updateStatus") {
    const id = formData.get("id");
    const status = formData.get("status");
    if (typeof id !== "string" || typeof status !== "string") {
      return json({ error: "Invalid request" }, { status: 400 });
    }
    await updatePatientStatus(id, status as 'waiting' | 'in-progress' | 'completed');
    return json({ success: true });
  }

  return json({ error: "Invalid request" }, { status: 400 });
}

export default function Index() {
  const { patients, waitingCount, lastCalledNumber } = useLoaderData<typeof loader>();
  
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">ClinicFlow</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Queue Overview Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Waiting Patients Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Waiting Patients
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {waitingCount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Called Number Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <PlayCircle className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Last Called Number
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {lastCalledNumber}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Patient Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Patient Registration
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Add a new patient to the queue system.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register New Patient
                </Link>
              </div>
            </div>

            {/* Patient Queue Table */}
            <div className="bg-white overflow-hidden shadow rounded-lg col-span-full">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Current Queue
                </h3>
                <div className="mt-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Queue #
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Age
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Complaint
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {patients.map((patient) => (
                          <tr key={patient.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {patient.queueNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {patient.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {patient.age}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                              {patient.complaint}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${patient.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' : 
                                  patient.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                                  'bg-green-100 text-green-800'}`}
                              >
                                {patient.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                {patient.status === 'waiting' && (
                                  <form method="post" className="inline">
                                    <input type="hidden" name="intent" value="updateStatus" />
                                    <input type="hidden" name="id" value={patient.id} />
                                    <input type="hidden" name="status" value="in-progress" />
                                    <button
                                      type="submit"
                                      className="inline-flex items-center p-1 border border-transparent rounded-full text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                      title="Start Treatment"
                                    >
                                      <PlayCircle className="h-5 w-5" />
                                    </button>
                                  </form>
                                )}
                                {patient.status === 'in-progress' && (
                                  <form method="post" className="inline">
                                    <input type="hidden" name="intent" value="updateStatus" />
                                    <input type="hidden" name="id" value={patient.id} />
                                    <input type="hidden" name="status" value="completed" />
                                    <button
                                      type="submit"
                                      className="inline-flex items-center p-1 border border-transparent rounded-full text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                      title="Complete Treatment"
                                    >
                                      <CheckCircle className="h-5 w-5" />
                                    </button>
                                  </form>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
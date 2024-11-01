import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";
import { FormInput } from "../components/FormInput";
import { FormTextarea } from "../components/FormTextarea";
import { addPatient } from "../models/patient.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const age = formData.get("age");
  const complaint = formData.get("complaint");

  if (typeof name !== "string" || !name) {
    return json({ error: "Name is required" }, { status: 400 });
  }

  if (typeof age !== "string" || !age) {
    return json({ error: "Age is required" }, { status: 400 });
  }

  const ageNumber = parseInt(age, 10);
  if (isNaN(ageNumber)) {
    return json({ error: "Age must be a number" }, { status: 400 });
  }

  if (typeof complaint !== "string" || !complaint) {
    return json({ error: "Complaint is required" }, { status: 400 });
  }

  await addPatient(name, ageNumber, complaint);
  return json({ success: true });
}

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      navigate("/");
    }
  }, [actionData, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Register New Patient</h1>
        
        <Form method="post" className="space-y-6">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Patient Name"
            placeholder="Enter patient name"
            required
            error={actionData?.error === "Name is required" ? actionData.error : undefined}
          />

          <FormInput
            id="age"
            name="age"
            type="number"
            label="Age"
            placeholder="Enter patient age"
            required
            min="0"
            error={
              actionData?.error === "Age is required" || actionData?.error === "Age must be a number"
                ? actionData.error
                : undefined
            }
          />

          <FormTextarea
            id="complaint"
            name="complaint"
            label="Chief Complaint"
            placeholder="Enter patient's chief complaint"
            required
            rows={3}
            error={actionData?.error === "Complaint is required" ? actionData.error : undefined}
          />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Register Patient
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
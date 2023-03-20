import React, { FormEvent, useState } from "react";
import axios from 'axios'

const HeartDiseaseForm = () => {
  type HeartDiseaseFormData = {
    age: number | null;
    sex: string | null;
    cigarettesPerDay: number | null;
    bloodPressureMeds: string | null;
    prevalentStroke: string | null;
    prevalentHypertension: string | null;
    diabetes: string | null;
    totalCholestrol: number | null;
    systolicBloodPressure: number | null;
    bmi: number | null;
    heartRate: number | null;
    glucose: number | null;
  };

  const initialFormData: HeartDiseaseFormData = {
    age: 0,
    sex: "M",
    cigarettesPerDay: 0,
    bloodPressureMeds: "No",
    prevalentStroke: "No",
    prevalentHypertension: "No",
    diabetes: "No",
    totalCholestrol: null,
    systolicBloodPressure: null,
    bmi: null,
    heartRate: null,
    glucose: null,
  };

  const [formData, setFormData] =
    useState<HeartDiseaseFormData>(initialFormData);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post("http://localhost:8000/predict", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="flex sm:flex-row flex-col ">
      <form onSubmit={(e) => handleSubmit(e)} className="p-10" action="">
        <p className="text-left text-indigo-900 font-semibold text-4xl my-4">
          Enter relevant data for Heart Disease
        </p>
        <div className="md:grid md:grid-cols-2 grid-cols-1  gap-x-10 gap-y-5">
          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Age in number
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter Age"
                name="age"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Sex (M or F)
              </label>
              <select className="form-input" name="sex" onChange={handleChange}>
                <option value="" disabled selected className="text-gray-500">
                  Select Sex
                </option>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                How many cigarettes do you smoke per day?
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter number of cigarettes"
                name="cigarettesPerDay"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Are you currently on any Blood Pressure Meds? (Yes / No)
              </label>
              <select
                className="form-input"
                name="bloodPressureMeds"
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Did you have a prevalent stroke? (Yes / No)
              </label>
              <select
                className="form-input"
                placeholder="Enter your location"
                name="prevalentStroke"
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Do you have prevalent hypertension? (Yes / No)
              </label>
              <select
                className="form-input"
                placeholder="Enter your location"
                name="prevalentHypertension"
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Do you have diabetes? (Yes / No)
              </label>
              <select
                className="form-input"
                placeholder="Enter your location"
                name="diabetes"
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your total cholestrol level
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter your cholestrol level"
                name="totalCholestrol"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your systolic blood pressure
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter your blood pressure"
                name="systolicBloodPressure"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current Body Mass Index (BMI)
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter your BMI"
                name="bmi"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current heart rate
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter your current heart rate"
                name="heartRate"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current glucose level
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="Enter your current glucose level"
                name="glucose"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-indigo-800 px-4 py-3 text-xl text-white font-semibold rounded-2xl mt-10 w-1/2"
        >
          Predict
        </button>
      </form>
      <div className="">
        <h1 className="text-2xl font-semibold text-indigo-600 p-6">
          Description of the input values
        </h1>
      </div>
    </div>
  );
};

export default HeartDiseaseForm;

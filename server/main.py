from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle
import json

app = FastAPI()

origins = ["http://localhost:3000", "http://localhost:3001"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class model_input(BaseModel):
    meanRadius: float
    meanTexture: float
    meanPerimeter: float
    meanArea: float
    meanSmoothness: float
    meanCompactness: float
    meanConcavity: float
    meanConcavePoints: float
    meanSymmetry: float
    meanFractalDimension: float
    radiusError: float
    textureError: float
    perimeterError: float
    areaError: float
    smoothnessError: float
    compactnessError: float
    concavityError: float
    concavePointsError: float
    symmetryError: float
    fractalDimensionError: float
    worstRadius: float
    worstTexture: float
    worstPerimeter: float
    worstArea: float
    worstSmoothness: float
    worstCompactness: float
    worstConcavity: float
    worstConcavePoints: float
    worstSymmetry: float
    worstFractalDimension: float


# loading the saved model
breast_cancer_data = pickle.load(open("breast_cancer_data.sav", "rb"))

@app.post("/breast-cancer")
def breast_cancer_pred(input_parameters: model_input):
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)

    meanRadius = input_dictionary["meanRadius"]
    meanTexture = input_dictionary["meanTexture"]
    meanPerimeter = input_dictionary["meanPerimeter"]
    meanArea = input_dictionary["meanArea"]
    meanSmoothness = input_dictionary["meanSmoothness"]
    meanCompactness = input_dictionary["meanCompactness"]
    meanConcavity = input_dictionary["meanConcavity"]
    meanConcavePoints = input_dictionary["meanConcavePoints"]
    meanSymmetry = input_dictionary["meanSymmetry"]
    meanFractalDimension = input_dictionary["meanFractalDimension"]
    radiusError = input_dictionary["radiusError"]
    textureError = input_dictionary["textureError"]
    perimeterError = input_dictionary["perimeterError"]
    areaError = input_dictionary["areaError"]
    smoothnessError = input_dictionary["smoothnessError"]
    compactnessError = input_dictionary["compactnessError"]
    concavityError = input_dictionary["concavityError"]
    concavePointsError = input_dictionary["concavePointsError"]
    symmetryError = input_dictionary["symmetryError"]
    fractalDimensionError = input_dictionary["fractalDimensionError"]
    worstRadius = input_dictionary["worstRadius"]
    worstTexture = input_dictionary["worstTexture"]
    worstPerimeter = input_dictionary["worstPerimeter"]
    worstArea = input_dictionary["worstArea"]
    worstSmoothness = input_dictionary["worstSmoothness"]
    worstCompactness = input_dictionary["worstCompactness"]
    worstConcavity = input_dictionary["worstConcavity"]
    worstConcavePoints = input_dictionary["worstConcavePoints"]
    worstSymmetry = input_dictionary["worstSymmetry"]
    worstFractalDimension = input_dictionary["worstFractalDimension"]

    input_list = (
        meanRadius,
        meanTexture,
        meanPerimeter,
        meanArea,
        meanSmoothness,
        meanCompactness,
        meanConcavity,
        meanConcavePoints,
        meanSymmetry,
        meanFractalDimension,
        radiusError,
        textureError,
        perimeterError,
        areaError,
        smoothnessError,
        compactnessError,
        concavityError,
        concavePointsError,
        symmetryError,
        fractalDimensionError,
        worstRadius,
        worstTexture,
        worstPerimeter,
        worstArea,
        worstSmoothness,
        worstCompactness,
        worstConcavity,
        worstConcavePoints,
        worstSymmetry,
        worstFractalDimension,
    )
    input_data_as_numpy_array = np.asarray(input_list)

    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    prediction = breast_cancer_data.predict(input_data_reshaped)
    if(prediction[0]==0):
        return 'The breast cancer is Malignant'

    else:
        return 'The breast cancer is Benign'

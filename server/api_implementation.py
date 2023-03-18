import json
import requests

url = "http://127.0.0.1:8000/breast-cancer"

# 13,21.82,87.5,519.8,0.1273,0.1932,0.1859,0.09353,0.235,
# 0.07389,0.3063,1.002,2.406,24.32,0.005731,0.03502,0.03553,
# 0.01226,0.02143,0.003749,15.49,30.73,106.2,739.3,0.1703,0.5401,0.539,0.206,0.4378,0.1072
input_data_for_model = {
    "meanRadius": 13,
    "meanTexture": 21.82,
    "meanPerimeter": 87.5,
    "meanArea": 519.8,
    "meanSmoothness": 0.1273,
    "meanCompactness": 0.1932,
    "meanConcavity": 0.1859,
    "meanConcavePoints": 0.09353,
    "meanSymmetry": 0.235,
    "meanFractalDimension": 0.07389,
    "radiusError": 0.3063,
    "textureError": 1.002,
    "perimeterError": 2.406,
    "areaError": 24.32,
    "smoothnessError": 0.005731,
    "compactnessError": 0.03502,
    "concavityError": 0.03553,
    "concavePointsError": 0.01226,
    "symmetryError": 0.02143,
    "fractalDimensionError": 0.003749,
    "worstRadius": 15.49,
    "worstTexture": 30.73,
    "worstPerimeter": 106.2,
    "worstArea": 739.3,
    "worstSmoothness": 0.1703,
    "worstCompactness": 0.5401,
    "worstConcavity": 0.539,
    "worstConcavePoints": 0.206,
    "worstSymmetry": 0.4378,
    "worstFractalDimension": 0.1072
}

input_json = json.dumps(input_data_for_model)

response = requests.post(url, data=input_json)
print(response.text)

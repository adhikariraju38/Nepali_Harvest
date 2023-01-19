1. Git is maintain
2. for seasonal based prediction
    a. data is taken from kaggle
    b. data is preprocessed
    c. pipeline is steup
    d. prediction is made
    e. index.html is hosted using flask
2. for doctor doctor
    a. image data of kaggle wis takem
    b. preprocessing and othe data cleaning was done on kaggle.
    c. pytorch model is downloaded
    d. model is config to run locally
    e. flask sever is hosted

3. postman api testing
    a. then we merge both api ie. seasonal product detection and plant doctor
    b. them we test that api on postmann
    c. predict that will give which product is best to show on that temperature
    ```
    {
    "prediction": "mango",
    "probability": [
        0.0,
        0.06,
        0.09,
        0.0,
        0.01,
        0.04,
        0.0,
        0.0,
        0.14,
        0.0,
        0.01,
        0.07,
        0.23,
        0.01,
        0.01,
        0.0,
        0.0,
        0.21,
        0.1,
        0.02,
        0.0,
        0.0
    ]
}
```
    d. and also predict_json to test disease in image
    and output will look like
    ```
    {
    "image_url": "/static/image.jpg",
    "prediction": "Apple___Cedar_apple_rust"
    }
    ```
    e. ml implemented

4. ml done for flask web based server


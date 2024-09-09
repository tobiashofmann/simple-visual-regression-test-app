report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Sflight_Startpage_0_document_0_desktop.png",
        "test": "../bitmaps_test/20240906-151811/backstop_default_Sflight_Startpage_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Sflight_Startpage_0_document_0_desktop.png",
        "label": "Sflight Startpage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4004/travel_processor/webapp/index.html?sap-language=en",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.020751953125,
          "misMatchPercentage": "0.02",
          "analysisTime": 26
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Sflight_Tavel_4132_0_document_0_desktop.png",
        "test": "../bitmaps_test/20240906-151811/backstop_default_Sflight_Tavel_4132_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Sflight_Tavel_4132_0_document_0_desktop.png",
        "label": "Sflight Tavel 4132",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4004/travel_processor/webapp/index.html?sap-language=en#/Travel(4132)",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Sflight_Tavel_4052_Detail_Booking_0_document_0_desktop.png",
        "test": "../bitmaps_test/20240906-151811/backstop_default_Sflight_Tavel_4052_Detail_Booking_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Sflight_Tavel_4052_Detail_Booking_0_document_0_desktop.png",
        "label": "Sflight Tavel 4052 Detail Booking",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4004/travel_processor/webapp/index.html?sap-language=en#/Travel(TravelUUID='75757221A8E4645C17002DF03754AB66',IsActiveEntity=true)/to_Booking(BookingUUID='39997221A8E4645C17002DF03754AB66',IsActiveEntity=true)",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});
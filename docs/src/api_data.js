define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/events",
    "title": "Get list of events",
    "name": "GetEvents",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_time",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_time",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_time",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_time",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"results\":[\n    {\n      \"id\":1,\n      \"name\":\"Romantic Spots for Honeymoons\",\n      \"location\":\"tokyo\",\n      \"start_time\":\"2020-10-16T12:56:35.161Z\",\n      \"end_time\":\"2020-12-15T12:56:35.161Z\",\n      \"created_at\":\"2020-11-15T12:56:35.171Z\",\n      \"updated_at\":\"2020-11-15T12:56:35.171Z\"\n    }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl http://localhost:3000/api/v1/events",
        "type": "bash"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "DELETE",
    "url": "/api/v1/events/:event_id/participants",
    "title": "Delete an event",
    "name": "DELETE",
    "group": "Participants",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from authenticate api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer TOKEN\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -X DELETE http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'",
        "type": "bash"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p><code>ok</code> if everything went fine.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/participants.js",
    "groupTitle": "Participants"
  },
  {
    "type": "GET",
    "url": "/api/v1/participants",
    "title": "Get participants by user",
    "name": "GET",
    "group": "Participants",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from authenticate api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer TOKEN\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -X GET http://localhost:3000/api/v1/participants -H 'Authorization: Bearer TOKEN'",
        "type": "bash"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"results\":[\n  {\n    \"id\":1,\n    \"user_id\":1,\n    \"event_id\":1,\n    \"created_at\":\"2020-11-15T12:57:02.630Z\",\n    \"updated_at\":\"2020-11-15T12:57:02.630Z\"\n  }\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/participants.js",
    "groupTitle": "Participants"
  },
  {
    "type": "get",
    "url": "/api/v1/events/:event_id/participants",
    "title": "Get participants by event",
    "name": "Get",
    "group": "Participants",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from authenticate api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer TOKEN\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -X GET http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'",
        "type": "bash"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"results\":[\n  {\n    \"id\":1,\n    \"user_id\":1,\n    \"event_id\":1,\n    \"created_at\":\"2020-11-15T12:57:02.630Z\",\n    \"updated_at\":\"2020-11-15T12:57:02.630Z\"\n  }\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/participants.js",
    "groupTitle": "Participants"
  },
  {
    "type": "POST",
    "url": "/api/v1/events/:event_id/participants",
    "title": "Join an event",
    "name": "POST",
    "group": "Participants",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from authenticate api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer TOKEN\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -X POST http://localhost:3000/api/v1/events/1/participants -H 'Authorization: Bearer TOKEN'",
        "type": "bash"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n  \"results\":{\n    \"id\":4,\n    \"user_id\":1,\n    \"event_id\":4,\n    \"created_at\":\"2020-11-16T22:28:55.652Z\",\n    \"updated_at\":\"2020-11-16T22:28:55.652Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "doc/participants.js",
    "groupTitle": "Participants"
  },
  {
    "type": "get",
    "url": "/api/v1/users",
    "title": "Get user",
    "name": "GetEvents",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n \"results\": {\n   \"id\": 1,\n   \"email\": \"john.doe@example.com\",\n   \"created_at\": \"2020-11-15T12:56:35.951Z\",\n   \"updated_at\": \"2020-11-15T12:56:35.951Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from authenticate api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization: Bearer TOKEN\"",
          "type": "Header"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl http://localhost:3000/api/v1/users -H 'Authorization: Bearer TOKEN'",
        "type": "bash"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/v1/authenticate",
    "title": "Get auth_token",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Api key of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"auth_token\": \"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOjE2MDU1NjgxNzl9.MOirZDwT_UtTpZBFufmISlEcc8FViIYNnR-3GSvp4BM\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Curl example",
        "content": "curl -X POST http://localhost:3000/api/v1/authenticate \\\n-H 'content-type: multipart/form-data' \\\n-F 'email=john.doe@example.com' -F 'password=test123'",
        "type": "bash"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/authenticate.js",
    "groupTitle": "User"
  }
] });

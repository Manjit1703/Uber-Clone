# User Registration API Documentation

## POST /users/register

### Description
Registers a new user by validating the provided data. A token and user details are returned upon successful registration.

### Request Body
- **fullname**: Object containing:
  - **firstname**: Required, string, minimum 3 characters.
  - **lastname**: Optional, string, minimum 3 characters if provided.
- **email**: Required, string, valid email format, minimum 5 characters.
- **password**: Required, string, minimum 6 characters.

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  - `token`: Authentication token.
  - `user`: Object containing the registered user's details.

#### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**:
  - `errors`: Array of validation error objects.

## POST /users/login

### Description
Authenticates a user using the email and password. Returns an authentication token and user details upon successful login.

### Request Body
- **email**: Required, string, valid email format.
- **password**: Required, string.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  - `token`: Authentication token.
  - `user`: Object containing the user's details.

#### Invalid Credentials or Validation Error
- **Status Code**: 401 or 400
- **Response Body**:
  - For invalid credentials: `{ "error": "Invalid email or password" }`
  - For validation errors: `{ "errors": [ ... ] }`

## GET /users/profile

### Description
Retrieves the authenticated user's profile. Requires a valid authentication token sent via cookies or authorization header.

### Headers
- Authorization: Bearer {token} (optional if using cookies)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:  
```json
{
  "required": { /* user profile details */ }
}
```

#### Error
- **Status Code**: 401 Unauthorized  
- **Response Body**:  
```json
{ "error": "unauthorized" }
```

## GET /users/logout

### Description
Logs out the authenticated user by clearing the token cookie and blacklisting the token.

### Headers
- Authorization: Bearer {token} (optional if using cookies)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:  
```json
{ "message": "Logout successfully" }
```

#### Error
- **Status Code**: 401 Unauthorized  
- **Response Body**:  
```json
{ "error": "unauthorized" }
```

# Captain Registration API Documentation

## POST /captains/register

### Description
Registers a new captain along with vehicle details. On success, returns an authentication token and the registered captain's details.

### Request Body
- **fullname** *(object)*: Contains:
  - **firstname**: Required, string, minimum 3 characters.
  - **lastname**: Optional, string, minimum 3 characters if provided.
- **email**: Required, string, must be a valid email address.
- **password**: Required, string, minimum 6 characters.
- **vehicle** *(object)*: Contains:
  - **color**: Required, string, minimum 3 characters.
  - **plate**: Required, string, minimum 3 characters.
  - **capacity**: Required, number, must be at least 1.
  - **vehicleType**: Required, string, valid values: "car", "motorcycle", "auto".

#### Example Request
```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ789",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success Response
- **Status Code**: 201 Created
- **Response Body**:
```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ789",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "_id": "captain_id_here"
  }
}
```

#### Error Responses

##### Validation Error
- **Status Code**: 400 Bad Request
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

##### Captain Already Exists
- **Status Code**: 400 Bad Request
- **Response Body**:
```json
{
  "message": "Captain already exists"
}
```

##### Server Error
- **Status Code**: 500 Internal Server Error
- **Response Body**:
```json
{
  "message": "Internal server error message"
}
```


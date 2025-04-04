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


# RBAC Service (Role-Based Access Control)

## 📌 Overview

This project is a **centralized RBAC (Role-Based Access Control) service** built using **Node.js, Express, TypeScript, and MongoDB**.

It is responsible for:

* Managing roles
* Assigning roles to users
* Checking permissions (allow/deny)

> ⚠️ Authentication (SSO) is NOT handled here.

---

## 🧠 Core Concept

```
userId + tenantId + clientId → role → permissions → allow/deny
```

---

## 🏗️ Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB (Mongoose)
* JWT (for identity verification)

---

## 📁 Project Structure

```
src/
├── controllers/
├── routes/
├── validators/
├── services/
├── repositories/
├── models/
├── engine/
├── middleware/
├── config/
└── index.ts
```

---

## 🔐 JWT (Mock SSO)

Since SSO is not implemented, we use a **manually generated JWT**.

### Sample Payload:

```json
{
  "sub": "u123",
  "tenantId": "tata",
  "sessionId": "sess1",
  "deviceId": "dev1",
  "iss": "baalvion-auth",
  "aud": "baalvion-platform"
}
```

### Secret:

```
secret
```

---

## 📡 APIs

### 1. Create Role

POST `/role/create`

```json
{
  "name": "admin",
  "clientId": "dashboard",
  "permissions": ["user:manage", "read:*"]
}
```

---

### 2. Assign Role

POST `/role/assign`

```json
{
  "userId": "u123",
  "tenantId": "tata",
  "clientId": "dashboard",
  "roleId": "ROLE_ID"
}
```

---

### 3. Get User Roles

GET `/role/user/:userId`

---

### 4. Check Permission

POST `/permission/check`

```json
{
  "action": "user:manage",
  "clientId": "dashboard"
}
```

---

## 🔄 Flow

```
User (via SSO)
      ↓
JWT Token
      ↓
RBAC Service
      ↓
Fetch Role (userId + tenantId + clientId)
      ↓
Check Permissions
      ↓
Allow / Deny
```

---

## 🧪 Testing Steps

1. Generate JWT manually (jwt.io or script)
2. Add token in Postman:

   ```
   Authorization: Bearer <token>
   ```
3. Create role
4. Assign role
5. Call permission check API

---

## ✅ Example

### Request:

```json
{
  "action": "user:manage",
  "clientId": "dashboard"
}
```

### Response:

```json
{
  "allowed": true
}
```

---

## ⚠️ Important Notes

* Roles are **client-specific**
* Role assignment is **tenant-aware**
* JWT is only used for identity (not authority)
* RBAC service is the **single source of truth**

---

## 🎯 Summary

* SSO → identifies user
* RBAC → decides what user can do

---
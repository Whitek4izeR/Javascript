/* Link Souce: https://chatgpt.com/share/699c6c67-eb30-800b-8f1c-1470235b1ddd
.
TL;DR = “Too Long; Didn’t Read”

It’s a short summary placed at the top (or bottom) of long content.

Purpose:
Give the main takeaway in 1–3 lines so readers don’t need to read everything.
*/

/* 
🧹 Comprehensive Guide: Data Normalization & Cleaning in JavaScript
TL;DR

A. Cleaning → Fix incorrect, inconsistent, missing, duplicated data.

B. Normalization → Standardize formats (dates, phone, casing, numbers, schema).

Use reusable utility functions + schema-based transformation.

Always validate, sanitize, deduplicate, and standardize before storing.

1️⃣ Core Concepts

- Data Cleaning
- Remove duplicates
- Handle missing/null values
- Trim whitespace
- Fix casing inconsistencies
- Remove invalid characters
- Validate types
- Fix malformed values (email, phone, dates)
- Data Normalization
- Convert values to standard formats
- Convert dates → ISO 8601
- Convert strings → consistent case
- Convert numbers → proper numeric type
- Map inconsistent keys → canonical schema
- Normalize nested objects
2️⃣ Common Cleaning & Normalization Utilities
📁 src/utils/dataNormalization.js
*/

// 2️⃣ Common Cleaning & Normalization Utilities
// 📁 src/utils/dataNormalization.js 


// </> Javascript
'use strict';

/**
 * Utility functions for cleaning and normalizing data.
 * Designed for robust backend/frontend data pipelines.
 */

/* ============================= */
/* Type & Value Utilities        */
/* ============================= */

/**
 * Checks if value is null or undefined.
 */
function isNil(value) {
  return value === null || value === undefined;
}

/**
 * Safely converts value to string.
 */
function toSafeString(value) {
  if (isNil(value)) return '';
  return String(value).trim();
}

/**
 * Safely converts value to number.
 */
function toSafeNumber(value, defaultValue = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : defaultValue;
}

/**
 * Safely converts value to boolean.
 */
function toSafeBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['true', '1', 'yes'].includes(value.toLowerCase());
  }
  return Boolean(value);
}

/* ============================= */
/* String Normalization          */
/* ============================= */

/**
 * Normalize casing.
 */
function normalizeCase(str, mode = 'lower') {
  const value = toSafeString(str);

  switch (mode) {
    case 'upper':
      return value.toUpperCase();
    case 'capitalize':
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    case 'title':
      return value
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    default:
      return value.toLowerCase();
  }
}

/**
 * Remove extra whitespace.
 */
function removeExtraSpaces(str) {
  return toSafeString(str).replace(/\s+/g, ' ');
}

/**
 * Remove special characters.
 */
function removeSpecialChars(str) {
  return toSafeString(str).replace(/[^\w\s]/gi, '');
}

/* ============================= */
/* Email & Phone Normalization   */
/* ============================= */

/**
 * Normalize email.
 */
function normalizeEmail(email) {
  return normalizeCase(removeExtraSpaces(email), 'lower');
}

/**
 * Normalize phone number (digits only).
 */
function normalizePhone(phone) {
  return toSafeString(phone).replace(/\D/g, '');
}

/* ============================= */
/* Date Normalization            */
/* ============================= */

/**
 * Normalize date to ISO string.
 */
function normalizeDate(date) {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return null;
  return parsed.toISOString();
}

/* ============================= */
/* Object Cleaning               */
/* ============================= */

/**
 * Remove null or undefined keys.
 */
function removeEmptyFields(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => !isNil(v))
  );
}

/**
 * Deep clean object recursively.
 */
function deepCleanObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCleanObject);
  }

  if (obj !== null && typeof obj === 'object') {
    const cleaned = {};
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === 'object') {
        cleaned[key] = deepCleanObject(value);
      } else {
        cleaned[key] = value;
      }
    }
    return removeEmptyFields(cleaned);
  }

  return obj;
}

/* ============================= */
/* Deduplication                 */
/* ============================= */

/**
 * Remove duplicates from array of objects by key.
 */
function deduplicateByKey(arr, key) {
  const seen = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

/* ============================= */
/* Schema Normalization          */
/* ============================= */

/**
 * Normalize object based on schema mapping.
 * schema = { newKey: oldKey }
 */
function normalizeSchema(data, schema) {
  const normalized = {};
  for (const newKey in schema) {
    const oldKey = schema[newKey];
    normalized[newKey] = data[oldKey];
  }
  return normalized;
}

module.exports = {
  isNil,
  toSafeString,
  toSafeNumber,
  toSafeBoolean,
  normalizeCase,
  removeExtraSpaces,
  removeSpecialChars,
  normalizeEmail,
  normalizePhone,
  normalizeDate,
  removeEmptyFields,
  deepCleanObject,
  deduplicateByKey,
  normalizeSchema
};

// 3️⃣ Example: Full Data Cleaning Pipeline
// 📁 src/services/userDataPipeline.js

// </> Javascript

3️⃣ Example: Full Data Cleaning Pipeline
📁 src/services/userDataPipeline.js
'use strict';

const {
  normalizeEmail,
  normalizePhone,
  normalizeDate,
  normalizeCase,
  toSafeNumber,
  deepCleanObject,
  deduplicateByKey
} = require('../utils/dataNormalization');

/**
 * Full user data normalization pipeline.
 */
function normalizeUser(user) {
  return deepCleanObject({
    id: toSafeNumber(user.id),
    firstName: normalizeCase(user.first_name, 'capitalize'),
    lastName: normalizeCase(user.last_name, 'capitalize'),
    email: normalizeEmail(user.email),
    phone: normalizePhone(user.phone),
    birthDate: normalizeDate(user.birth_date),
    isActive: Boolean(user.is_active)
  });
}

/**
 * Process list of users.
 */
function processUsers(users) {
  const cleaned = users.map(normalizeUser);
  return deduplicateByKey(cleaned, 'email');
}

module.exports = {
  normalizeUser,
  processUsers
};


/*

4️⃣ Handling Missing Data Strategies
Strategy	When to Use
Default values	Required fields
Null fallback	Optional fields
Remove record	Critical corruption
Log & flag	Monitoring pipelines

*/

// Example:
// </> Javascript

function withDefault(value, fallback) {
  return isNil(value) ? fallback : value;
}


/* 5️⃣ Advanced Normalization Techniques
1. Unicode Normalization */
// </> Javscript

function normalizeUnicode(str) {
  return toSafeString(str).normalize('NFC');
}

// 2. Slug Generation
// </> Javscript

function slugify(text) {
  return toSafeString(text)
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// 3. Deep Key Standardization
// </> Javscript

Convert snake_case → camelCase:

function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

/* 6️⃣ Validation Layer (Recommended)

Use libraries:

zod

joi

yup

validator.js

Example (Zod): */

// </> Javascript

const { z } = require('zod');

const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  phone: z.string().min(10)
});

/*

7️⃣ Production Best Practices

✔ Normalize at API boundary
✔ Clean before DB write
✔ Keep raw copy if needed
✔ Log discarded records
✔ Validate after normalization
✔ Make utilities pure functions
✔ Unit test edge cases

8️⃣ Edge Cases You Must Handle

" NULL " string

"undefined" string

Empty arrays

Mixed type arrays

Very large numbers

Timezone differences

Non-UTF8 characters

Duplicate nested objects

Missing nested keys

9️⃣ Example Edge Case Test */

// </> Javascript

const dirtyUser = {
  id: "12",
  first_name: "  JOHN ",
  last_name: "doe",
  email: " JOHN@Example.COM ",
  phone: "(123) 456-7890",
  birth_date: "1990/01/01",
  is_active: "true"
};

console.log(normalizeUser(dirtyUser));

/* 🔥 Summary Architecture

Input Data
   ↓
Schema Mapping
   ↓
Type Conversion
   ↓
String Cleaning
   ↓
Format Normalization
   ↓
Validation
   ↓
Deduplication
   ↓
Clean Output */


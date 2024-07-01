export const Inputs = [
  {
    id: 0,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage: "Please fill your name (3-30 characters, letters, numbers, and spaces only)",
    label: "Your Name",
    pattern: "^[A-Za-z0-9 ]{3,30}$",
    required: true,
  },
  {
    id: 1,
    name: "college",
    type: "text",
    placeholder: "College",
    errorMessage: "Please fill your college name (3-16 characters, letters, and numbers only)",
    label: "Your College Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "number",
    type: "text",
    placeholder: "Mobile Number",
    errorMessage: "Please fill your mobile number (3-16 characters, letters, and numbers only)",
    label: "Mobile Number",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email Address",
    errorMessage: "Please fill a valid email address",
    label: "Email Address",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    required: true,
  },
];
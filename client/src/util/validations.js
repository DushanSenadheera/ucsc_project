export const validations = {
  name: {
    required: 'Name is required'
  },
  message: {
    required: 'Message is required'
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address'
    }
  },
  password: {
    required: 'Password is required'
  },
  text: {
    required: 'Name is required'
  },
  mobile: {
    required: 'Number is required',
    pattern: {
      value: /^\d+$/,
      message: 'Invalid number'
    }
  },
};
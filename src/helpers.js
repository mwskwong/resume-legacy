const emailRegex = /^\w[\w.-]*@([\w-]+\.)+[\w-]+$/;

export const isEmailValid = email => emailRegex.test(email);
export const isValueEmpty = value => !value;
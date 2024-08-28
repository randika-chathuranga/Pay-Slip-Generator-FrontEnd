// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl: "http://localhost:8080/api/auth/signin",
  forgotPasswordUrl: "http://localhost:8080/api/auth/forgot-password",
  otpVerificationUrl:"http://localhost:8080/api/auth/otp-verification",
  changePasswordUrl: "http://localhost:8080/api/auth/reset-password",
  addEmployeeDetailsUrl:"http://localhost:8080/api/xpay/employees",
  getEmployeeCountUrl: "http://localhost:8080/api/xpay/employees/count",
  templates:"http://localhost:8080/api/templates",
  templateParameters:"http://localhost:8080/api/templates-parameters/find?templateId=",
  generatePdf:"http://localhost:8080/api/pdf",
  showrequest:"http://localhost:8080/api/xpay/requests",
  viewAllPayslips: "http://localhost:8080/api/payslips?eno=E123&page=0&size=4&sort=eno,asc",
  downloadPayslip: "http://localhost:8080/api/payslips/download?id=63775a5fd859697ac3f8c9ae",
  addEmployeeUrl: "http://localhost:8080/api/xpay/employees",
  sendRequest: "http://localhost:8080/api/xpay/requests",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

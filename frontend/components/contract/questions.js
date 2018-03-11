export default [
  {
    title: 'Parties',
    body: 'Are you the landlord or tenant?',
    radioButtons: ['Landlord', 'Tenant'],
    radioButtonState: 'party'
  },
  {
    title: 'Lease Type',
    body: 'Select lease type',
    radioButtons: ['Month-to-month', '1-year-lease'],
    radioButtonState: 'leaseType'
  },
  {
    title: 'Effective Date',
    body: 'Select lease start date:',
    dateField: true,
    dateButtonState: 'effectiveDate'
  },
  {
    title: 'Notice-to-Vacate',
    body:
      'A landlord or tenant must give a minimum period of notice when ending a periodic tenancy. What is the notice period?',
    textFields: ['Days'],
    textFieldStates: ['vacateNotice']
  },
  {
    title: 'Property Type',
    body: 'Select property type from the options below',
    radioButtons: ['Apartment', 'Condominium', 'House', 'Room'],
    radioButtonState: 'propertyType'
  },
  {
    title: 'Address',
    body: "Provide the leased property's address:",
    textFields: [
      'Street Address',
      'Address Line 2',
      'City',
      'State',
      'Zip Code'
    ],
    textFieldStates: [
      'propertyStreetAddress',
      'propertyAddressLine2',
      'propertyCity',
      'propertyState',
      'propertyZipCode'
    ]
  },
  {
    title: 'Furniture Status',
    body: 'Is the property going to be furnished throughout the lease period?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'furnished'
  },
  {
    title: 'Parking Status',
    body: 'Is parking provided throughout the lease period?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'parkingAvailable'
  },
  {
    title: 'Rent Amount',
    body: 'What is the rent amount requied to be paid on a monthtly basis?',
    textFields: ['$'],
    textFieldStates: ['rentAmount']
  },
  {
    title: 'Rent Due Date',
    textFields: [
      'The rent is due for the entire lease term, in equal payments, on which day of the month?'
    ],
    textFieldStates: ['rentDueDate']
  },
  {
    title: 'Payment Method',
    body: 'Select payment method from the options below:',
    radioButtons: [
      "ACH - Electronic payment made from the tenant's bank account",
      'Check',
      'PayPal',
      'Venmo'
    ],
    radioButtonState: 'paymentMethod'
  },
  {
    title: 'Deposit terms',
    body: 'Is the tenant required to pay a deposit?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'depositRequired',
    textFields: ['What is the deposit amount?'],
    textFieldStates: ['depositAmount'],
    dateField: "Select the deposit's due date:",
    dateButtonState: 'depositDueDate'
  },
  {
    title: "First and Last month's Payment Requirements",
    body:
      'In addition to the desposit, what is the tenant required to pay upon move-in?',
    radioButtons: ["First month's rent only", "First and last month's rent"],
    radioButtonState: 'firstLastMonthRequirements'
  },
  {
    title: 'Late Fees',
    body:
      'Is the tenant subject to late payment fees if rent is not paid by the due date?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'lateFee',
    textFields: ['What do the late fees amount to?'],
    textFieldStates: ['lateFeeAmount']
  },
  {
    title: 'Utilities',
    body: 'Is the tenant required to pay for utilities?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'utilityBillsIncluded'
  },
  {
    title: 'Pet Policy',
    body: 'Is the tenant allowed to have pets on the leased premises?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'petsAllowed'
  },
  {
    title: 'Subletting Policy',
    body:
      'Is the tenant allowed to fully or partially sublease the leased property?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'sublettingAllowed'
  },
  {
    title: 'Guests',
    body: 'Is the tenant allowed to have guests stay overnight?',
    radioButtons: ['Yes', 'No'],
    radioButtonState: 'guestsAllowed'
  },
  {
    title: 'Scheduled Signing Date',
    dateField: 'Select lease signing date:',
    dateButtonState: 'scheduledSigningDate'
  }
];

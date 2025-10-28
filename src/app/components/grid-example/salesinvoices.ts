export const RegieSalesInvoice = {
  id: 37,
  customer: {
    number: "CUST6",
    name: "Customer F",
    objectId: null,
    objectAddress: null,
    invoiceAddress: "address",
    emailAddress: "some-email@some-domain.com",
    shippingMethod: "EInvoice",
    vatNumber: "some-vat-number",
    additionalName: null,
    emailAddressesCc: null,
    isFiscalUnity: false,
    peppolId: "some-invoice-delivery-id"
  },
  customerContracts: [
    {
      contractCode: "CL011",
      contractNumber: "S04845",
      customerNumber: "CUST6",
      customerName: "Customer F",
      paymentCondition: {
        code: "007",
        description: "Betaling binnen 7 dagen",
        nrOfDays: 7
      },
      vatTransferred: true,
      wagesPercentage: 10,
      status: "Open"
    },
    {
      contractCode: "CL012",
      contractNumber: "S04845",
      customerNumber: "CUST6",
      customerName: "Customer F",
      paymentCondition: {
        code: "030",
        description: "Betaling binnen 30 dagen",
        nrOfDays: 30
      },
      vatTransferred: false,
      wagesPercentage: 0,
      status: "Open"
    }
  ],
  project: {
    code: "S04845",
    name: "Project A",
    financialCompanyName: "Financial Company A",
    financialCompanyNumber: "251",
    projectManagerName: "Piet Projectleider",
    foremanName: null,
    mainCustomerNumber: "CUST1"
  },
  invoice: {
    number: "INV37",
    orderNumber: "",
    workOrderNumber: null,
    referenceNumber: "13424",
    description: "",
    invoicingMethod: "Regie",
    state: "FullyPaid",
    stateDisplayName: "Betaald",
    stateChangedBy: "LN",
    invoiceType: "Debet",
    wageSumMethod: "Total",
    invoiceDate: "2025-10-19T22:00:00.000Z",
    expirationDate: "2025-10-26T23:00:00.000Z",
    contactPersonEmployeeId: "E003",
    contactPersonName: "Piet Projectleider",
    assignedToEmployeeId: "E003",
    assignedToName: "Piet Projectleider",
    paymentConditionCode: "007",
    paymentConditionDescription: "Betaling binnen 7 dagen",
    paymentConditionNumberOfDays: 7,
    vatTransferred: true,
    gAccountPercentage: 10,
    wagesPercentage: 10,
    isPaidInAdvance: false,
    totalAmountExclVAT: 536,
    totalVATAmount: 0,
    totalAmountInclVAT: 536,
    financialCompanyNumber: "251",
    note: "",
    contractLine: "CL011",
    debetSalesInvoiceNumber: null,
    invoiceDeliveryTrackingId: "",
    activityCode: null
  },
  salesInvoiceLines: [
    {
      id: 34,
      invoicingMethod: 200,
      sequenceNumber: 0,
      description: "fdfs",
      note: "",
      unitOfMeasureCode: "uur",
      quantity: 1,
      pricePerUnit: 536,
      totalVATAmount: 48.24,
      totalAmountExclVAT: 536,
      totalAmountInclVAT: 584.24,
      vat: {
        id: 13,
        type: "Transferred",
        displayText: "Laag (verlegd)",
        lnCode: "04",
        percentage: 9,
        description: "BTW Verlegd Laag",
        invoiceAndSubtotalText: "9% verlegd"
      },
      termNumber: null,
      termContractLineCode: null,
      termContractLineNumber: null,
      activityCode: "W0002",
      articleCode: "100",
      articleCategory: "Task",
      activityId: "W0002,S04845"
    }
  ],
  attachments: [],
  creditedBySalesInvoices: []
}
export const WorkOrderSalesInvoice = {
  id: 37,
  customer: {
    number: "CUST6",
    name: "Customer F",
    objectId: null,
    objectAddress: null,
    invoiceAddress: "address",
    emailAddress: "some-email@some-domain.com",
    shippingMethod: "EInvoice",
    vatNumber: "some-vat-number",
    additionalName: null,
    emailAddressesCc: null,
    isFiscalUnity: false,
    peppolId: "some-invoice-delivery-id"
  },
  customerContracts: [
    {
      contractCode: "CL011",
      contractNumber: "S04845",
      customerNumber: "CUST6",
      customerName: "Customer F",
      paymentCondition: {
        code: "007",
        description: "Betaling binnen 7 dagen",
        nrOfDays: 7
      },
      vatTransferred: true,
      wagesPercentage: 10,
      status: "Open"
    },
    {
      contractCode: "CL012",
      contractNumber: "S04845",
      customerNumber: "CUST6",
      customerName: "Customer F",
      paymentCondition: {
        code: "030",
        description: "Betaling binnen 30 dagen",
        nrOfDays: 30
      },
      vatTransferred: false,
      wagesPercentage: 0,
      status: "Open"
    }
  ],
  project: {
    code: "S04845",
    name: "Project A",
    financialCompanyName: "Financial Company A",
    financialCompanyNumber: "251",
    projectManagerName: "Piet Projectleider",
    foremanName: null,
    mainCustomerNumber: "CUST1"
  },
  invoice: {
    number: "INV37",
    orderNumber: "",
    workOrderNumber: "WON1",
    referenceNumber: "13424",
    description: "",
    invoicingMethod: "Regie",
    state: "FullyPaid",
    stateDisplayName: "Betaald",
    stateChangedBy: "LN",
    invoiceType: "Debet",
    wageSumMethod: "Total",
    invoiceDate: "2025-10-19T22:00:00.000Z",
    expirationDate: "2025-10-26T23:00:00.000Z",
    contactPersonEmployeeId: "E003",
    contactPersonName: "Piet Projectleider",
    assignedToEmployeeId: "E003",
    assignedToName: "Piet Projectleider",
    paymentConditionCode: "007",
    paymentConditionDescription: "Betaling binnen 7 dagen",
    paymentConditionNumberOfDays: 7,
    vatTransferred: true,
    gAccountPercentage: 10,
    wagesPercentage: 10,
    isPaidInAdvance: false,
    totalAmountExclVAT: 536,
    totalVATAmount: 0,
    totalAmountInclVAT: 536,
    financialCompanyNumber: "251",
    note: "",
    contractLine: "CL011",
    debetSalesInvoiceNumber: null,
    invoiceDeliveryTrackingId: "",
    activityCode: null
  },
  salesInvoiceLines: [
    {
      id: 34,
      invoicingMethod: 200,
      sequenceNumber: 0,
      description: "fdfs",
      note: "",
      unitOfMeasureCode: "uur",
      quantity: 1,
      pricePerUnit: 536,
      totalVATAmount: 48.24,
      totalAmountExclVAT: 536,
      totalAmountInclVAT: 584.24,
      vat: {
        id: 13,
        type: "Transferred",
        displayText: "Laag (verlegd)",
        lnCode: "04",
        percentage: 9,
        description: "BTW Verlegd Laag",
        invoiceAndSubtotalText: "9% verlegd"
      },
      termNumber: null,
      termContractLineCode: null,
      termContractLineNumber: null,
      activityCode: "W0002",
      articleCode: "100",
      articleCategory: "Task",
      activityId: "W0002,S04845"
    }
  ],
  attachments: [],
  creditedBySalesInvoices: []
}

export const TermijnSalesInvoice = {
  id: 41,
  customer: {
    number: "CUST4",
    name: "Customer D",
    objectId: null,
    objectAddress: null,
    invoiceAddress: "address",
    emailAddress: "some-email@some-domain.com",
    shippingMethod: "EMail",
    vatNumber: "some-vat-number",
    additionalName: null,
    emailAddressesCc: null,
    isFiscalUnity: false,
    peppolId: "some-invoice-delivery-id"
  },
  customerContracts: [
    {
      contractCode: "CL007",
      contractNumber: "B00723",
      customerNumber: "CUST4",
      customerName: "Customer D",
      paymentCondition: {
        code: "007",
        description: "Betaling binnen 7 dagen",
        nrOfDays: 7
      },
      vatTransferred: false,
      wagesPercentage: 0,
      status: "Open"
    }
  ],
  project: {
    code: "B00723",
    name: "Project A",
    financialCompanyName: "Financial Company A",
    financialCompanyNumber: "251",
    projectManagerName: "Piet Projectleider",
    foremanName: null,
    mainCustomerNumber: "CUST4"
  },
  invoice: {
    number: "CON00000041",
    orderNumber: "",
    workOrderNumber: null,
    referenceNumber: "",
    description: "",
    invoicingMethod: "Termijn",
    state: "Concept",
    stateDisplayName: "Concept",
    stateChangedBy: "Piet Projectleider",
    invoiceType: "Debet",
    wageSumMethod: "",
    invoiceDate: "2025-10-22T22:00:00.000Z",
    expirationDate: "2025-10-29T23:00:00.000Z",
    contactPersonEmployeeId: "E003",
    contactPersonName: "Piet Projectleider",
    assignedToEmployeeId: "E003",
    assignedToName: "Piet Projectleider",
    paymentConditionCode: "007",
    paymentConditionDescription: "Betaling binnen 7 dagen",
    paymentConditionNumberOfDays: 7,
    vatTransferred: false,
    gAccountPercentage: 0,
    wagesPercentage: 0,
    isPaidInAdvance: false,
    totalAmountExclVAT: 123,
    totalVATAmount: 11.07,
    totalAmountInclVAT: 134.07,
    financialCompanyNumber: "251",
    note: "",
    contractLine: "CL007",
    debetSalesInvoiceNumber: null,
    invoiceDeliveryTrackingId: null,
    activityCode: null
  },
  salesInvoiceLines: [
    {
      id: 39,
      invoicingMethod: 100,
      sequenceNumber: 0,
      description: "1",
      note: "",
      unitOfMeasureCode: "pst",
      quantity: 1,
      pricePerUnit: 123,
      totalVATAmount: 11.07,
      totalAmountExclVAT: 123,
      totalAmountInclVAT: 134.07,
      vat: {
        id: 9,
        type: "Normal",
        displayText: "Laag",
        lnCode: "02",
        percentage: 9,
        description: "BTW Laag",
        invoiceAndSubtotalText: "9%"
      },
      termNumber: 1,
      termContractLineCode: "CL007",
      termContractLineNumber: "B00723",
      activityCode: null,
      articleCode: null,
      articleCategory: null,
      termId: "B00723,CL007,1"
    }
  ],
  attachments: [],
  creditedBySalesInvoices: []
}

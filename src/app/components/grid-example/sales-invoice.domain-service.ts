import { computed, Injectable, OnDestroy, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SalesInvoiceInvoicingMethod } from "./sales-invoice-invoicing-method";
import { RegieSalesInvoice } from "./salesinvoices";


@Injectable({
  providedIn: 'root',
})
export class SalesInvoiceDomainService implements OnDestroy {

  #form?: FormGroup<{
    customer: any;
    invoice?: any;
  }>;
  #formValueChange?: Subscription;

  salesInvoice = signal<any>(RegieSalesInvoice);

  project = computed<any | null>(() => this.salesInvoice()?.project ?? null);

  salesInvoiceForm = computed<any | null>(() => {
    const salesInvoice = this.salesInvoice();
    if (salesInvoice == null) {
      return null;
    }
    return salesInvoice.toFormModel();
  });

  contractLines = signal<any[]>([]);

  articles = signal<any[]>([]);
  readonly #articlesIdMap = computed(() => Object.fromEntries(this.articles().map((model) => [model.code, model])));

  projectActivities = signal<any[]>([]);
  readonly #projectActivitiesIdMap = computed(() => Object.fromEntries(this.projectActivities().map((model) => [model.id, model])));

  projectTerms = signal<any[]>([]);
  readonly #projectTermsIdMap = computed(() => Object.fromEntries(this.projectTerms().map((model) => [model.id, model])));

  vat = signal<any[]>([]);
  readonly #vatIdMap = computed(() => Object.fromEntries(this.vat().map((model) => [model.id, model])));

  isWorkOrder = computed(() => !!this.salesInvoice()?.invoice.workOrderNumber);

  initialVatTransferredState = false;

  constructor() {
    this.init("", undefined)
  }

  async init(
    id: string,
    form?: FormGroup<{
      customer: any;
      invoice?: any;
    }>
  ) {
    await this.getData();

    this.#form = form;

    if (this.#form != null) {
      const salesInvoice = this.salesInvoiceForm();
      if (salesInvoice != null) {
        this.#form.setValue({
          customer: salesInvoice.customer,
          invoice: salesInvoice.invoice,
        });
        this.#form.markAsPristine();

        // Store the initial state of the VAT transferred field
        this.initialVatTransferredState = salesInvoice.invoice.vatTransferred;

        this.#formValueChange = this.#form.valueChanges.subscribe((value: any) => {
          const currentSalesInvoice = this.salesInvoice();
          if (currentSalesInvoice == null) {
            return;
          }
          const updatedSalesInvoice = currentSalesInvoice.clone();
          updatedSalesInvoice.fromFormModel(value);
          this.salesInvoice.set(updatedSalesInvoice);
        });
      }
    }
  }

  ngOnDestroy() {
    if (this.#formValueChange != null) {
      this.#formValueChange.unsubscribe();
    }
  }

  async getData() {
    if (this.salesInvoice() === null) {
      return;
    }

    await this.#getVats();
    switch (this.salesInvoice()?.invoice.invoicingMethod) {
      case SalesInvoiceInvoicingMethod.Termijn: {
        const customerNumber = this.salesInvoice()?.customer?.number;
        if (customerNumber) {
          await this.#getProjectTerms();
          await this.#getContractLines();
        }
        break;
      }
      case SalesInvoiceInvoicingMethod.Regie: {
        await this.#getArticles();
        await this.#getProjectActivities();
        break;
      }
    }
  }

  getVat(id: number): any | undefined {
    return this.#vatIdMap()[id];
  }

  getProjectTerm(id: string): any | undefined {
    return this.#projectTermsIdMap()[id];
  }

  getProjectActivity(id: string): any | undefined {
    return this.#projectActivitiesIdMap()[id];
  }

  getArticle(code: string): any | undefined {
    return this.#articlesIdMap()[code];
  }

  async #getProjectTerms() {
    this.projectTerms.set([{
      contractLineCode: "CL007",
      termNumber: 1,
      description: "Termijn 1",
      isInvoiced: false,
      amountExclVAT: 518207.758,
      id: "B00723,CL007,1",
      displayName: "1 - Term 1"
    }]);
  }

  async #getProjectActivities() {
    this.projectActivities.set([
      {
        code: "W0001",
        projectCode: "S04845",
        description: "PLM - Description",
        id: "W0001,S04845",
        displayName: "W0001 - PLM - Description"
      },
      {
        code: "W0002",
        projectCode: "S04845",
        description: "Description",
        id: "W0002,S04845",
        displayName: "W0002 - Description"
      }
    ]);
  }

  async #getArticles() {
    this.articles.set([
      {
        code: "100",
        category: "Task",
        description: "Taken Algemeen",
        unitOfMeasureCode: "uur",
        financialCompanyNumber: null
      },
      {
        code: "3",
        category: "Item",
        description: "Materiaal Algemeen",
        unitOfMeasureCode: "pst",
        financialCompanyNumber: null
      }
    ]);
  }

  async #getContractLines() {
    this.contractLines.set([{
      contractCode: "CL007",
      contractNumber: "B00723",
      customerNumber: "CUST4",
      customerName: "Customer D",
      paymentCondition: {
        code: "007",
        description: "Betaling binnen 7 dagen",
        numberOfDays: 7
      },
      vatTransferred: false,
      wagesPercentage: 0,
      gAccountPercentage: 0,
      status: "Open"
    }]);
  }


  async #getVats() {
    this.vat.set([
      {
        id: 12,
        counterpartId: 8,
        type: "Transferred",
        financialCompanyNumber: "251",
        displayText: "Hoog (verlegd)",
        lnCode: "03",
        percentage: 21,
        description: "BTW Verlegd Hoog",
        sortOrder: 1,
        invoiceAndSubtotalText: "21% verlegd",
        invoiceLineCode: "H",
        ublTaxCategory: "AE"
      },
      {
        id: 13,
        counterpartId: 9,
        type: "Transferred",
        financialCompanyNumber: "251",
        displayText: "Laag (verlegd)",
        lnCode: "04",
        percentage: 9,
        description: "BTW Verlegd Laag",
        sortOrder: 2,
        invoiceAndSubtotalText: "9% verlegd",
        invoiceLineCode: "L",
        ublTaxCategory: "AE"
      },
      {
        id: 14,
        counterpartId: 10,
        type: "Transferred",
        financialCompanyNumber: "251",
        displayText: "Nul (verlegd)",
        lnCode: "06",
        percentage: 0,
        description: "BTW Verlegd Nul",
        sortOrder: 3,
        invoiceAndSubtotalText: "0% verlegd",
        invoiceLineCode: "N",
        ublTaxCategory: "AE"
      }
    ]);
  }
}

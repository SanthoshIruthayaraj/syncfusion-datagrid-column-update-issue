import { computed, inject } from '@angular/core';
import { SalesInvoiceInvoicingMethod } from "./sales-invoice-invoicing-method";
import { SalesInvoiceDomainService } from "./sales-invoice.domain-service";

export class InvoiceLineColumns {

  salesInvoiceDomainService = inject(SalesInvoiceDomainService);
  salesInvoice = computed(() => this.salesInvoiceDomainService.salesInvoice());

  columnTermIdVisible = computed(() => {
    return this.salesInvoice()?.invoice?.invoicingMethod === SalesInvoiceInvoicingMethod.Termijn;
  });

  columnArticleVisible = computed(() => {
    return this.salesInvoice()?.invoice?.invoicingMethod === SalesInvoiceInvoicingMethod.Regie;
  });

  columnActivityVisible = computed(() => {
    const salesInvoice = this.salesInvoice();
    if (!salesInvoice) {
      return false;
    }

    // Adding the workOrderNumber check causes issues when switching between Termijn and Regie invoices.
    // Without this check, switching between different types of invoices works as expected and all columns are properly shown/hidden when switching between termijn and regie invoices.
    // With this check, all signals still produce expected values and all effects run, but the grid/columns no longer update, causing the grid to show regie columns for termijn invoices or vice versa.
    const isWorkOrder = salesInvoice.invoice?.workOrderNumber;
    // OR
    // const isWorkOrder = this.salesInvoiceDomainService.isWorkOrder();

    return salesInvoice.invoice?.invoicingMethod === SalesInvoiceInvoicingMethod.Regie && !isWorkOrder;
  });

}

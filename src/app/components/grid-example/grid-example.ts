import { Component, computed, inject } from '@angular/core';
import { GridModule } from "@syncfusion/ej2-angular-grids";
import { InvoiceLineColumns } from "./invoice-line-columns";
import { SalesInvoiceDomainService } from "./sales-invoice.domain-service";
import { RegieSalesInvoice, TermijnSalesInvoice, WorkOrderSalesInvoice } from "./salesinvoices";

@Component({
  selector: 'app-grid-example',
  imports: [
    GridModule
  ],
  templateUrl: './grid-example.html',
  styleUrl: './grid-example.css',
})
export class GridExample {
  salesInvoiceDomainService = inject(SalesInvoiceDomainService);
  invoiceLineColumns = new InvoiceLineColumns();

  salesInvoiceLines = computed(() => this.salesInvoiceDomainService.salesInvoice().salesInvoiceLines);

  activityDisplay(data: any): string {
    if (data?.activityId == null) {
      return '';
    }

    const activity = this.salesInvoiceDomainService.getProjectActivity(data.activityId);

    if (activity == null) {
      return '';
    }

    return `${activity.code} - ${activity.description}`;
  }

  protected readonly RegieSalesInvoice = RegieSalesInvoice;
  protected readonly TermijnSalesInvoice = TermijnSalesInvoice;
  protected readonly WorkOrderSalesInvoice = WorkOrderSalesInvoice;
}

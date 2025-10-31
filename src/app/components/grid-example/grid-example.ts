import { Component, ViewChild, computed, inject } from '@angular/core';
import { GridComponent, GridModule } from "@syncfusion/ej2-angular-grids";
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
  @ViewChild('grid') grid?: GridComponent;
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

  buttonClick(str: string) {
    let visibleColumns: string[] = []; 
    let hiddenColumns: string[] = [];

    if (str === "Term") {
      this.salesInvoiceDomainService.salesInvoice.set(TermijnSalesInvoice);
      visibleColumns = ['[Term]'];
      hiddenColumns = ['[Regie/Work Order]', '[Regie Only Column]']
    } else if (str === "Regie") {
      this.salesInvoiceDomainService.salesInvoice.set(RegieSalesInvoice);
      visibleColumns = ['[Regie/Work Order]', '[Regie Only Column]']
      hiddenColumns = ['[Term]'];
    } else if (str === "Work Order") {
      this.salesInvoiceDomainService.salesInvoice.set(WorkOrderSalesInvoice);
      visibleColumns = ['[Regie/Work Order]']
      hiddenColumns = ['[Term]', '[Regie Only Column]'];
    }

    this.grid?.showColumns(visibleColumns);
    this.grid?.hideColumns(hiddenColumns);
  }
}
 
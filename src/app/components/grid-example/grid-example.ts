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

  buttonClick(type: string) {
    const configs: Record<string, { invoice: unknown; show: string[]; hide: string[] }> = {
      Term: {
        invoice: TermijnSalesInvoice,
        show: ['[Term]'],
        hide: ['[Regie/Work Order]', '[Regie Only Column]']
      },
      Regie: {
        invoice: RegieSalesInvoice,
        show: ['[Regie/Work Order]', '[Regie Only Column]'],
        hide: ['[Term]']
      },
      'Work Order': {
        invoice: WorkOrderSalesInvoice,
        show: ['[Regie/Work Order]'],
        hide: ['[Term]', '[Regie Only Column]']
      }
    };
  
    const config = configs[type];
  
    this.salesInvoiceDomainService.salesInvoice.set(config.invoice);
    this.grid?.showColumns(config.show);
    this.grid?.hideColumns(config.hide);
  }
}
 
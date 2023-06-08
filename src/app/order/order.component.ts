import { Component } from '@angular/core';
import { Customer} from '../models/Customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { OrderService } from '../service/order.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})



export class OrderComponent {

  public listOrder:Order[] = [];
  constructor(private customerService: CustomerService, private orderService: OrderService, private router: Router,private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const customerId = +idParam;
      this.orderService.getOrderofCustomer(customerId).subscribe((data) => {
        console.log(data);
        this.listOrder = data;
      });
    }
  }

  id = this.route.snapshot.paramMap.get('id');

  // public getListCustomer(){
  //   this.orderService.getOrder().subscribe( (data) => {
  //     console.log(data);
  //     this.listOrder = data;
  //   } )
  // }

  // public getListOrder(id: any){
  //   this.orderService.getOrderById(id).subscribe( (data) => {
  //     console.log(data);
  //     this.listOrder = data.order;
  //   } )
  // }

  // public addCustomer() {
  //   this.router.navigate(['customer-form']);
  // }

  // public deleteCustomer(id: any){
  //   console.log('Customer id: '+id);
  //   this.orderService.deleteOrder(Number(id)).subscribe( (data)=>{
  //     console.log('delete: ' +data);
  //   } )
  //   this.getListCustomer();
  // }


  // public editCustomer(id: any) {
  //   this.router.navigate(['customer-form', id]);
  // }

  // selectedCustomer: Customer[] = [];

  // deleteSelectedCustomer() {
  //   for (const customer of this.selectedCustomer) {
  //     this.deleteCustomer(customer.id);
  //   this.selectedCustomer = [];
  //   }
  // }

  // toggleCustomerSelection(cus: Customer) {
  //   const index = this.selectedCustomer.findIndex(emp => emp.id === cus.id);
  //   if (index > -1) {
  //     // Nhân viên đã được chọn, hủy chọn
  //     this.selectedCustomer.splice(index, 1);
  //   } else {
  //     // Nhân viên chưa được chọn, thêm vào danh sách chọn
  //     this.selectedCustomer.push(cus);
  //   }
  // }

  // showOrders(id: any) {
  //   // Chuyển hướng đến trang đơn hàng với id khách hàng
  //   this.router.navigate(['customer/', id]);
  // }


}

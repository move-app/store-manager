import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClothStoreService {

  constructor() { }

  async baseGraphCMSFetch (mutation: {query: string}) {
    var data = await fetch(environment.apiUrl, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "authorization": `Bearer ${environment.apiKey}`
        },
        body: JSON.stringify(mutation)
    }).then(resp => resp.json());

    return data;
  }

  async getClothStores() {}
  async getClothStore(id: string) {}
  async updateClothStore(clothStore: any) {}
  async insertClothStore(clothStore: any) {}
  async insertOrderInClothStore(item: any, clothStoreId: string) {}
  async updateOrderInClothStore(item: any, clothStoreId: string) {}
  async deleteOrderInClothStore(item: any, clothStoreId: string) {}
  async deleteClothStore(clothStore: any) {}
}

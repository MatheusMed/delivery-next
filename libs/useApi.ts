
export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
}

export const customUseApi = () => ({

  getTenant: (tenantSlug: string): boolean | getTenantResponse => {

    switch (tenantSlug) {
      case 'DeliveryBurger':
        return {
          name: "DeliveryBurger",
          mainColor: "#ff000",
          secondColor: "00ff00"
        }
        break;
      case 'DeliveryPizza':
        return {
          name: "DeliveryPizza",
          mainColor: "#0000ff",
          secondColor: "00ff00"
        }
        break;
      default: return false;

    }
  }

});
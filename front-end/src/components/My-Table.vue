<template>
  <div class="w-full px-10 pt-10">
    <div class="flex flex-col">
      <div class="flex flex-row">
        <img class="mr-2" src="../assets/images/table-header.svg" alt="icone do menu">
        <p class="text-cf-dark-blue font-medium text-2xl">Notas fiscais</p>
      </div>
      <p class="text-sm text-cf-dark-grey">Visualize as notas fiscais que você tem.</p>
    </div>
    <table class="table-fixed mt-2 w-full border-separate border-spacing-y-4">
      <thead>
        <tr>
          <th class="text-cf-mid-grey text-sm text-left px-6">NOTA FISCAL</th>
          <th class="text-cf-mid-grey text-sm text-left px-6">SACADO</th>
          <th class="text-cf-mid-grey text-sm text-left px-6">CEDENTE</th>
          <th class="text-cf-mid-grey text-sm text-left px-6">EMISSÃO</th>
          <th class="text-cf-mid-grey text-sm text-left px-6">VALOR</th>
          <th class="text-cf-mid-grey text-sm text-left px-6">STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, i) in ordersData" :key="i">
          <td class="text-cf-dark2-grey text-sm text-left border-y border-l rounded-l-lg px-6 h-14">{{ order.nNf }}
          </td>
          <td class="text-cf-dark2-grey text-sm text-left border-y px-6 h-14">{{ order.buyer.name }}</td>
          <td class="text-cf-dark2-grey text-sm text-left border-y px-6 h-14">{{ order.provider.name }}</td>
          <td class="text-cf-dark2-grey text-sm text-left border-y px-6 h-14">{{ formatData(order.emissionDate) }}
          </td>
          <td class="text-cf-green text-sm text-left border-y px-6 h-14">{{ formatValue(order.value) }}</td>
          <td class="text-cf-green text-sm text-left border-y px-6 h-14">{{ order.orderStatusDescription }}</td>
          <td class="border-y border-r rounded-r-lg h-14">
            <button class="border py-1.5 px-6 rounded-3xl text-gray-500 text-xs">
              Dados do cedente
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api';
import { onMounted, ref } from 'vue';

export default {
  methods: {
    formatData(data) {
      return new Date(data).toLocaleDateString();
    },
    formatValue(value) {
      const valueCurrencyOptions = {
        style: 'currency',
        currency: 'BRL',
      };
      const formatedValue = (Number(value)).toLocaleString('pt-BR', valueCurrencyOptions)
      return formatedValue;
    }
  },

  setup() {
    const ordersData = ref([]);

    const fetchOrders = async () => api.get('/').then((response) => (ordersData.value = response.data));

    onMounted(fetchOrders);
    document.title = "Notas Fiscais";

    return { ordersData }
  },

}
</script>

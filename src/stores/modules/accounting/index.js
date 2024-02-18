import actions from "@/stores/modules/accounting/actions.js";
import getters from "@/stores/modules/accounting/getters.js";
import mutations from "@/stores/modules/accounting/mutations.js";


export default {
    namespaced: true,
    state(){
        return{
            ledgerAccount : [],
            accountControl: [],
            trailBalance: null,
            incomeStatement: null,
            balanceSheet: null,
        }
    },
    actions: actions,
    getters: getters,
    mutations: mutations
}
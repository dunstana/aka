import { createStore} from "vuex";
import accounting from "@/stores/modules/accounting/index.js";
import getters from "@/stores/MainStore/getters.js";
import actions from "@/stores/MainStore/actions.js";
import mutations from "@/stores/MainStore/mutations.js";

const mainStore = createStore({
    modules :{
        accounting : accounting
    },
    state () {
        return {
            userToken : "null",
            loggedInId : null,
            orgId : null,
            orgName : null,
            userName : " Test User ",
            userEmail: null,
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
});

export default mainStore
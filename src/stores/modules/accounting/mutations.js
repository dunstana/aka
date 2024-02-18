import axios from "axios";

import {authTokenConfig, searchableQuery} from "@/utilities/UtilityLibrary.js";
import {baseUrl} from "@/baseUrl/baseUrl.js";

export default{
    async setLedgerAccount(state,payload){
        const search = searchableQuery(payload)
        await  axios.get(baseUrl+"accounting/ledger_account"+search,authTokenConfig)
            .then(res =>{
                state.ledgerAccount = res.data
            }).catch(err =>{
                state.ledgerAccountAccount = []
            })
    },
    async setPostJournalTransaction(state, payload){
        await  axios.post(baseUrl+"accounting/journal_entry/transact",payload,authTokenConfig)
            .then(res =>{
                window.location.reload()
            }).catch(err =>{
                console.log(err.response)
            })
    },
    async setAccountControl(state){
        await  axios.get(baseUrl+"accounting/control/list",authTokenConfig)
            .then(res =>{
                state.accountControl = res.data
            }).catch(err =>{
                state.accountControl = []
            })
    },
    async setPostLedgerAccount(state, payload){
        await  axios.post(baseUrl+"accounting/ledger_account?orgId="+this.getters["getOrgId"],payload,authTokenConfig)
            .then(res =>{
                this.dispatch("business/setLedgerAccount",
                    {
                        orgId : this.getters["getOrgId"]
                    })
            }).catch(err =>{
                state.accountControl = []
            })
    },
    async setTrailBalance(state, payload){
        const search = searchableQuery(payload)
        await  axios.get(baseUrl+"accounting/trailBalance"+search,authTokenConfig)
            .then(res =>{
                state.trailBalance = res.data
            }).catch(err =>{
                state.trailBalance = null
            })
    },
    async setIncomeStatement(state, payload){
        const search = searchableQuery(payload)
        await  axios.get(baseUrl+"accounting/incomeStatement"+search,authTokenConfig)
            .then(res =>{
                state.incomeStatement = res.data
            }).catch(err =>{
                state.incomeStatement = null
            })
    },
    async setBalanceSheet(state, payload){
        const search = searchableQuery(payload)
        await  axios.get(baseUrl+"accounting/balanceSheet"+search,authTokenConfig)
            .then(res =>{
                state.balanceSheet = res.data
            }).catch(err =>{
                state.balanceSheet = null
            })
    },
}
export default{
    getAccountControl(state){
        return state.accountControl
    },
    getLedgerAccounts(state){
        return state.ledgerAccount
    },
    getTrailBalance(state){
        return state.trailBalance
    },
    getIncomeStatement(state){
        return state.incomeStatement
    },
    getBalanceSheet(state){
        return state.balanceSheet
    },
}
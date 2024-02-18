export default{
    async setLedgerAccount(context, payload)
    {
        context.commit('setLedgerAccount', payload)
    },
    async setPostJournalTransaction(context, payload)
    {
        context.commit('setPostJournalTransaction',payload)
    },
    async setAccountControl(context)
    {
        context.commit('setAccountControl')
    },
    async setPostLedgerAccount(context,payload)
    {
        context.commit('setPostLedgerAccount',payload)
    },
    async setTrailBalance(context,payload)
    {
        context.commit('setTrailBalance',payload)
    },
    async setBalanceSheet(context,payload)
    {
        context.commit('setBalanceSheet',payload)
    },
    async setIncomeStatement(context,payload)
    {
        context.commit('setIncomeStatement',payload)
    },


}
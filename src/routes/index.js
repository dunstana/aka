import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "@/pages/Dashboard/Welcome.vue";
import LedgerReport from "@/pages/accounting/reports/LedgerReport.vue";
import JournalReport from "@/pages/accounting/reports/JournalReport.vue";
import TrialBalance from "@/pages/accounting/reports/TrialBalance.vue";
import IncomeStatement from "@/pages/accounting/reports/IncomeStatement.vue";
import LedgerAccounts from "@/pages/accounting/LedgerAccounts.vue";
import NewJournals from "@/pages/accounting/NewJournals.vue";
import AdjustJournal from "@/pages/accounting/AdjustJournal.vue";
import AccountBalances from "@/pages/accounting/AccountBalances.vue";
import error404 from "@/errorPages/Error404.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'welcome',
      component:  Welcome
    },
    {
      path: '/ledger-report',
      name: 'Ledger Report',
      component:  LedgerReport
    },
    {
      path: '/journal-report',
      name: 'Journal Report',
      component:  JournalReport
    },
    {
      path: '/trialBalance-report',
      name: 'Trial Balance',
      component:  TrialBalance
    },
    {
      path: '/income-statement-report',
      name: 'Income Statement',
      component:  IncomeStatement
    },
    {
      path: '/ledger-accounts',
      name: 'Ledger Accounts',
      component:  LedgerAccounts
    },
    {
      path: '/balance-sheet-report',
      name: 'Balance Sheet',
      component:  IncomeStatement
    },
    {
      path: '/new-journal-entry',
      name: 'New Journal Entry',
      component:  NewJournals
    },
    {
      path: '/journal/adjust-entry',
      name: 'Adjust Journal Entry',
      component:  AdjustJournal
    },
    {
      path: '/account-balances',
      name: 'Account Balance',
      component:  AccountBalances
    },
    {
      path: '/:catchAll(.*)',
      name : "404 page Not Found",
      component:  error404
    }
  ]
})

router.beforeEach((to, _1, next) => {
  next()
})

router.afterEach(() => {
  //console.log('Router after each');
});

export default router

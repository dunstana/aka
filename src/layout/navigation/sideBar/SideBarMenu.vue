<script>

import {onMounted} from "vue";

export default {

  setup()
  {

    onMounted(()=>{

    })
    return{

    }
  }
}

</script>

<template>
  <!--begin::Sidebar-->
  <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
    <!--begin::Logo-->
    <div class="app-sidebar-logo d-none d-lg-flex flex-stack flex-shrink-0 px-8" id="kt_app_sidebar_logo">
      <!--begin::Logo image-->
      <a href="index.html">
        <img alt="Logo" src="/logo-large.png" class="theme-light-show h-25px" />
        <img alt="Logo" src="/logo-large.png" class="theme-dark-show h-25px" />
      </a>
      <!--end::Logo image-->
      <!--begin::Menu wrapper-->
      <div class="ms-5">
        <button class="btn btn-icon btn-icon-custom-color btn-active-color-primary w-auto px-0" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
          <i class="ki-duotone ki-setting-2 fs-1 me-n1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </button>
        <!--begin::Menu 3-->
        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
          <!--begin::Heading-->
          <div class="menu-item px-3">
            <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
          </div>
          <!--end::Heading-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="#" class="menu-link px-3">Create Invoice</a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="#" class="menu-link flex-stack px-3">Create Payment
              <span class="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
											<i class="ki-duotone ki-information fs-6">
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
											</i>
										</span></a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="#" class="menu-link px-3">Generate Bill</a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
            <a href="#" class="menu-link px-3">
              <span class="menu-title">Subscription</span>
              <span class="menu-arrow"></span>
            </a>
            <!--begin::Menu sub-->
            <div class="menu-sub menu-sub-dropdown w-175px py-4">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">Plans</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">Billing</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">Statements</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content px-3">
                  <!--begin::Switch-->
                  <label class="form-check form-switch form-check-custom form-check-solid">
                    <!--begin::Input-->
                    <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                    <!--end::Input-->
                    <!--end::Label-->
                    <span class="form-check-label text-muted fs-6">Recuring</span>
                    <!--end::Label-->
                  </label>
                  <!--end::Switch-->
                </div>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu sub-->
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3 my-1">
            <a href="#" class="menu-link px-3">Settings</a>
          </div>
          <!--end::Menu item-->
        </div>
        <!--end::Menu 3-->
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Logo-->
    <div class="separator d-none d-lg-block"></div>
    <!--begin::Toolbar-->
    <div class="app-sidebar-toolbar d-flex flex-stack py-6 px-8">
      <!--begin::Select-->
      <select class="form-select form-select-custom fw-bold" data-control="select2" data-placeholder="Select Project" data-hide-search="true">
        <option value="1" selected="selected">Select Project</option>
        <option value="2">Good CRM App</option>
        <option value="3">Oppo Booking Site</option>
        <option value="4">FinOptima SaaS</option>
        <option value="5">Degree Mobile App</option>
      </select>
      <!--end::Select-->
      <!--begin::Button-->
      <a href="#" class="btn btn-icon btn-custom fw-bold flex-shrink-0 ms-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">
        <i class="ki-duotone ki-plus fs-1"></i>
      </a>
      <!--end::Button-->
    </div>
    <!--end::Toolbar-->
    <div class="separator"></div>
    <!--begin::Sidebar menu-->
    <div class="app-sidebar-menu hover-scroll-y my-5 my-lg-5 mx-3" id="kt_app_sidebar_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_toolbar, #kt_app_sidebar_footer" data-kt-scroll-offset="0">
      <!--begin::Menu-->
      <div class="menu menu-column menu-sub-indention menu-active-bg fw-semibold" id="#kt_sidebar_menu" data-kt-menu="true">
        
        <div data-kt-menu-trigger="click" class="menu-item here menu-accordion">
          
          <span class="menu-link">
										<span class="menu-icon">
											<i class="ki-duotone ki-chart-pie-3 fs-2">
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
											</i>
										</span>
										<span class="menu-title">Dashboards</span>
										<span class="menu-arrow"></span>
          </span>
          
          <!--begin:Menu sub-->
          <div class="menu-sub menu-sub-accordion">
            <div class="menu-item">
              <router-link class="menu-link link" :to="{ name : 'welcome'}">
												<span class="menu-bullet">
													<span class="bullet bullet-dot"></span>
												</span>
                <span class="menu-title">Home</span>
              </router-link>
            </div>
            <div class="menu-item">
              <a class="menu-link link" href="dashboards/projects.html">
												<span class="menu-bullet">
													<span class="bullet bullet-dot"></span>
												</span>
                <span class="menu-title">Finance Analytics</span>
              </a>
            </div>
          </div>
          <!--end:Menu sub-->
        </div>

        <div class="menu-item pt-5">
          <div class="menu-content">
            <span class="menu-heading fw-bold text-uppercase fs-7">Accounts</span>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
										<span class="menu-icon">
											<i class="ki-duotone ki-abstract-26 fs-2">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
										<span class="menu-title">Accounting</span>
										<span class="menu-arrow"></span>
									</span>

          <!--begin:Menu sub-->
          <div class="menu-sub menu-sub-accordion">
            <div class="menu-item">
              <router-link class="menu-link link" :to="{name : 'Ledger Accounts'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Ledger Accounts</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link link" :to="{name : 'New Journal Entry'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">New Journals</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link" :to="{name:'Adjust Journal Entry'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Adjust Journal</span>
              </router-link>
            </div>
          </div>
          <!--end:Menu sub-->
        </div>

        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
										<span class="menu-icon">
											<i class="las la-chart-bar fs-2">
												<span class="path1"></span>
												<span class="path2"></span>
											</i>
										</span>
										<span class="menu-title">Reports</span>
										<span class="menu-arrow"></span>
									</span>
          
          <!--begin:Menu sub-->
          <div class="menu-sub menu-sub-accordion">
            <div class="menu-item">
              <router-link class="menu-link link" :to="{name : 'Ledger Report'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Ledger Report</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link link" :to="{name : 'Journal Report'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Journal Report</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link" :to="{name:'Trial Balance'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Trial Balance</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link" :to="{ name :'Income Statement'}">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Income Statement</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link" :to="{name: 'Balance Sheet'}">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                <span class="menu-title">Balance Sheet</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link class="menu-link" :to="{name : 'Account Balance'}">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                <span class="menu-title">Account Balances</span>
              </router-link>
            </div>
          </div>
          <!--end:Menu sub-->
        </div>

      </div>
      <!--end::Menu-->
    </div>
    <!--end::Sidebar menu-->
    <!--begin::User-->
    <div class="app-sidebar-user d-flex flex-stack py-5 px-8">
      <!--begin::User avatar-->
      <div class="d-flex me-5">
        <!--begin::Menu wrapper-->
        <div class="me-5">
          <!--begin::Symbol-->
          <div class="symbol symbol-40px cursor-pointer" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
            <img src="/media/avatars/300-1.jpg" alt="" />
          </div>
          <!--end::Symbol-->
          <!--begin::User account menu-->
          <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <div class="menu-content d-flex align-items-center px-3">
                <!--begin::Avatar-->
                <div class="symbol symbol-50px me-5">
                  <img alt="Logo" src="/media/avatars/300-1.jpg" />
                </div>
                <!--end::Avatar-->
                <!--begin::Username-->
                <div class="d-flex flex-column">
                  <div class="fw-bold d-flex align-items-center fs-5">Max Smith
                    <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                  <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                </div>
                <!--end::Username-->
              </div>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu separator-->
            <div class="separator my-2"></div>
            <!--end::Menu separator-->
            <!--begin::Menu item-->
            <div class="menu-item px-5">
              <a href="account/overview.html" class="menu-link px-5">My Profile</a>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-5">
              <a href="apps/projects/list.html" class="menu-link px-5">
                <span class="menu-text">My Projects</span>
                <span class="menu-badge">
													<span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
              </a>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
              <a href="#" class="menu-link px-5">
                <span class="menu-title">My Subscription</span>
                <span class="menu-arrow"></span>
              </a>
              <!--begin::Menu sub-->
              <div class="menu-sub menu-sub-dropdown w-175px py-4">
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/referrals.html" class="menu-link px-5">Referrals</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/billing.html" class="menu-link px-5">Billing</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/statements.html" class="menu-link px-5">Payments</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/statements.html" class="menu-link d-flex flex-stack px-5">Statements
                    <span class="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
														<i class="ki-duotone ki-information-5 fs-5">
															<span class="path1"></span>
															<span class="path2"></span>
															<span class="path3"></span>
														</i>
													</span></a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu separator-->
                <div class="separator my-2"></div>
                <!--end::Menu separator-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <div class="menu-content px-3">
                    <label class="form-check form-switch form-check-custom form-check-solid">
                      <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                      <span class="form-check-label text-muted fs-7">Notifications</span>
                    </label>
                  </div>
                </div>
                <!--end::Menu item-->
              </div>
              <!--end::Menu sub-->
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-5">
              <a href="account/statements.html" class="menu-link px-5">My Statements</a>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu separator-->
            <div class="separator my-2"></div>
            <!--end::Menu separator-->
            <!--begin::Menu item-->
            <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-end" data-kt-menu-offset="-15px, 0">
              <a href="#" class="menu-link px-5">
												<span class="menu-title position-relative">Language
												<span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
												<img class="w-15px h-15px rounded-1 ms-2" src="/media/flags/united-states.svg" alt="" /></span></span>
              </a>
              <!--begin::Menu sub-->
              <div class="menu-sub menu-sub-dropdown w-175px py-4">
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/settings.html" class="menu-link d-flex px-5 active">
													<span class="symbol symbol-20px me-4">
														<img class="rounded-1" src="/media/flags/united-states.svg" alt="" />
													</span>English</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/settings.html" class="menu-link d-flex px-5">
													<span class="symbol symbol-20px me-4">
														<img class="rounded-1" src="/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/settings.html" class="menu-link d-flex px-5">
													<span class="symbol symbol-20px me-4">
														<img class="rounded-1" src="/media/flags/germany.svg" alt="" />
													</span>German</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/settings.html" class="menu-link d-flex px-5">
													<span class="symbol symbol-20px me-4">
														<img class="rounded-1" src="/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="account/settings.html" class="menu-link d-flex px-5">
													<span class="symbol symbol-20px me-4">
														<img class="rounded-1" src="/media/flags/france.svg" alt="" />
													</span>French</a>
                </div>
                <!--end::Menu item-->
              </div>
              <!--end::Menu sub-->
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-5 my-1">
              <a href="account/settings.html" class="menu-link px-5">Account Settings</a>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-5">
              <a href="authentication/sign-in/basic.html" class="menu-link px-5">Sign Out</a>
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::User account menu-->
        </div>
        <!--end::Menu wrapper-->
        <!--begin::Info-->
        <div class="me-2">
          <!--begin::Username-->
          <a href="#" class="app-sidebar-username text-gray-800 text-hover-primary fs-6 fw-semibold lh-0">Paul Melone</a>
          <!--end::Username-->
          <!--begin::Description-->
          <span class="app-sidebar-deckription text-gray-500 fw-semibold d-block fs-8">Python Dev</span>
          <!--end::Description-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::User avatar-->
      <!--begin::Action-->
      <a href="authentication/sign-in/basic.html" class="btn btn-icon btn-active-color-primary btn-icon-custom-color me-n4" data-bs-toggle="tooltip" title="End session and singout">
        <i class="ki-duotone ki-entrance-left fs-2 text-gray-500">
          <span class="path1"></span>
          <span class="path2"></span>
        </i>
      </a>
      <!--end::Action-->
    </div>
    <!--end::User-->
  </div>
  <!--end::Sidebar-->
</template>

<style scoped>

</style>
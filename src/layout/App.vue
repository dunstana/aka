<script>
import TopBarMenu from "@/layout/navigation/topBar/TopBarMenu.vue";
import SideBarMenu from "@/layout/navigation/sideBar/SideBarMenu.vue";
import {onMounted} from "vue";

export default {
  components: {SideBarMenu, TopBarMenu},
  setup()
  {

    onMounted(()=>{
      setTimeout(()=>{
        const activeElement = document.querySelector('.menu-link.link.active');
        if(activeElement)
        {
          var parentElement =  activeElement.closest('.menu-sub.menu-sub-accordion');
          var mainParent = parentElement.closest('.menu-item.menu-accordion');
          mainParent.classList.add('show')
          const elementRefId = parentElement ? parentElement.id : null
          var main = document.querySelector('a[href="#'+elementRefId+'"]')
          main.setAttribute('aria-expanded',"true")
        }
      },10)
    })
    return{

    }
  }
}
</script>

<template>
  <!--begin::App-->
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <top-bar-menu></top-bar-menu>
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <side-bar-menu></side-bar-menu>
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <!--begin::Content container-->
              <div id="kt_app_content_container" class="app-container container-fluid">

                <router-view></router-view>

              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
          <!--begin::Footer-->
          <div id="kt_app_footer" class="app-footer">
            <!--begin::Footer container-->
            <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
              <!--begin::Copyright-->
              <div class="text-gray-900 order-2 order-md-1">
                <span class="text-muted fw-semibold me-1">2023&copy;</span>
                <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Adanian Labs</a>
              </div>
              <!--end::Copyright-->
              <!--begin::Menu-->
              <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li class="menu-item">
                  <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                </li>
                <li class="menu-item">
                  <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                </li>
                <li class="menu-item">
                  <a href="https://themes.getbootstrap.com/product/good-bootstrap-5-admin-dashboard-template" target="_blank" class="menu-link px-2">Purchase</a>
                </li>
              </ul>
              <!--end::Menu-->
            </div>
            <!--end::Footer container-->
          </div>
          <!--end::Footer-->
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
  <!--end::App-->

  <!--begin::Scrolltop-->
  <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
    <i class="ki-duotone ki-arrow-up">
      <span class="path1"></span>
      <span class="path2"></span>
    </i>
  </div>
  <!--end::Scrolltop-->

</template>

<style scoped>

</style>
